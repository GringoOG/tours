/**
 * Traveli-style interactions: hero water ripple, image hover FX, scroll reveals, smooth scroll.
 */

function initSmoothScroll() {
  if (!document.body.dataset.page || document.body.dataset.page !== "home") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let target = window.scrollY;
  let current = window.scrollY;
  let rafId = null;

  const smooth = 0.085;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  window.addEventListener(
    "wheel",
    (event) => {
      if (event.ctrlKey) return;
      event.preventDefault();
      target = clamp(target + event.deltaY, 0, document.documentElement.scrollHeight - window.innerHeight);
      if (!rafId) rafId = requestAnimationFrame(tick);
    },
    { passive: false }
  );

  let touchStart = 0;
  window.addEventListener("touchstart", (e) => {
    touchStart = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener(
    "touchmove",
    (e) => {
      const delta = touchStart - e.touches[0].clientY;
      touchStart = e.touches[0].clientY;
      target = clamp(target + delta, 0, document.documentElement.scrollHeight - window.innerHeight);
      if (!rafId) rafId = requestAnimationFrame(tick);
    },
    { passive: true }
  );

  function tick() {
    current += (target - current) * smooth;
    if (Math.abs(target - current) < 0.5) {
      current = target;
      window.scrollTo(0, current);
      rafId = null;
      return;
    }
    window.scrollTo(0, current);
    rafId = requestAnimationFrame(tick);
  }

  window.addEventListener("scroll", () => {
    if (!rafId) {
      target = window.scrollY;
      current = window.scrollY;
    }
  }, { passive: true });
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

    this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
    this.pointer = { x: 0.5, y: 0.5, active: false };
    this.ripples = [];
    this.time = 0;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.scale = 0.72;
    this.ready = false;
    this.needsRender = true;
    this.lastRippleAt = 0;

    this.onResize = this.onResize.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.tick = this.tick.bind(this);

    const start = () => {
      this.ready = true;
      this.onResize();
      requestAnimationFrame(this.tick);
    };

    if (this.img.complete && this.img.naturalWidth) start();
    else this.img.addEventListener("load", start, { once: true });

    window.addEventListener("resize", this.onResize);
    this.shell.addEventListener("pointermove", this.onMove);
    this.shell.addEventListener("pointerleave", this.onLeave);
  }

  drawCover(ctx, img, width, height) {
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    if (!iw || !ih) return;
    const scale = Math.max(width / iw, height / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (width - dw) / 2;
    const dy = (height - dh) / 2;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  onResize() {
    const rect = this.root.getBoundingClientRect();
    this.width = Math.max(1, Math.floor(rect.width * this.dpr * this.scale));
    this.height = Math.max(1, Math.floor(rect.height * this.dpr * this.scale));
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.offscreen = document.createElement("canvas");
    this.offscreen.width = this.width;
    this.offscreen.height = this.height;
    this.offCtx = this.offscreen.getContext("2d");
    this.drawCover(this.offCtx, this.img, this.width, this.height);
    this.base = this.offCtx.getImageData(0, 0, this.width, this.height);
    this.ctx.drawImage(this.offscreen, 0, 0);
    this.needsRender = true;
  }

  onMove(event) {
    if (event.target.closest(".hero-booking, a, button, select, input, label")) {
      this.pointer.active = false;
      this.needsRender = true;
      return;
    }

    const rect = this.root.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    this.pointer = { x, y, active: true };

    const now = performance.now();
    if (now - this.lastRippleAt > 28) {
      this.ripples.push({ x, y, born: this.time, strength: 1 });
      if (this.ripples.length > 10) this.ripples.shift();
      this.lastRippleAt = now;
    }
    this.needsRender = true;
  }

  onLeave() {
    this.pointer.active = false;
    this.needsRender = true;
  }

  tick(now) {
    if (!this.ready) {
      requestAnimationFrame(this.tick);
      return;
    }

    this.time = now * 0.001;
    this.ripples = this.ripples.filter((r) => this.time - r.born < 2.4);
    const animating = this.pointer.active || this.ripples.length > 0;

    if (!animating && !this.needsRender) {
      requestAnimationFrame(this.tick);
      return;
    }

    if (!animating) {
      this.ctx.drawImage(this.offscreen, 0, 0);
      this.needsRender = false;
      requestAnimationFrame(this.tick);
      return;
    }

    const { width, height, base, ctx, ripples } = this;
    const out = ctx.createImageData(width, height);
    const src = base.data;
    const dst = out.data;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const nx = x / width;
        const ny = y / height;
        let ox = 0;
        let oy = 0;

        for (const ripple of ripples) {
          const age = this.time - ripple.born;
          const dx = nx - ripple.x;
          const dy = ny - ripple.y;
          const dist = Math.sqrt(dx * dx + dy * dy) + 0.0001;
          const wave =
            Math.sin(dist * 48 - age * 10) *
            Math.exp(-dist * 4.2 - age * 1.15) *
            ripple.strength;
          ox += (wave * dx) / dist * 22;
          oy += (wave * dy) / dist * 22;
        }

        if (this.pointer.active) {
          const dx = nx - this.pointer.x;
          const dy = ny - this.pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const lens = Math.max(0, 1 - dist / 0.2);
          const bulge = lens * lens;
          ox += dx * bulge * 18;
          oy += dy * bulge * 18;
        }

        const sx = Math.min(width - 1, Math.max(0, Math.round(x + ox)));
        const sy = Math.min(height - 1, Math.max(0, Math.round(y + oy)));
        const si = (sy * width + sx) * 4;
        const di = (y * width + x) * 4;
        dst[di] = src[si];
        dst[di + 1] = src[si + 1];
        dst[di + 2] = src[si + 2];
        dst[di + 3] = src[si + 3];
      }
    }

    ctx.putImageData(out, 0, 0);
    this.needsRender = false;
    requestAnimationFrame(this.tick);
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
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
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

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initHeroWater();
  initImageFx();
  initScrollReveal();
  initStoryPhotos();
  initParallax();
});

window.ToursEffects = {
  refresh() {
    initImageFx();
    initScrollReveal();
  },
};
