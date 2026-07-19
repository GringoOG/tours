/**
 * Traveli-style interactions: hero water ripple, image hover FX, scroll reveals, smooth scroll.
 */

function clamp01(value) {
  if (Number.isNaN(value)) return 0.5;
  return Math.min(1, Math.max(0, value));
}

function initSmoothScroll() {
  // Native scrolling stays enabled — custom wheel hijacking caused page-wide jank.
  return;
}

class HeroWaterRipple {
  constructor(root) {
    this.root = root;
    this.shell = root.closest(".hero-shell") || root;
    this.canvas = root.querySelector(".hero-water-canvas");
    this.img = root.querySelector(".hero-water-source");
    if (!this.canvas || !this.img) return;

    this.mobile = window.matchMedia("(max-width: 900px)").matches;
    if (this.mobile || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.root.classList.add("is-static");
      return;
    }

    this.gl = this.canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "high-performance",
    });

    if (!this.gl) {
      this.root.classList.add("is-static");
      return;
    }

    this.pointer = { x: 0.5, y: 0.5, active: 0, targetActive: 0 };
    this.ripples = new Float32Array(12); // 4 ripples * (x,y,born)
    this.rippleCount = 0;
    this.rippleWrite = 0;
    this.time = 0;
    this.rafId = null;
    this.running = false;
    this.lastRippleAt = 0;
    this.visible = true;

    this.onResize = this.onResize.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.tick = this.tick.bind(this);

    if (!this.initGl()) {
      this.root.classList.add("is-static");
      return;
    }

    const start = () => {
      this.uploadTexture();
      this.onResize();
      this.render(0);
    };

    if (this.img.complete && this.img.naturalWidth) start();
    else this.img.addEventListener("load", start, { once: true });

    window.addEventListener("resize", this.onResize, { passive: true });
    this.shell.addEventListener("pointermove", this.onMove, { passive: true });
    this.shell.addEventListener("pointerleave", this.onLeave, { passive: true });

    if ("IntersectionObserver" in window) {
      this.io = new IntersectionObserver(
        ([entry]) => {
          this.visible = entry.isIntersecting;
          if (!this.visible) this.stop();
        },
        { threshold: 0.05 }
      );
      this.io.observe(this.shell);
    }
  }

  initGl() {
    const gl = this.gl;
    const vsSource = `
      attribute vec2 aPos;
      varying vec2 vUv;
      void main() {
        vUv = aPos * 0.5 + 0.5;
        vUv.y = 1.0 - vUv.y;
        gl_Position = vec4(aPos, 0.0, 1.0);
      }
    `;
    const fsSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform sampler2D uTex;
      uniform vec2 uMouse;
      uniform float uActive;
      uniform float uTime;
      uniform vec3 uRipples[4];

      void main() {
        vec2 uv = vUv;
        vec2 offset = vec2(0.0);

        for (int i = 0; i < 4; i++) {
          vec3 r = uRipples[i];
          float age = uTime - r.z;
          if (age >= 0.0 && age <= 1.6 && r.z > 0.0) {
            vec2 d = uv - r.xy;
            float dist = length(d) + 0.0001;
            float fadeIn = smoothstep(0.0, 0.35, age);
            float wave = sin(dist * 36.0 - age * 8.0) * exp(-dist * 6.0 - age * 1.6) * fadeIn;
            offset += (d / dist) * wave * 0.007;
          }
        }

        if (uActive > 0.01) {
          vec2 d = uv - uMouse;
          float dist = length(d);
          float lens = max(0.0, 1.0 - dist / 0.18);
          offset += d * lens * lens * 0.012 * uActive;
        }

        gl_FragColor = texture2D(uTex, clamp(uv + offset, 0.001, 0.999));
      }
    `;

    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, vsSource);
    const fs = compile(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return false;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return false;
    gl.useProgram(program);
    this.program = program;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    this.uniforms = {
      uTex: gl.getUniformLocation(program, "uTex"),
      uMouse: gl.getUniformLocation(program, "uMouse"),
      uActive: gl.getUniformLocation(program, "uActive"),
      uTime: gl.getUniformLocation(program, "uTime"),
      uRipples: [0, 1, 2, 3].map((i) => gl.getUniformLocation(program, `uRipples[${i}]`)),
    };

    this.texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.uniform1i(this.uniforms.uTex, 0);
    return true;
  }

  uploadTexture() {
    const gl = this.gl;
    const rect = this.root.getBoundingClientRect();
    const max = Math.min(gl.getParameter(gl.MAX_TEXTURE_SIZE) || 2048, 2048);
    // Match the real banner/hero aspect so the texture never stretches
    let tw = Math.max(1, Math.floor(rect.width));
    let th = Math.max(1, Math.floor(rect.height));
    const longest = Math.max(tw, th);
    if (longest > max) {
      const scaleDown = max / longest;
      tw = Math.max(1, Math.floor(tw * scaleDown));
      th = Math.max(1, Math.floor(th * scaleDown));
    }

    const source = document.createElement("canvas");
    source.width = tw;
    source.height = th;
    const ctx = source.getContext("2d");
    const iw = this.img.naturalWidth;
    const ih = this.img.naturalHeight;
    const zoom = Math.max(1, parseFloat(this.root.dataset.waterZoom ?? "1") || 1);
    const scale = Math.max(tw / iw, th / ih) * zoom;
    const dw = iw * scale;
    const dh = ih * scale;
    const posX = clamp01(parseFloat(this.root.dataset.waterPosX ?? "0.5"));
    const posY = clamp01(parseFloat(this.root.dataset.waterPosY ?? "0.5"));
    const ox = (tw - dw) * posX;
    const oy = (th - dh) * posY;
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, tw, th);
    ctx.drawImage(this.img, ox, oy, dw, dh);

    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
  }

  onResize() {
    const rect = this.root.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const width = Math.max(1, Math.floor(rect.width * dpr));
    const height = Math.max(1, Math.floor(rect.height * dpr));
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
      this.gl.viewport(0, 0, width, height);
      if (this.img.complete && this.img.naturalWidth) this.uploadTexture();
    }
    this.render(this.time);
  }

  onMove(event) {
    if (!this.visible) return;
    if (event.target.closest(".hero-booking, a, button, select, input, label")) {
      this.pointer.targetActive = 0;
      this.start();
      return;
    }

    const rect = this.root.getBoundingClientRect();
    this.pointer.x = (event.clientX - rect.left) / rect.width;
    this.pointer.y = (event.clientY - rect.top) / rect.height;
    this.pointer.targetActive = 1;

    const now = performance.now();
    // Skip the first beat so entry doesn't spawn a hard splash
    if (this.pointer.active > 0.35 && now - this.lastRippleAt > 100) {
      const i = this.rippleWrite % 4;
      this.ripples[i * 3] = this.pointer.x;
      this.ripples[i * 3 + 1] = this.pointer.y;
      this.ripples[i * 3 + 2] = this.time;
      this.rippleWrite += 1;
      this.rippleCount = Math.min(4, this.rippleCount + 1);
      this.lastRippleAt = now;
    }
    this.start();
  }

  onLeave() {
    this.pointer.targetActive = 0;
    this.start();
  }

  start() {
    if (this.running || !this.visible) return;
    this.running = true;
    this.rafId = requestAnimationFrame(this.tick);
  }

  stop() {
    this.running = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  render(time) {
    const gl = this.gl;
    if (!gl || !this.program) return;
    this.time = time;

    // Ease lens in/out so the first hover doesn't punch hard
    const ease = this.pointer.targetActive > this.pointer.active ? 0.045 : 0.08;
    this.pointer.active += (this.pointer.targetActive - this.pointer.active) * ease;
    if (Math.abs(this.pointer.active - this.pointer.targetActive) < 0.002) {
      this.pointer.active = this.pointer.targetActive;
    }

    gl.useProgram(this.program);
    gl.uniform2f(this.uniforms.uMouse, this.pointer.x, this.pointer.y);
    gl.uniform1f(this.uniforms.uActive, this.pointer.active);
    gl.uniform1f(this.uniforms.uTime, time);

    let live = 0;
    for (let i = 0; i < 4; i++) {
      const born = this.ripples[i * 3 + 2];
      const age = time - born;
      const active = born > 0 && age >= 0 && age < 1.6;
      gl.uniform3f(
        this.uniforms.uRipples[i],
        this.ripples[i * 3],
        this.ripples[i * 3 + 1],
        born
      );
      if (active) live += 1;
    }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    return live > 0 || this.pointer.active > 0.002 || this.pointer.targetActive > 0;
  }

  tick(now) {
    if (!this.running) return;
    const busy = this.render(now * 0.001);
    if (busy) {
      this.rafId = requestAnimationFrame(this.tick);
      return;
    }
    this.running = false;
    this.rafId = null;
  }
}

function initHeroWater() {
  document.querySelectorAll("[data-hero-water]").forEach((root) => {
    new HeroWaterRipple(root);
  });
}

function initImageFx() {
  document.querySelectorAll(".fx-shake").forEach((el) => {
    el.addEventListener("pointerenter", () => {
      el.classList.remove("is-shaking");
      void el.offsetWidth;
      el.classList.add("is-shaking");
    });
    el.addEventListener("animationend", () => el.classList.remove("is-shaking"));
  });

  document.querySelectorAll(".fx-zoom").forEach((el) => {
    el.addEventListener("pointermove", (event) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--fx-x", `${px * 8}px`);
      el.style.setProperty("--fx-y", `${py * 8}px`);
    });
    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--fx-x", "0px");
      el.style.setProperty("--fx-y", "0px");
    });
  });
}

function revealIfNearViewport(el) {
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight * 1.08) {
    el.classList.add("is-visible");
    return true;
  }
  return false;
}

function initScrollReveal() {
  const items = document.querySelectorAll(".reveal:not(.feature-item):not(.is-visible)");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.06, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 55, 320)}ms`;
    if (!revealIfNearViewport(el)) {
      observer.observe(el);
    }
  });
}

function initFeatureItemReveal() {
  const grid = document.querySelector(".feature-banner .feature-grid");
  if (!grid || grid.dataset.featureRevealBound) return;
  grid.dataset.featureRevealBound = "1";

  const items = grid.querySelectorAll(".feature-item.reveal");
  if (!items.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  let inView = false;
  const show = () => {
    items.forEach((el) => {
      el.classList.remove("is-visible");
      void el.offsetWidth;
      el.classList.add("is-visible");
    });
  };

  const hide = () => {
    items.forEach((el) => el.classList.remove("is-visible"));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !inView) {
          inView = true;
          show();
        } else if (!entry.isIntersecting && inView) {
          inView = false;
          hide();
        }
      });
    },
    { threshold: 0.28, rootMargin: "0px 0px -12% 0px" }
  );

  observer.observe(grid);
}

function initTestimonialsReveal() {
  const showcase = document.querySelector("[data-testimonials-showcase]");
  if (!showcase || showcase.dataset.testimonialsRevealBound) return;
  showcase.dataset.testimonialsRevealBound = "1";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    showcase.classList.add("is-active");
    return;
  }

  let inView = false;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !inView) {
        inView = true;
        showcase.classList.remove("is-active");
        void showcase.offsetWidth;
        showcase.classList.add("is-active");
      } else if (!entry.isIntersecting && inView) {
        inView = false;
        showcase.classList.remove("is-active");
      }
    },
    { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
  );

  observer.observe(showcase);
}

function initStoryPhotos() {
  const root = document.querySelector("[data-story-photos]");
  if (!root) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.classList.add("is-active");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          root.classList.add("is-active");
        } else if (entry.boundingClientRect.top > window.innerHeight * 0.2) {
          root.classList.remove("is-active");
        }
      });
    },
    { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
  );

  observer.observe(root);
}

function initParallax() {
  const blocks = document.querySelectorAll("[data-parallax]");
  if (!blocks.length) return;

  const onScroll = () => {
    blocks.forEach((block) => {
      const rect = block.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      const shift = center * 0.06;
      block.style.setProperty("--parallax-y", `${shift}px`);
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initValueIconSpin() {
  const panels = document.querySelectorAll("[data-values-panel], [data-step-icons]");
  if (!panels.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  panels.forEach((panel) => {
    const icons = panel.querySelectorAll(".value-icon");
    if (!icons.length || panel.dataset.iconSpinBound) return;
    panel.dataset.iconSpinBound = "1";

    let inView = false;
    let spinTimer = null;

    const spin = () => {
      if (spinTimer) window.clearTimeout(spinTimer);
      icons.forEach((icon) => icon.classList.remove("is-spinning"));
      // Restart after a beat so the visitor is already looking at the section
      spinTimer = window.setTimeout(() => {
        icons.forEach((icon, index) => {
          window.setTimeout(() => {
            icon.classList.remove("is-spinning");
            void icon.offsetWidth;
            icon.classList.add("is-spinning");
          }, index * 70);
        });
      }, 180);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          inView = true;
          spin();
        } else if (!entry.isIntersecting && inView) {
          inView = false;
          icons.forEach((icon) => icon.classList.remove("is-spinning"));
        }
      },
      // Fire once the panel sits lower in the viewport (more noticeable)
      { threshold: 0.45, rootMargin: "0px 0px -28% 0px" }
    );

    observer.observe(panel);
  });
}

let aboutMotionObserver = null;

function splitAboutWords() {
  document.querySelectorAll("[data-about-words]").forEach((el) => {
    const text = (el.textContent || "").trim().replace(/\s+/g, " ");
    if (!text) return;
    const words = text.split(" ");
    el.innerHTML = words
      .map(
        (word, index) =>
          `<span class="about-word" style="--word-i:${index}">${word}</span>`
      )
      .join(" ");
  });
}

function initAboutTimelineScroll() {
  const cards = [...document.querySelectorAll(".about-year-card[data-about-fx]")];
  if (!cards.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cards.forEach((card) => {
      card.style.opacity = "1";
      card.style.transform = "none";
      card.classList.add("is-visible");
    });
    return;
  }

  const naturalY = new Map();
  let ticking = false;

  const measure = () => {
    cards.forEach((card) => {
      const prevTransform = card.style.transform;
      const prevOpacity = card.style.opacity;
      card.style.transform = "none";
      card.style.opacity = "0";
      naturalY.set(card, card.getBoundingClientRect().top + window.scrollY);
      card.style.transform = prevTransform;
      card.style.opacity = prevOpacity;
    });
  };

  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    const travel = Math.min(340, vh * 0.45);
    const scrollY = window.scrollY;

    cards.forEach((card) => {
      const absTop = naturalY.get(card);
      if (absTop == null) return;
      const top = absTop - scrollY;
      const start = vh * 1.05;
      const end = vh * 0.28;
      let progress = (start - top) / (start - end);
      progress = Math.min(1, Math.max(0, progress));
      const eased = 1 - Math.pow(1 - progress, 2.4);
      const fromTop = card.classList.contains("about-fx-from-top");
      const y = (1 - eased) * (fromTop ? -travel : travel);
      const opacity = Math.min(1, eased * 1.2);

      card.style.opacity = String(opacity);
      card.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      card.classList.toggle("is-visible", eased > 0.92);
    });
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  const onResize = () => {
    measure();
    update();
  };

  measure();
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
}

function initAboutMotion() {
  if (document.body.dataset.page !== "about") return;

  splitAboutWords();
  initAboutTimelineScroll();

  const items = [...document.querySelectorAll("[data-about-fx]:not(.about-year-card)")];
  if (!items.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  if (aboutMotionObserver) aboutMotionObserver.disconnect();

  aboutMotionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
  );

  items.forEach((el) => {
    aboutMotionObserver.observe(el);
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 40) {
      el.classList.add("is-visible");
    }
  });
}

function initFooterReveal() {
  const footer = document.querySelector("[data-footer-stage]");
  if (!footer || footer.dataset.footerBound) return;
  footer.dataset.footerBound = "1";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    footer.classList.add("is-revealed");
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        footer.classList.add("is-revealed");
      } else if (entry.boundingClientRect.top > window.innerHeight * 0.15) {
        footer.classList.remove("is-revealed");
      }
    },
    { threshold: 0.2, rootMargin: "0px 0px -6% 0px" }
  );

  observer.observe(footer);
}

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initHeroWater();
  initImageFx();
  initScrollReveal();
  initFeatureItemReveal();
  initTestimonialsReveal();
  initStoryPhotos();
  initValueIconSpin();
  initParallax();
  initAboutMotion();
  initFooterReveal();
});

window.ToursEffects = {
  refresh() {
    initImageFx();
    initScrollReveal();
    initFeatureItemReveal();
    initAboutMotion();
  },
};
