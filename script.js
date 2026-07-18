const STORAGE_KEY = "tours-lang";
const SUPPORTED_LOCALES = ["en", "es", "fr"];

const tours = [
  {
    slug: "machu-picchu",
    image: "assets/machu-picchu.jpg",
    price: 189,
  },
  {
    slug: "rainbow-mountain",
    image: "assets/rainbow-mountain.png",
    price: 79,
  },
  {
    slug: "maras",
    image: "assets/maras.png",
    price: 59,
  },
  {
    slug: "moray",
    image: "assets/moray.jpg",
    price: 59,
  },
  {
    slug: "mountain-bike",
    image: "assets/mountain-bike.png",
    price: 69,
  },
];

const i18n = {
  en: {
    brand: "Ollanta Tours",
    meta: {
      home: {
        title: "Ollanta Tours — Sacred Valley Adventures",
        description: "Discover Machu Picchu, Rainbow Mountain, Maras, Moray, and mountain bike tours from Ollantaytambo.",
      },
      about: {
        title: "About — Ollanta Tours",
        description: "Learn about Ollanta Tours, a trusted local tour agency serving Sacred Valley travelers from Ollantaytambo since 2016.",
      },
      destinations: {
        title: "Tours — Ollanta Tours",
        description: "Explore Machu Picchu, Rainbow Mountain, Maras, Moray, and mountain bike tours from Ollantaytambo.",
      },
      testimonials: {
        title: "Reviews — Ollanta Tours",
        description: "Read reviews from travelers who explored Machu Picchu, Rainbow Mountain, and the Sacred Valley with Ollanta Tours.",
      },
      contact: {
        title: "Contact — Ollanta Tours",
        description: "Contact Ollanta Tours for tour planning and travel support in Ollantaytambo and the Sacred Valley.",
      },
      machuPicchu: {
        title: "Machu Picchu Tour — Ollanta Tours",
        description: "Book a full-day Machu Picchu tour from Ollantaytambo with train connections, transfers, and a licensed local guide.",
      },
      rainbowMountain: {
        title: "Rainbow Mountain Tour — Ollanta Tours",
        description: "Book an early-morning Rainbow Mountain hike with breakfast, transport, altitude support, and a local guide.",
      },
      maras: {
        title: "Maras Tour — Ollanta Tours",
        description: "Visit the Maras salt ponds from Ollantaytambo with transport, scenic viewpoints, and a local guide.",
      },
      moray: {
        title: "Moray Tour — Ollanta Tours",
        description: "Explore Moray's circular Inca terraces from Ollantaytambo with transport and a local guide.",
      },
      mountainBike: {
        title: "Mountain Bike Tour — Ollanta Tours",
        description: "Ride Sacred Valley trails from Ollantaytambo with a guide, quality equipment, and a support vehicle.",
      },
    },
    a11y: {
      mainNavigation: "Main navigation",
      mobileNavigation: "Mobile navigation",
      language: "Language",
      menu: "Menu",
    },
    images: {
      hero: "Sacred Valley adventure in Ollantaytambo",
      sacredValley: "Sacred Valley",
      morayTerraces: "Moray terraces",
    },
    about: {
      missionTitle: "Mission",
      missionText: "Connect travelers with authentic Sacred Valley experiences through local expertise.",
      visionTitle: "Vision",
      visionText: "Become the most trusted tour operator based in Ollantaytambo.",
      valuesTitle: "Values",
      valuesText: "Safety, transparency, respect for local communities, and unforgettable service.",
      timelineTitle: "Serving since 2016",
      timelineLead: "From a small local team to thousands of travelers, our focus remains the same: real experiences, real guides, real Ollantaytambo.",
      timeline2016: "First Machu Picchu day tours launched.",
      timeline2019: "Rainbow Mountain and bike routes added.",
      timeline2022: "Bilingual support expanded for international guests.",
      timeline2026: "New custom itineraries and premium small-group tours.",
    },
    nav: {
      home: "Home",
      about: "About",
      destinations: "Tours",
      testimonials: "Reviews",
      contact: "Contact",
      book: "Book a tour",
    },
    hero: {
      badge: "4.9 stars from travelers in the Sacred Valley",
      title: "Your next Andean adventure starts in Ollantaytambo",
      whereTo: "Where to",
      tour: "Where to",
      date: "Date",
      travelers: "Travelers",
      explore: "Explore now",
      trust1: "Free cancellation",
      trust2: "Secure payment",
      trust3: "Local expert guides",
    },
    story: {
      eyebrow: "Our History",
      title: "We don't sell trips. We craft journeys.",
      quote:
        "Every route starts in Ollantaytambo with local guides who know the valley, the history, and the rhythm of the mountains.",
      author: "Sacred Valley team",
      role: "Local tour operators",
      sponsors: "2,500+ happy travelers",
      v1t: "Curated, not crowded",
      v1d: "Small groups for a personal experience at Machu Picchu and beyond.",
      v2t: "No hidden fees. Ever.",
      v2d: "Clear pricing, transparent inclusions, and honest recommendations.",
      v3t: "Travel responsibly",
      v3d: "We respect communities, trails, and the Andean environment.",
      v4t: "Local-first mindset",
      v4d: "Your guides live here and share authentic stories from Ollantaytambo.",
      v5t: "Humans on standby",
      v5d: "WhatsApp support before, during, and after your tour.",
      v6t: "Book with confidence",
      v6d: "Flexible dates, easy changes, and fast confirmation.",
    },
    featured: {
      eyebrow: "find your tour",
      title: "Top destinations travelers love from Ollantaytambo",
      more: "More tours",
    },
    why: {
      eyebrow: "why choose us",
      title: "Experience the Sacred Valley in motion",
      f1t: "Unlimited explore places",
      f1d: "From Inca ruins to high-altitude trails and village routes.",
      f2t: "Easy booking & refund",
      f2d: "Reserve online in minutes with clear cancellation rules.",
      f3t: "Classy & expert guides",
      f3d: "Licensed local guides in English and Spanish.",
      f4t: "Pickup anywhere",
      f4d: "No stress about transport.",
    },
    plan: {
      eyebrow: "tour plans",
      title: "Top-notch tours for your next adventure",
      cardLabel: "Tour plan",
      t1: "Machu Picchu",
      t2: "Rainbow Mountain",
      t3: "Maras",
      t4: "Moray",
      t5: "Mountain Bike Adventure",
    },
    testimonials: {
      eyebrow: "happy travelers",
      title: "Memorable journeys shared by travelers",
      titleLine1: "Memorable journeys",
      titleLine2: "shared by travelers",
      rating: "Based on 650+ reviews",
      more: "Read all reviews",
      t1q: "Booking our vacation was incredibly easy, and every detail was handled professionally. The itinerary was well organized, the accommodations were excellent, and the entire experience.",
      t1n: "Sebastian T. Langston",
      t1r: "Travel blogger",
      t2q: "We were impressed by the level of professionalism and care shown by the travel team. They listened to our preferences and designed a trip that matched our interests perfectly.",
      t2n: "Oscar N. Winsley",
      t2r: "Travel photographer",
      t3q: "The mountain bike tour was the highlight of our Peru trip. The team was professional from start to finish!",
      t3n: "Sophie L.",
      t3r: "Backpacker",
      t4q: "Pickup was on time, our English-speaking guide was excellent, and the views were incredible.",
      t4n: "James T.",
      t4r: "Traveler",
    },
    steps: {
      eyebrow: "how it works",
      title: "Three simple steps to your tour",
      s1n: "Step 01",
      s1t: "Choose your tour",
      s1d: "Pick Machu Picchu, Rainbow Mountain, Maras, Moray, Mountain Bike Adventure, or ask for a custom route.",
      s2n: "Step 02",
      s2t: "Confirm reservation",
      s2d: "Select date, group size, and pickup point in Ollantaytambo.",
      s3n: "Step 03",
      s3t: "Enjoy the journey",
      s3d: "Travel with local experts and focus on the experience.",
    },
    faq: {
      eyebrow: "quick travel help",
      title: "Common travel questions with clear answers",
      q1: "What tours do you offer?",
      a1: "We currently offer Machu Picchu, Rainbow Mountain, Maras, Moray, and Mountain Bike Adventure tours from Ollantaytambo.",
      q2: "Can I cancel my booking?",
      a2: "Yes. Free cancellation is available up to 48 hours before departure for most tours.",
      q3: "How long does a refund take?",
      a3: "Approved refunds are usually processed within 5-7 business days.",
      q4: "Are guides included?",
      a4: "Yes. All tours include a licensed local guide in English or Spanish.",
    },
    blog: {
      eyebrow: "travel tips",
      title: "Guides and stories from the Sacred Valley",
      b1d: "Jul 10, 2026",
      b1t: "Best time to visit Machu Picchu from Ollantaytambo",
      b2d: "Jul 3, 2026",
      b2t: "What to pack for Rainbow Mountain",
      b3d: "Jun 28, 2026",
      b3t: "Mountain biking routes around the Inca Valley",
    },
    instagram: {
      title: "Ollanta Tours on Instagram",
      button: "Start your journey",
    },
    footer: {
      tagline: "Every journey we organize is built on trust, safety, and unforgettable Andean views.",
      essential: "Essential links",
      destinations: "Tours",
      rights: "© 2026 Ollanta Tours · Ollantaytambo, Peru",
    },
    tours: {
      "machu-picchu": {
        location: "Machu Picchu",
        name: "Machu Picchu",
        per: "/ per person",
        short: "Full-day guided visit from Ollantaytambo with train connection and citadel tour.",
        benefit1: "Licensed local guide in English or Spanish",
        benefit2: "Train tickets and transfers arranged for you",
        benefit3: "Optimized schedule from Ollantaytambo",
      },
      "rainbow-mountain": {
        location: "Vinicunca",
        name: "Rainbow Mountain",
        per: "/ per person",
        short: "Early-morning hike to the famous Rainbow Mountain with breakfast and guide.",
        benefit1: "Early departure to avoid crowds",
        benefit2: "Altitude guidance and pacing support",
        benefit3: "Breakfast and transport included",
      },
      maras: {
        location: "Maras Salt Ponds",
        name: "Maras",
        per: "/ per person",
        short: "Visit the famous Maras salt ponds with a local guide from Ollantaytambo.",
        benefit1: "Local guide with salt pond history and culture",
        benefit2: "Scenic viewpoints among the white terraces",
        benefit3: "Pickup and return from Ollantaytambo",
      },
      moray: {
        location: "Moray",
        name: "Moray",
        per: "/ per person",
        short: "Explore the circular Inca terraces of Moray with a local guide from Ollantaytambo.",
        benefit1: "Discover the remarkable circular Inca terraces",
        benefit2: "Learn about Moray's history from a local guide",
        benefit3: "Pickup and return from Ollantaytambo",
      },
      "mountain-bike": {
        location: "Sacred Valley",
        name: "Mountain Bike Adventure",
        per: "/ per person",
        short: "Downhill and valley routes around Ollantaytambo with bike, gear, and support vehicle.",
        benefit1: "Quality bikes and safety equipment included",
        benefit2: "Routes adapted to your skill level",
        benefit3: "Support vehicle and guide throughout",
      },
    },
    pages: {
      aboutTitle: "Trusted local tour agency in Ollantaytambo",
      aboutLead: "Serving travelers in the Sacred Valley since 2016 with authentic experiences and expert local guides.",
      destinationsTitle: "Explore dream tours from Ollantaytambo",
      destinationsLead: "Choose from our most popular adventures or contact us for a custom itinerary.",
      contactTitle: "Reach out for help today",
      contactLead: "Connect with us for the best travel support in Ollantaytambo.",
      testimonialsTitle: "Read reviews from happy guests",
      testimonialsLead: "Real stories from travelers who explored the Sacred Valley with us.",
      loadMore: "Load more",
      bookNow: "Book now",
      phone: "Phone",
      email: "Email",
      office: "Office",
      address: "Plaza Principal, Ollantaytambo, Cusco, Peru",
      itinerary: "Itinerary",
      aboutTour: "About this tour",
      whyTour: "Why choose this tour",
      day: "Day",
    },
    booking: {
      name: "Full name",
      email: "Email",
      phone: "phone / WhatsApp",
      phoneSearch: "Search country...",
      phonePlaceholder: "Phone number",
      destination: "Tour",
      travelers: "Number of travelers",
      message: "Message",
      submit: "Send request",
      success: "Thank you! We will contact you shortly.",
    },
    selects: {
      chooseTour: "Choose a tour",
      travelers1: "1 traveler",
      travelers2: "2 travelers",
      travelers3: "3 travelers",
      travelers4: "4+ travelers",
    },
  },
  es: {
    brand: "Ollanta Tours",
    meta: {
      home: {
        title: "Ollanta Tours — Aventuras en el Valle Sagrado",
        description: "Descubre tours a Machu Picchu, la Montaña de Colores, Maras, Moray y rutas en bicicleta de montaña desde Ollantaytambo.",
      },
      about: {
        title: "Nosotros — Ollanta Tours",
        description: "Conoce Ollanta Tours, una agencia local de confianza que atiende a viajeros del Valle Sagrado desde Ollantaytambo desde 2016.",
      },
      destinations: {
        title: "Tours — Ollanta Tours",
        description: "Explora tours a Machu Picchu, la Montaña de Colores, Maras, Moray y rutas en bicicleta de montaña desde Ollantaytambo.",
      },
      testimonials: {
        title: "Reseñas — Ollanta Tours",
        description: "Lee reseñas de viajeros que exploraron Machu Picchu, la Montaña de Colores y el Valle Sagrado con Ollanta Tours.",
      },
      contact: {
        title: "Contacto — Ollanta Tours",
        description: "Contacta con Ollanta Tours para planificar tu viaje y recibir asistencia en Ollantaytambo y el Valle Sagrado.",
      },
      machuPicchu: {
        title: "Tour a Machu Picchu — Ollanta Tours",
        description: "Reserva un tour de día completo a Machu Picchu desde Ollantaytambo con tren, traslados y un guía local certificado.",
      },
      rainbowMountain: {
        title: "Tour a la Montaña de Colores — Ollanta Tours",
        description: "Reserva una caminata matinal a la Montaña de Colores con desayuno, transporte, apoyo en altura y guía local.",
      },
      maras: {
        title: "Tour a Maras — Ollanta Tours",
        description: "Visita las salineras de Maras desde Ollantaytambo con transporte, miradores panorámicos y guía local.",
      },
      moray: {
        title: "Tour a Moray — Ollanta Tours",
        description: "Explora las terrazas incas circulares de Moray desde Ollantaytambo con transporte y guía local.",
      },
      mountainBike: {
        title: "Tour en bicicleta de montaña — Ollanta Tours",
        description: "Recorre los senderos del Valle Sagrado desde Ollantaytambo con guía, equipo de calidad y vehículo de apoyo.",
      },
    },
    a11y: {
      mainNavigation: "Navegación principal",
      mobileNavigation: "Navegación móvil",
      language: "Idioma",
      menu: "Menú",
    },
    images: {
      hero: "Aventura en el Valle Sagrado desde Ollantaytambo",
      sacredValley: "Valle Sagrado",
      morayTerraces: "Terrazas de Moray",
    },
    about: {
      missionTitle: "Misión",
      missionText: "Conectar a los viajeros con experiencias auténticas en el Valle Sagrado mediante el conocimiento local.",
      visionTitle: "Visión",
      visionText: "Convertirnos en el operador turístico de mayor confianza con sede en Ollantaytambo.",
      valuesTitle: "Valores",
      valuesText: "Seguridad, transparencia, respeto por las comunidades locales y un servicio inolvidable.",
      timelineTitle: "A tu servicio desde 2016",
      timelineLead: "De un pequeño equipo local a miles de viajeros, nuestro enfoque sigue siendo el mismo: experiencias reales, guías reales y el auténtico Ollantaytambo.",
      timeline2016: "Lanzamiento de los primeros tours de un día a Machu Picchu.",
      timeline2019: "Incorporación de la Montaña de Colores y las rutas en bicicleta.",
      timeline2022: "Ampliación de la atención bilingüe para visitantes internacionales.",
      timeline2026: "Nuevos itinerarios personalizados y tours prémium para grupos pequeños.",
    },
    nav: {
      home: "Inicio",
      about: "Nosotros",
      destinations: "Tours",
      testimonials: "Reseñas",
      contact: "Contacto",
      book: "Reservar tour",
    },
    hero: {
      badge: "4.9 estrellas de viajeros en el Valle Sagrado",
      title: "Tu próxima aventura andina comienza en Ollantaytambo",
      whereTo: "A dónde",
      tour: "A dónde",
      date: "Fecha",
      travelers: "Viajeros",
      explore: "Explorar ahora",
      trust1: "Cancelación gratis",
      trust2: "Pago seguro",
      trust3: "Guías locales expertos",
    },
    story: {
      eyebrow: "Nuestra historia",
      title: "No vendemos viajes. Creamos experiencias.",
      quote:
        "Cada ruta comienza en Ollantaytambo con guías locales que conocen el valle, la historia y el ritmo de la montaña.",
      author: "Equipo del Valle Sagrado",
      role: "Operadores locales de tours",
      sponsors: "2,500+ viajeros felices",
      v1t: "Seleccionado, no masificado",
      v1d: "Grupos pequeños para una experiencia personal en Machu Picchu y más.",
      v2t: "Sin tarifas ocultas",
      v2d: "Precios claros, inclusiones transparentes y recomendaciones honestas.",
      v3t: "Viaja responsablemente",
      v3d: "Respetamos comunidades, senderos y el entorno andino.",
      v4t: "Mentalidad local",
      v4d: "Tus guías viven aquí y comparten historias auténticas de Ollantaytambo.",
      v5t: "Equipo disponible",
      v5d: "Soporte por WhatsApp antes, durante y después del tour.",
      v6t: "Reserva con confianza",
      v6d: "Fechas flexibles, cambios fáciles y confirmación rápida.",
    },
    featured: {
      eyebrow: "encuentra tu tour",
      title: "Destinos favoritos desde Ollantaytambo",
      more: "Más tours",
    },
    why: {
      eyebrow: "por qué elegirnos",
      title: "Vive el Valle Sagrado en movimiento",
      f1t: "Lugares para explorar sin límites",
      f1d: "Desde ruinas incas hasta rutas de altura y caminos del valle.",
      f2t: "Reserva y reembolso fáciles",
      f2d: "Reserva online en minutos con reglas claras de cancelación.",
      f3t: "Guías expertos y profesionales",
      f3d: "Guías locales certificados en inglés y español.",
      f4t: "Recogida en cualquier lugar",
      f4d: "Sin estrés por el transporte.",
    },
    plan: {
      eyebrow: "planes de tour",
      title: "Tours de primer nivel para tu próxima aventura",
      cardLabel: "Plan de tour",
      t1: "Machu Picchu",
      t2: "Montaña de Colores",
      t3: "Maras",
      t4: "Moray",
      t5: "Aventura en bicicleta de montaña",
    },
    testimonials: {
      eyebrow: "viajeros felices",
      title: "Experiencias memorables compartidas por viajeros",
      titleLine1: "Experiencias memorables",
      titleLine2: "compartidas por viajeros",
      rating: "Basado en más de 650 reseñas",
      more: "Ver todas las reseñas",
      t1q: "Reservar nuestras vacaciones fue increíblemente fácil y cada detalle se gestionó de forma profesional. El itinerario estuvo bien organizado, los alojamientos fueron excelentes y toda la experiencia fue excepcional.",
      t1n: "Sebastian T. Langston",
      t1r: "Bloguero de viajes",
      t2q: "Nos impresionó el nivel de profesionalismo y atención del equipo. Escucharon nuestras preferencias y diseñaron un viaje que encajó perfectamente con nuestros intereses.",
      t2n: "Oscar N. Winsley",
      t2r: "Fotógrafo de viajes",
      t3q: "El tour en bicicleta de montaña fue lo mejor de nuestro viaje a Perú. ¡El equipo fue profesional de principio a fin!",
      t3n: "Sophie L.",
      t3r: "Mochilera",
      t4q: "La recogida fue puntual, nuestro guía de habla inglesa fue excelente y las vistas fueron increíbles.",
      t4n: "James T.",
      t4r: "Viajero",
    },
    steps: {
      eyebrow: "cómo funciona",
      title: "Tres pasos simples para tu tour",
      s1n: "Paso 01",
      s1t: "Elige tu tour",
      s1d: "Elige Machu Picchu, Montaña de Colores, Maras, Moray, Aventura en bicicleta de montaña o una ruta personalizada.",
      s2n: "Paso 02",
      s2t: "Confirma la reserva",
      s2d: "Selecciona fecha, tamaño del grupo y punto de recogida en Ollantaytambo.",
      s3n: "Paso 03",
      s3t: "Disfruta el viaje",
      s3d: "Viaja con expertos locales y concéntrate en la experiencia.",
    },
    faq: {
      eyebrow: "ayuda rápida",
      title: "Preguntas comunes con respuestas claras",
      q1: "¿Qué tours ofrecen?",
      a1: "Actualmente ofrecemos Machu Picchu, Montaña de Colores, Maras, Moray y Aventura en bicicleta de montaña desde Ollantaytambo.",
      q2: "¿Puedo cancelar mi reserva?",
      a2: "Sí. La cancelación gratuita está disponible hasta 48 horas antes de la salida en la mayoría de tours.",
      q3: "¿Cuánto tarda un reembolso?",
      a3: "Los reembolsos aprobados suelen procesarse en 5-7 días hábiles.",
      q4: "¿Los guías están incluidos?",
      a4: "Sí. Todos los tours incluyen un guía local certificado en inglés o español.",
    },
    blog: {
      eyebrow: "consejos de viaje",
      title: "Guías e historias del Valle Sagrado",
      b1d: "10 jul 2026",
      b1t: "Mejor época para visitar Machu Picchu desde Ollantaytambo",
      b2d: "3 jul 2026",
      b2t: "Qué llevar para la Montaña de Colores",
      b3d: "28 jun 2026",
      b3t: "Rutas en mountain bike por el valle inca",
    },
    instagram: {
      title: "Ollanta Tours en Instagram",
      button: "Comienza tu viaje",
    },
    footer: {
      tagline: "Cada viaje que organizamos se basa en confianza, seguridad y vistas andinas inolvidables.",
      essential: "Enlaces esenciales",
      destinations: "Tours",
      rights: "© 2026 Ollanta Tours · Ollantaytambo, Perú",
    },
    tours: {
      "machu-picchu": {
        location: "Machu Picchu",
        name: "Machu Picchu",
        per: "/ por persona",
        short: "Visita guiada de día completo desde Ollantaytambo con tren y recorrido por la ciudadela.",
        benefit1: "Guía local certificado en inglés o español",
        benefit2: "Billetes de tren y traslados organizados para ti",
        benefit3: "Horario optimizado desde Ollantaytambo",
      },
      "rainbow-mountain": {
        location: "Vinicunca",
        name: "Montaña de Colores",
        per: "/ por persona",
        short: "Caminata temprano a la famosa Montaña de Colores con desayuno y guía.",
        benefit1: "Salida temprana para evitar las multitudes",
        benefit2: "Orientación sobre la altura y apoyo para adaptar el ritmo",
        benefit3: "Desayuno y transporte incluidos",
      },
      maras: {
        location: "Salineras de Maras",
        name: "Maras",
        per: "/ por persona",
        short: "Visita las famosas salineras de Maras con un guía local desde Ollantaytambo.",
        benefit1: "Guía local experto en la historia y cultura de las salineras",
        benefit2: "Miradores panorámicos entre las terrazas blancas",
        benefit3: "Recogida y regreso a Ollantaytambo",
      },
      moray: {
        location: "Moray",
        name: "Moray",
        per: "/ por persona",
        short: "Explora las terrazas incas circulares de Moray con un guía local desde Ollantaytambo.",
        benefit1: "Descubre las extraordinarias terrazas incas circulares",
        benefit2: "Conoce la historia de Moray con un guía local",
        benefit3: "Recogida y regreso a Ollantaytambo",
      },
      "mountain-bike": {
        location: "Valle Sagrado",
        name: "Aventura en bicicleta de montaña",
        per: "/ por persona",
        short: "Rutas de descenso y valle alrededor de Ollantaytambo con bicicleta, equipo y vehículo de apoyo.",
        benefit1: "Bicicletas de calidad y equipo de seguridad incluidos",
        benefit2: "Rutas adaptadas a tu nivel",
        benefit3: "Vehículo de apoyo y guía durante todo el recorrido",
      },
    },
    pages: {
      aboutTitle: "Agencia local de confianza en Ollantaytambo",
      aboutLead: "Atendiendo viajeros en el Valle Sagrado desde 2016 con experiencias auténticas y guías expertos.",
      destinationsTitle: "Explora tours soñados desde Ollantaytambo",
      destinationsLead: "Elige entre nuestras aventuras más populares o contáctanos para un itinerario personalizado.",
      contactTitle: "Contáctanos hoy",
      contactLead: "Conéctate con nosotros para el mejor soporte de viaje en Ollantaytambo.",
      testimonialsTitle: "Lee reseñas de huéspedes felices",
      testimonialsLead: "Historias reales de viajeros que exploraron el Valle Sagrado con nosotros.",
      loadMore: "Cargar más",
      bookNow: "Reservar ahora",
      phone: "Teléfono",
      email: "Correo",
      office: "Oficina",
      address: "Plaza Principal, Ollantaytambo, Cusco, Perú",
      itinerary: "Itinerario",
      aboutTour: "Sobre este tour",
      whyTour: "Por qué elegir este tour",
      day: "Día",
    },
    booking: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "teléfono / WhatsApp",
      phoneSearch: "Buscar país...",
      phonePlaceholder: "Número de teléfono",
      destination: "Tour",
      travelers: "Número de viajeros",
      message: "Mensaje",
      submit: "Enviar solicitud",
      success: "¡Gracias! Te contactaremos pronto.",
    },
    selects: {
      chooseTour: "Elige un tour",
      travelers1: "1 viajero",
      travelers2: "2 viajeros",
      travelers3: "3 viajeros",
      travelers4: "4+ viajeros",
    },
  },
  fr: {
    brand: "Ollanta Tours",
    meta: {
      home: {
        title: "Ollanta Tours — Aventures dans la Vallée sacrée",
        description: "Découvrez le Machu Picchu, la Montagne aux sept couleurs, Maras, Moray et nos circuits VTT au départ d'Ollantaytambo.",
      },
      about: {
        title: "À propos — Ollanta Tours",
        description: "Découvrez Ollanta Tours, une agence locale de confiance qui accompagne les voyageurs dans la Vallée sacrée depuis Ollantaytambo depuis 2016.",
      },
      destinations: {
        title: "Circuits — Ollanta Tours",
        description: "Explorez le Machu Picchu, la Montagne aux sept couleurs, Maras, Moray et nos circuits VTT au départ d'Ollantaytambo.",
      },
      testimonials: {
        title: "Avis — Ollanta Tours",
        description: "Lisez les avis de voyageurs ayant exploré le Machu Picchu, la Montagne aux sept couleurs et la Vallée sacrée avec Ollanta Tours.",
      },
      contact: {
        title: "Contact — Ollanta Tours",
        description: "Contactez Ollanta Tours pour organiser votre voyage et obtenir de l'aide à Ollantaytambo et dans la Vallée sacrée.",
      },
      machuPicchu: {
        title: "Circuit au Machu Picchu — Ollanta Tours",
        description: "Réservez une journée au Machu Picchu depuis Ollantaytambo, avec train, transferts et guide local agréé.",
      },
      rainbowMountain: {
        title: "Circuit à la Montagne aux sept couleurs — Ollanta Tours",
        description: "Réservez une randonnée matinale à la Montagne aux sept couleurs avec petit-déjeuner, transport, accompagnement en altitude et guide local.",
      },
      maras: {
        title: "Circuit à Maras — Ollanta Tours",
        description: "Visitez les salines de Maras depuis Ollantaytambo avec transport, points de vue panoramiques et guide local.",
      },
      moray: {
        title: "Circuit à Moray — Ollanta Tours",
        description: "Explorez les terrasses incas circulaires de Moray depuis Ollantaytambo avec transport et guide local.",
      },
      mountainBike: {
        title: "Circuit en VTT — Ollanta Tours",
        description: "Parcourez les sentiers de la Vallée sacrée depuis Ollantaytambo avec un guide, un équipement de qualité et un véhicule d'assistance.",
      },
    },
    a11y: {
      mainNavigation: "Navigation principale",
      mobileNavigation: "Navigation mobile",
      language: "Langue",
      menu: "Menu",
    },
    images: {
      hero: "Aventure dans la Vallée sacrée à Ollantaytambo",
      sacredValley: "Vallée sacrée",
      morayTerraces: "Terrasses de Moray",
    },
    about: {
      missionTitle: "Mission",
      missionText: "Faire découvrir aux voyageurs des expériences authentiques dans la Vallée sacrée grâce à notre expertise locale.",
      visionTitle: "Vision",
      visionText: "Devenir le voyagiste le plus digne de confiance établi à Ollantaytambo.",
      valuesTitle: "Valeurs",
      valuesText: "Sécurité, transparence, respect des communautés locales et qualité de service inoubliable.",
      timelineTitle: "À votre service depuis 2016",
      timelineLead: "D'une petite équipe locale à des milliers de voyageurs, notre priorité reste la même : des expériences authentiques, de vrais guides et le véritable Ollantaytambo.",
      timeline2016: "Lancement des premières excursions d'une journée au Machu Picchu.",
      timeline2019: "Ajout de la Montagne aux sept couleurs et des circuits VTT.",
      timeline2022: "Développement de l'assistance bilingue pour les visiteurs internationaux.",
      timeline2026: "Nouveaux itinéraires sur mesure et circuits haut de gamme en petits groupes.",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      destinations: "Circuits",
      testimonials: "Avis",
      contact: "Contact",
      book: "Réserver un circuit",
    },
    hero: {
      badge: "4,9 étoiles attribuées par les voyageurs dans la Vallée sacrée",
      title: "Votre prochaine aventure andine commence à Ollantaytambo",
      whereTo: "Où aller",
      tour: "Où aller",
      date: "Date",
      travelers: "Voyageurs",
      explore: "Explorer maintenant",
      trust1: "Annulation gratuite",
      trust2: "Paiement sécurisé",
      trust3: "Guides locaux experts",
    },
    story: {
      eyebrow: "Notre histoire",
      title: "Nous ne vendons pas des voyages. Nous créons des expériences.",
      quote:
        "Chaque itinéraire commence à Ollantaytambo avec des guides locaux qui connaissent la vallée, son histoire et le rythme des montagnes.",
      author: "Équipe de la Vallée sacrée",
      role: "Opérateurs touristiques locaux",
      sponsors: "Plus de 2 500 voyageurs satisfaits",
      v1t: "Soigneusement conçu, jamais bondé",
      v1d: "De petits groupes pour une expérience personnalisée au Machu Picchu et au-delà.",
      v2t: "Aucun frais caché. Jamais.",
      v2d: "Des prix clairs, des prestations transparentes et des conseils honnêtes.",
      v3t: "Voyagez de manière responsable",
      v3d: "Nous respectons les communautés, les sentiers et l'environnement andin.",
      v4t: "Une approche résolument locale",
      v4d: "Vos guides vivent ici et partagent des récits authentiques d'Ollantaytambo.",
      v5t: "Une équipe à votre écoute",
      v5d: "Assistance WhatsApp avant, pendant et après votre circuit.",
      v6t: "Réservez en toute confiance",
      v6d: "Dates flexibles, modifications faciles et confirmation rapide.",
    },
    featured: {
      eyebrow: "trouvez votre circuit",
      title: "Les destinations préférées des voyageurs au départ d'Ollantaytambo",
      more: "Plus de circuits",
    },
    why: {
      eyebrow: "pourquoi nous choisir",
      title: "Découvrez la Vallée sacrée en mouvement",
      f1t: "Des lieux à explorer sans limites",
      f1d: "Des ruines incas aux sentiers d'altitude et aux routes de village.",
      f2t: "Réservation et remboursement faciles",
      f2d: "Réservez en ligne en quelques minutes avec des conditions d'annulation claires.",
      f3t: "Des guides professionnels et expérimentés",
      f3d: "Guides locaux agréés en anglais et en espagnol.",
      f4t: "Prise en charge où que vous soyez",
      f4d: "Aucun souci de transport.",
    },
    plan: {
      eyebrow: "formules de circuits",
      title: "Des circuits d'exception pour votre prochaine aventure",
      cardLabel: "Formule",
      t1: "Machu Picchu",
      t2: "Montagne aux sept couleurs",
      t3: "Maras",
      t4: "Moray",
      t5: "Aventure en VTT",
    },
    testimonials: {
      eyebrow: "voyageurs satisfaits",
      title: "Des voyages inoubliables racontés par nos voyageurs",
      titleLine1: "Des voyages inoubliables",
      titleLine2: "racontés par nos voyageurs",
      rating: "Basé sur plus de 650 avis",
      more: "Lire tous les avis",
      t1q: "La réservation de nos vacances a été incroyablement simple et chaque détail a été géré avec professionnalisme. L'itinéraire était parfaitement organisé, les hébergements excellents et toute l'expérience remarquable.",
      t1n: "Sebastian T. Langston",
      t1r: "Blogueur voyage",
      t2q: "Nous avons été impressionnés par le professionnalisme et l'attention de l'équipe. Elle a écouté nos préférences et conçu un voyage parfaitement adapté à nos centres d'intérêt.",
      t2n: "Oscar N. Winsley",
      t2r: "Photographe de voyage",
      t3q: "Le circuit en VTT a été le temps fort de notre voyage au Pérou. L'équipe s'est montrée professionnelle du début à la fin !",
      t3n: "Sophie L.",
      t3r: "Voyageuse en sac à dos",
      t4q: "La prise en charge était ponctuelle, notre guide anglophone excellent et les paysages incroyables.",
      t4n: "James T.",
      t4r: "Voyageur",
    },
    steps: {
      eyebrow: "comment ça marche",
      title: "Votre circuit en trois étapes simples",
      s1n: "Étape 01",
      s1t: "Choisissez votre circuit",
      s1d: "Choisissez le Machu Picchu, la Montagne aux sept couleurs, Maras, Moray, l'Aventure en VTT ou demandez un itinéraire sur mesure.",
      s2n: "Étape 02",
      s2t: "Confirmez votre réservation",
      s2d: "Sélectionnez la date, la taille du groupe et le lieu de prise en charge à Ollantaytambo.",
      s3n: "Étape 03",
      s3t: "Profitez du voyage",
      s3d: "Voyagez avec des experts locaux et savourez pleinement l'expérience.",
    },
    faq: {
      eyebrow: "aide aux voyageurs",
      title: "Des réponses claires aux questions les plus fréquentes",
      q1: "Quels circuits proposez-vous ?",
      a1: "Nous proposons actuellement des circuits au Machu Picchu, à la Montagne aux sept couleurs, à Maras et à Moray, ainsi qu'une Aventure en VTT au départ d'Ollantaytambo.",
      q2: "Puis-je annuler ma réservation ?",
      a2: "Oui. Pour la plupart des circuits, l'annulation est gratuite jusqu'à 48 heures avant le départ.",
      q3: "Quel est le délai de remboursement ?",
      a3: "Les remboursements approuvés sont généralement traités sous 5 à 7 jours ouvrés.",
      q4: "Les guides sont-ils inclus ?",
      a4: "Oui. Tous les circuits comprennent un guide local agréé parlant anglais ou espagnol.",
    },
    blog: {
      eyebrow: "conseils de voyage",
      title: "Guides et récits de la Vallée sacrée",
      b1d: "10 juil. 2026",
      b1t: "La meilleure période pour visiter le Machu Picchu depuis Ollantaytambo",
      b2d: "3 juil. 2026",
      b2t: "Que prévoir pour la Montagne aux sept couleurs",
      b3d: "28 juin 2026",
      b3t: "Itinéraires VTT dans la vallée des Incas",
    },
    instagram: {
      title: "Ollanta Tours sur Instagram",
      button: "Commencez votre voyage",
    },
    footer: {
      tagline: "Chaque voyage que nous organisons repose sur la confiance, la sécurité et des panoramas andins inoubliables.",
      essential: "Liens essentiels",
      destinations: "Circuits",
      rights: "© 2026 Ollanta Tours · Ollantaytambo, Pérou",
    },
    tours: {
      "machu-picchu": {
        location: "Machu Picchu",
        name: "Machu Picchu",
        per: "/ par personne",
        short: "Visite guidée d'une journée au départ d'Ollantaytambo, avec trajet en train et découverte de la citadelle.",
        benefit1: "Guide local agréé en anglais ou en espagnol",
        benefit2: "Billets de train et transferts organisés pour vous",
        benefit3: "Programme optimisé au départ d'Ollantaytambo",
      },
      "rainbow-mountain": {
        location: "Vinicunca",
        name: "Montagne aux sept couleurs",
        per: "/ par personne",
        short: "Randonnée matinale vers la célèbre Montagne aux sept couleurs, avec petit-déjeuner et guide.",
        benefit1: "Départ matinal pour éviter la foule",
        benefit2: "Conseils sur l'altitude et accompagnement adapté à votre rythme",
        benefit3: "Petit-déjeuner et transport inclus",
      },
      maras: {
        location: "Salines de Maras",
        name: "Maras",
        per: "/ par personne",
        short: "Visitez les célèbres salines de Maras avec un guide local au départ d'Ollantaytambo.",
        benefit1: "Guide local spécialiste de l'histoire et de la culture des salines",
        benefit2: "Points de vue panoramiques au milieu des terrasses blanches",
        benefit3: "Prise en charge et retour à Ollantaytambo",
      },
      moray: {
        location: "Moray",
        name: "Moray",
        per: "/ par personne",
        short: "Explorez les terrasses incas circulaires de Moray avec un guide local au départ d'Ollantaytambo.",
        benefit1: "Découvrez les remarquables terrasses incas circulaires",
        benefit2: "Découvrez l'histoire de Moray avec un guide local",
        benefit3: "Prise en charge et retour à Ollantaytambo",
      },
      "mountain-bike": {
        location: "Vallée sacrée",
        name: "Aventure en VTT",
        per: "/ par personne",
        short: "Parcours de descente et itinéraires dans la vallée autour d'Ollantaytambo, avec vélo, équipement et véhicule d'assistance.",
        benefit1: "Vélos de qualité et équipement de sécurité inclus",
        benefit2: "Parcours adaptés à votre niveau",
        benefit3: "Véhicule d'assistance et guide tout au long du circuit",
      },
    },
    pages: {
      aboutTitle: "Une agence locale de confiance à Ollantaytambo",
      aboutLead: "Depuis 2016, nous faisons découvrir la Vallée sacrée à travers des expériences authentiques menées par des guides locaux experts.",
      destinationsTitle: "Découvrez des circuits de rêve au départ d'Ollantaytambo",
      destinationsLead: "Choisissez parmi nos aventures les plus populaires ou contactez-nous pour un itinéraire sur mesure.",
      contactTitle: "Contactez-nous dès aujourd'hui",
      contactLead: "Notre équipe est à votre écoute pour vous accompagner au mieux à Ollantaytambo.",
      testimonialsTitle: "Découvrez les avis de nos voyageurs",
      testimonialsLead: "Des récits authentiques de voyageurs ayant exploré la Vallée sacrée avec nous.",
      loadMore: "Afficher plus",
      bookNow: "Réserver",
      phone: "Téléphone",
      email: "E-mail",
      office: "Agence",
      address: "Plaza Principal, Ollantaytambo, Cusco, Pérou",
      itinerary: "Itinéraire",
      aboutTour: "À propos de ce circuit",
      whyTour: "Pourquoi choisir ce circuit",
      day: "Jour",
    },
    booking: {
      name: "Nom complet",
      email: "E-mail",
      phone: "téléphone / WhatsApp",
      phoneSearch: "Rechercher un pays...",
      phonePlaceholder: "Numéro de téléphone",
      destination: "Circuit",
      travelers: "Nombre de voyageurs",
      message: "Message",
      submit: "Envoyer la demande",
      success: "Merci ! Nous vous contacterons très bientôt.",
    },
    selects: {
      chooseTour: "Choisissez un circuit",
      travelers1: "1 voyageur",
      travelers2: "2 voyageurs",
      travelers3: "3 voyageurs",
      travelers4: "4 voyageurs ou plus",
    },
  },
};

const itinerary = {
  "machu-picchu": {
    en: [
      "Pickup in Ollantaytambo and transfer to the train station.",
      "Scenic train ride through the Sacred Valley to Aguas Calientes.",
      "Guided visit of Machu Picchu with historical insights.",
      "Return train and transfer back to Ollantaytambo.",
    ],
    es: [
      "Recogida en Ollantaytambo y traslado a la estación de tren.",
      "Viaje en tren por el Valle Sagrado hasta Aguas Calientes.",
      "Visita guiada a Machu Picchu con explicaciones históricas.",
      "Tren de regreso y traslado a Ollantaytambo.",
    ],
    fr: [
      "Prise en charge à Ollantaytambo et transfert à la gare.",
      "Trajet panoramique en train à travers la Vallée sacrée jusqu'à Aguas Calientes.",
      "Visite guidée du Machu Picchu et découverte de son histoire.",
      "Retour en train, puis transfert jusqu'à Ollantaytambo.",
    ],
  },
  "rainbow-mountain": {
    en: [
      "Early pickup from Ollantaytambo (around 4:30 AM).",
      "Drive to the trailhead with breakfast stop.",
      "Guided hike to Rainbow Mountain viewpoint.",
      "Return drive with stops for photos and rest.",
    ],
    es: [
      "Recogida temprana en Ollantaytambo (aprox. 4:30 AM).",
      "Traslado al inicio del sendero con parada para desayuno.",
      "Caminata guiada al mirador de la Montaña de Colores.",
      "Regreso con paradas para fotos y descanso.",
    ],
    fr: [
      "Prise en charge matinale à Ollantaytambo (vers 4 h 30).",
      "Trajet jusqu'au départ du sentier avec un arrêt pour le petit-déjeuner.",
      "Randonnée guidée jusqu'au belvédère de la Montagne aux sept couleurs.",
      "Trajet retour avec des pauses pour prendre des photos et se reposer.",
    ],
  },
  "mountain-bike": {
    en: [
      "Bike fitting and safety briefing in Ollantaytambo.",
      "Guided ride through Sacred Valley trails and viewpoints.",
      "Support vehicle available along the route.",
      "Return to town with refreshments.",
    ],
    es: [
      "Ajuste de bicicleta e instrucciones de seguridad en Ollantaytambo.",
      "Rodada guiada por senderos y miradores del Valle Sagrado.",
      "Vehículo de apoyo disponible durante la ruta.",
      "Regreso al pueblo con refrigerio.",
    ],
    fr: [
      "Réglage du vélo et consignes de sécurité à Ollantaytambo.",
      "Sortie guidée sur les sentiers et vers les belvédères de la Vallée sacrée.",
      "Véhicule d'assistance disponible tout au long du parcours.",
      "Retour en ville avec une collation.",
    ],
  },
  maras: {
    en: [
      "Pickup in Ollantaytambo and scenic drive through the valley.",
      "Guided visit of the Maras salt ponds with local history.",
      "Time for photos among the white terraces.",
      "Return transfer to Ollantaytambo.",
    ],
    es: [
      "Recogida en Ollantaytambo y traslado panorámico por el valle.",
      "Visita guiada a las salineras de Maras con historia local.",
      "Tiempo para fotos entre las terrazas blancas.",
      "Traslado de regreso a Ollantaytambo.",
    ],
    fr: [
      "Prise en charge à Ollantaytambo et trajet panoramique à travers la vallée.",
      "Visite guidée des salines de Maras et découverte de leur histoire locale.",
      "Temps libre pour prendre des photos au milieu des terrasses blanches.",
      "Transfert retour jusqu'à Ollantaytambo.",
    ],
  },
  moray: {
    en: [
      "Pickup in Ollantaytambo and scenic drive through the Sacred Valley.",
      "Guided visit to Moray and its circular Inca terraces.",
      "Time for photos and an explanation of the site's history.",
      "Return transfer to Ollantaytambo.",
    ],
    es: [
      "Recogida en Ollantaytambo y traslado panorámico por el Valle Sagrado.",
      "Visita guiada a Moray y sus terrazas incas circulares.",
      "Tiempo para fotos y explicación de la historia del sitio.",
      "Traslado de regreso a Ollantaytambo.",
    ],
    fr: [
      "Prise en charge à Ollantaytambo et trajet panoramique à travers la Vallée sacrée.",
      "Visite guidée de Moray et de ses terrasses incas circulaires.",
      "Temps libre pour prendre des photos et découvrir l'histoire du site.",
      "Transfert retour jusqu'à Ollantaytambo.",
    ],
  },
};

function getLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return SUPPORTED_LOCALES.includes(saved) ? saved : "en";
}

function t(path, lang = getLang()) {
  return path.split(".").reduce((acc, key) => acc?.[key], i18n[lang]) ?? path;
}

function getSortedTours(lang = getLang()) {
  const collator = new Intl.Collator(lang, { sensitivity: "base" });
  return [...tours].sort((a, b) =>
    collator.compare(
      t(`tours.${a.slug}.name`, lang),
      t(`tours.${b.slug}.name`, lang)
    )
  );
}

function setLang(lang) {
  if (!SUPPORTED_LOCALES.includes(lang)) lang = "en";
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
  renderTourPlans(document.querySelector("[data-tour-plans]"));
  refreshPhoneFields(lang);
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n, lang);
  });

  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    el.setAttribute("content", t(el.dataset.i18nContent, lang));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel, lang));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.setAttribute("alt", t(el.dataset.i18nAlt, lang));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder, lang);
  });

  document.querySelectorAll("[data-tour-select]").forEach((select) => {
    const current = select.value;
    select.innerHTML = `
      <option value="">${t("selects.chooseTour", lang)}</option>
      ${getSortedTours(lang)
        .map(
          (tour) =>
            `<option value="${tour.slug}">${t("tours." + tour.slug + ".name", lang)}</option>`
        )
        .join("")}
    `;
    if (current) select.value = current;
  });

  document.querySelectorAll("[data-travelers-select]").forEach((select) => {
    select.innerHTML = `
      <option value="1">${t("selects.travelers1", lang)}</option>
      <option value="2">${t("selects.travelers2", lang)}</option>
      <option value="3">${t("selects.travelers3", lang)}</option>
      <option value="4">${t("selects.travelers4", lang)}</option>
    `;
  });

  document.querySelectorAll(".site-footer [data-i18n='footer.destinations']").forEach((heading) => {
    const column = heading.parentElement;
    column.querySelectorAll("a").forEach((link) => link.remove());
    getSortedTours(lang).forEach((tour) => {
      const link = document.createElement("a");
      link.href = `destination-${tour.slug}.html`;
      link.textContent = t(`tours.${tour.slug}.name`, lang);
      column.appendChild(link);
    });
  });
}

function renderTourCards(container) {
  if (!container) return;
  const lang = getLang();
  const sortedTours = getSortedTours(lang);
  const visibleTours =
    document.body.dataset.page === "home"
      ? sortedTours.filter((tour) => tour.slug !== "moray")
      : sortedTours;

  container.innerHTML = visibleTours
    .map((tour) => {
      const data = t(`tours.${tour.slug}`, lang);
      return `
        <a class="tour-card reveal" href="destination-${tour.slug}.html">
          <div class="tour-card-media fx-zoom">
            <img src="${tour.image}" alt="${data.name}" loading="lazy" />
          </div>
          <div class="tour-card-body">
            <div class="tour-location">${data.location}</div>
            <h3 class="tour-name">${data.name}</h3>
            <div class="tour-price">$${tour.price} <small>${data.per}</small></div>
          </div>
        </a>
      `;
    })
    .join("");

  window.ToursEffects?.refresh();
}

function renderTourPlans(container) {
  if (!container) return;
  window.clearTimeout(container.tourPlansTimer);
  window.clearTimeout(container.tourPlansResetTimer);
  container.tourPlansResizeObserver?.disconnect();
  const lang = getLang();
  const sortedTours = getSortedTours(lang);
  container.setAttribute("aria-label", t("plan.eyebrow", lang));

  const cards = sortedTours
    .map((tour, index) => {
      const data = t(`tours.${tour.slug}`, lang);
      return `
        <a
          class="tour-plan-card"
          href="destination-${tour.slug}.html"
          aria-label="${data.name}"
        >
          <img src="${tour.image}" alt="${data.name}" loading="eager" />
          <span class="tour-plan-card-shade" aria-hidden="true"></span>
          <span class="tour-plan-card-label">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Zm0-9.4A2.6 2.6 0 1 1 12 6a2.6 2.6 0 0 1 0 5.2Z"/>
            </svg>
            ${String(index + 1).padStart(2, "0")} ${t("plan.cardLabel", lang)}
          </span>
          <strong>${data.name}</strong>
        </a>
      `;
    })
    .join("");

  container.innerHTML = `
    <div class="tour-plans-track">
      <div class="tour-plans-group">${cards}</div>
    </div>
  `;

  initTourPlansCarousel(container);
}

function initTourPlansCarousel(container) {
  const track = container.querySelector(".tour-plans-track");
  const group = container.querySelector(".tour-plans-group");
  if (!track || !group || !group.children.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const transitionDuration = 700;

  const getStepWidth = () => {
    const groupStyles = window.getComputedStyle(group);
    const gap = parseFloat(groupStyles.columnGap || groupStyles.gap) || 0;
    return group.firstElementChild.getBoundingClientRect().width + gap;
  };

  const scheduleNext = () => {
    container.tourPlansTimer = window.setTimeout(() => {
      const firstCard = group.firstElementChild;
      track.style.transition = `transform ${transitionDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      track.style.transform = `translate3d(${-getStepWidth()}px, 0, 0)`;

      container.tourPlansResetTimer = window.setTimeout(() => {
        group.appendChild(firstCard);
        track.style.transition = "none";
        track.style.transform = "translate3d(0, 0, 0)";
        void track.offsetWidth;
        scheduleNext();
      }, transitionDuration);
    }, 2500);
  };

  scheduleNext();
}

function initHeader() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".nav-mobile");
  const isHome = document.body.dataset.page === "home";

  const onScroll = () => {
    if (!header) return;
    if (isHome) {
      header.classList.toggle("scrolled", window.scrollY > 24);
      return;
    }
    header.classList.add("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle?.addEventListener("click", () => {
    mobileNav?.classList.toggle("open");
  });

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
      renderTourCards(document.querySelector("[data-tour-grid]"));
      initDetailPage();
      mobileNav?.classList.remove("open");
    });
  });
}

function initFaq() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      if (!item) return;
      const willOpen = !item.classList.contains("open");

      item.closest(".faq-list")?.querySelectorAll(".faq-item").forEach((faqItem) => {
        faqItem.classList.remove("open");
        faqItem.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
      });

      if (willOpen) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function flagEmoji(iso) {
  return iso
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

function countryName(country, lang = getLang()) {
  if (lang === "fr") {
    try {
      return new Intl.DisplayNames(["fr"], { type: "region" }).of(country.iso) || country.en;
    } catch {
      return country.en;
    }
  }
  return country[lang] || country.en;
}

function findCountry(iso) {
  return (window.PHONE_COUNTRIES || []).find((item) => item.iso === iso) || null;
}

function createPhoneField() {
  const wrap = document.createElement("div");
  wrap.className = "phone-field-wrap";
  wrap.dataset.phoneField = "";
  wrap.innerHTML = `
    <label data-i18n="booking.phone">phone / WhatsApp</label>
    <div class="phone-field">
      <div class="phone-country" data-phone-country>
        <button type="button" class="phone-country-btn" aria-haspopup="listbox" aria-expanded="false">
          <span class="phone-country-flag" data-phone-flag></span>
          <span class="phone-country-dial" data-phone-dial></span>
          <span class="phone-country-caret" aria-hidden="true">▾</span>
        </button>
        <div class="phone-country-menu" hidden>
          <input type="search" class="phone-country-search" data-i18n-placeholder="booking.phoneSearch" placeholder="Search country..." autocomplete="off" />
          <ul class="phone-country-list" role="listbox"></ul>
        </div>
      </div>
      <input class="phone-number-input" type="tel" name="phone" required inputmode="tel" autocomplete="tel-national" data-i18n-placeholder="booking.phonePlaceholder" placeholder="Phone number" />
      <input type="hidden" name="phoneIso" value="PE" data-phone-iso />
      <input type="hidden" name="phoneDial" value="+51" data-phone-dial-value />
    </div>
  `;
  return wrap;
}

function renderPhoneCountryList(root, query = "") {
  const list = root.querySelector(".phone-country-list");
  if (!list) return;
  const lang = getLang();
  const q = query.trim().toLowerCase();
  const countries = [...(window.PHONE_COUNTRIES || [])];

  const filtered = countries
    .filter((country) => {
      if (!q) return true;
      const names = SUPPORTED_LOCALES.map((locale) =>
        countryName(country, locale).toLocaleLowerCase(locale)
      );
      const iso = country.iso.toLowerCase();
      const dial = `+${country.dial}`;
      return (
        names.some((name) => name.startsWith(q) || name.includes(q)) ||
        iso.startsWith(q) ||
        dial.includes(q) ||
        country.dial.includes(q)
      );
    })
    .sort((a, b) => {
      if (!q) {
        return countryName(a, lang).localeCompare(countryName(b, lang), lang);
      }
      const aName = countryName(a, lang).toLowerCase();
      const bName = countryName(b, lang).toLowerCase();
      const aScore = aName.startsWith(q) ? 0 : a.iso.toLowerCase().startsWith(q) ? 1 : 2;
      const bScore = bName.startsWith(q) ? 0 : b.iso.toLowerCase().startsWith(q) ? 1 : 2;
      if (aScore !== bScore) return aScore - bScore;
      return aName.localeCompare(bName, lang);
    });

  list.innerHTML = filtered
    .map(
      (country) => `
      <li role="option" tabindex="-1" data-iso="${country.iso}">
        <span class="phone-country-flag">${flagEmoji(country.iso)}</span>
        <span class="phone-country-name">${countryName(country, lang)}</span>
        <span class="phone-country-code">+${country.dial}</span>
      </li>`
    )
    .join("");

  if (!filtered.length) {
    list.innerHTML = `<li class="phone-country-empty">—</li>`;
  }
}

function setPhoneCountry(root, iso) {
  const country = findCountry(iso) || findCountry("PE");
  if (!country) return;
  root.querySelector("[data-phone-flag]").textContent = flagEmoji(country.iso);
  root.querySelector("[data-phone-dial]").textContent = `+${country.dial}`;
  root.querySelector("[data-phone-iso]").value = country.iso;
  root.querySelector("[data-phone-dial-value]").value = `+${country.dial}`;
}

function bindPhoneField(wrap) {
  const countryRoot = wrap.querySelector("[data-phone-country]");
  const btn = wrap.querySelector(".phone-country-btn");
  const menu = wrap.querySelector(".phone-country-menu");
  const search = wrap.querySelector(".phone-country-search");
  const list = wrap.querySelector(".phone-country-list");

  setPhoneCountry(wrap, "PE");
  renderPhoneCountryList(wrap);

  const closeMenu = () => {
    menu.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    countryRoot.classList.remove("is-open");
  };

  const openMenu = () => {
    renderPhoneCountryList(wrap, search.value);
    menu.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    countryRoot.classList.add("is-open");
    search.focus();
  };

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (menu.hidden) openMenu();
    else closeMenu();
  });

  search.addEventListener("input", () => {
    renderPhoneCountryList(wrap, search.value);
  });

  list.addEventListener("click", (event) => {
    const item = event.target.closest("[data-iso]");
    if (!item) return;
    setPhoneCountry(wrap, item.dataset.iso);
    search.value = "";
    closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!countryRoot.contains(event.target)) closeMenu();
  });

  wrap.closest("form")?.addEventListener("reset", () => {
    window.setTimeout(() => {
      setPhoneCountry(wrap, "PE");
      search.value = "";
      closeMenu();
    }, 0);
  });
}

function initPhoneFields() {
  if (!window.PHONE_COUNTRIES?.length) return;

  document.querySelectorAll("[data-booking-form]").forEach((form) => {
    if (form.classList.contains("hero-booking")) return;
    if (form.querySelector("[data-phone-field]")) return;

    const emailInput = form.querySelector('input[type="email"]');
    if (!emailInput) return;

    const wrap = createPhoneField();
    emailInput.after(wrap);
    bindPhoneField(wrap);
  });
}

function refreshPhoneFields(lang = getLang()) {
  document.querySelectorAll("[data-phone-field]").forEach((wrap) => {
    const iso = wrap.querySelector("[data-phone-iso]")?.value || "PE";
    setPhoneCountry(wrap, iso);
    const search = wrap.querySelector(".phone-country-search");
    renderPhoneCountryList(wrap, search?.value || "");
    const label = wrap.querySelector("[data-i18n='booking.phone']");
    if (label) label.textContent = t("booking.phone", lang);
    if (search) search.placeholder = t("booking.phoneSearch", lang);
    const number = wrap.querySelector(".phone-number-input");
    if (number) number.placeholder = t("booking.phonePlaceholder", lang);
  });
}

function initForms() {
  document.querySelectorAll("[data-booking-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert(t("booking.success"));
      form.reset();
    });
  });

}

function initDetailPage() {
  const root = document.querySelector("[data-tour-detail]");
  if (!root) return;

  const slug = root.dataset.tourDetail;
  const lang = getLang();
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) return;

  const data = t(`tours.${slug}`, lang);
  root.querySelector("[data-detail-title]").textContent = data.name;
  root.querySelector("[data-detail-location]").textContent = data.location;
  root.querySelector("[data-detail-price]").innerHTML = `$${tour.price} <small>${data.per}</small>`;
  root.querySelectorAll("[data-detail-short]").forEach((el) => {
    el.textContent = data.short;
  });
  root.querySelector("[data-detail-image]").src = tour.image;
  root.querySelector("[data-detail-image]").alt = data.name;

  const list = root.querySelector("[data-detail-itinerary]");
  if (list) {
    list.innerHTML = itinerary[slug][lang]
      .map((item, index) => `<li><strong>${t("pages.day", lang)} ${index + 1}:</strong> ${item}</li>`)
      .join("");
  }

  const bookingSelect = root.querySelector("[data-tour-select]");
  if (bookingSelect) bookingSelect.value = slug;
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  document.documentElement.lang = lang;
  applyTranslations(lang);
  renderTourCards(document.querySelector("[data-tour-grid]"));
  renderTourPlans(document.querySelector("[data-tour-plans]"));
  initHeader();
  initFaq();
  initPhoneFields();
  initForms();
  initDetailPage();
  refreshPhoneFields(lang);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
});
