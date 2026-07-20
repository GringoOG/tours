const STORAGE_KEY = "tours-lang";
const CURRENCY_KEY = "tours-currency";
const ORDER_DRAFT_KEY = "ollanta-order-draft";
const MAX_TRAVELERS = 20;
const SUPPORTED_LOCALES = ["en", "es", "fr"];
const SUPPORTED_CURRENCIES = ["USD", "PEN", "EUR"];
/** Approximate tourist conversion rates from USD (base tour prices). */
const CURRENCY_RATES = {
  USD: 1,
  PEN: 3.75,
  EUR: 0.92,
};

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
      booking: {
        title: "Complete your booking — Ollanta Tours",
        description: "Confirm your selected Ollanta Tours experiences, dates, travelers, and contact details.",
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
      currency: "Currency",
      menu: "Menu",
    },
    images: {
      hero: "Sacred Valley adventure in Ollantaytambo",
      sacredValley: "Sacred Valley",
      morayTerraces: "Moray terraces",
    },
    about: {
      heroTitle: "Trusted travel agency about us",
      servingSince: "Serving since 2016",
      storyTitle: "About our travel agency journey and mission story today",
      missionTitle: "Our mission",
      missionText:
        "Our mission is to make Sacred Valley travel simple, accessible, and memorable through carefully planned local journeys.",
      visionTitle: "Our vision",
      visionText:
        "Our vision is to become the most trusted tour operator in Ollantaytambo by helping travelers explore with confidence.",
      valuesTitle: "Our value",
      valuesText:
        "Our values are built on trust, safety, and respect for local communities. We focus on clear service and unforgettable experiences.",
      getInTouch: "Get in touch",
      historyBadge: "Read our history",
      historyTitle: "Our journey through travel excellence and success",
      timelineTitle: "Serving since 2016",
      timelineLead:
        "From a small local team to thousands of travelers, our focus remains the same: real experiences, real guides, real Ollantaytambo.",
      timeline2016: "We started our journey in Ollantaytambo with the first Machu Picchu day tours.",
      timeline2019: "A growing local team added Rainbow Mountain and mountain bike routes.",
      timeline2022: "Stronger guest relationships and bilingual support for international travelers.",
      timeline2026: "Expanded custom itineraries and premium small-group service across the Sacred Valley.",
      awardsBadge: "Travel awards",
      awardsTitle: "Celebrating excellence in travel and service awards",
      award1Title: "Excellence travel award",
      award1Text:
        "Recognition for carefully planned Sacred Valley journeys with a strong focus on outstanding local service.",
      award2Title: "Trusted travel service",
      award2Text:
        "Recognition for reliable planning, safety, and consistent customer care before, during, and after every tour.",
      award3Title: "Customer choice award",
      award3Text:
        "Chosen by travelers who value personal attention, flexible dates, and authentic Andean experiences.",
      award4Title: "Service excellence award",
      award4Text:
        "Honoring fast support, transparent communication, and tours crafted with local expertise.",
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
      t5q: "Our trip was perfectly organized from beginning to end. Every detail was carefully planned, making the entire experience stress-free and enjoyable.",
      t5n: "Alexander D. Lane",
      t5r: "Travel coordinator",
      t6q: "This was one of the best travel experiences we have ever had. Everything was arranged professionally, from transportation to accommodations.",
      t6n: "Sophia G. Turner",
      t6r: "Tourism specialist",
      t7q: "From the moment we booked until we returned home, everything was handled efficiently. The recommendations and local guides were excellent.",
      t7n: "Luna C. Reeves",
      t7r: "Vacation planner",
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
      destinationsBadge: "Our Tours",
      destinationsTitle: "Explore dream tours from Ollantaytambo",
      destinationsLead: "Choose from our most popular adventures or contact us for a custom itinerary.",
      contactTitle: "Reach out for help today",
      contactLead: "Connect with us for the best travel support in Ollantaytambo.",
      contactPanelTitle: "Connect with us for the best travel support",
      contactPanelText:
        "Connect with us for the best travel support and experience personalized assistance for all your travel needs. Our dedicated local team is ready to help in Ollantaytambo.",
      contactDestination: "Travel destination",
      contactDestinationPlaceholder: "Machu Picchu, Sacred Valley...",
      contactNamePlaceholder: "Jane Smith",
      contactEmailPlaceholder: "jane@email.com",
      contactMessagePlaceholder: "Write your message here...",
      contactSubmit: "Send message",
      contactMapTitle: "Ollanta Tours on Plaza Principal, Ollantaytambo",
      phoneLabel: "Phone number",
      emailLabel: "Email address",
      officeLabel: "Office address",
      testimonialsBadge: "Reviews",
      testimonialsTitle: "Read reviews from\nhappy guests",
      testimonialsLead: "Real stories from travelers who explored the Sacred Valley with us.",
      loadMore: "Load more",
      bookNow: "Book now",
      phone: "Phone",
      email: "Email",
      office: "Office",
      address: "Plaza Principal, Ollantaytambo",
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
      destination: "Tours",
      chooseTours: "Choose one or more tours",
      combineSave: "Combine with another tour and save!",
      selectedTours: "{count} tours selected",
      tourDate: "Date",
      dateLater: "Arrange the date later",
      tourTravelers: "Travelers",
      pricePerPerson: "Price per person",
      tourTotal: "Tour total",
      orderSummary: "Order summary",
      totalOrder: "Total order price",
      pricesInUsd: "Prices are shown in {code}.",
      pricesInCurrency: "Prices are shown in {code}.",
      travelerOptionOne: "1 traveler",
      travelerOptionMany: "{count} travelers",
      requiredTours: "Select at least one tour.",
      travelers: "Number of travelers",
      message: "Message",
      submit: "Send request",
      success: "Thank you! We will contact you shortly.",
      orderTitle: "Complete your booking",
      orderLead: "Your selected tours are ready. Add one lead traveler and contact details to continue.",
      contactDetails: "Lead traveler details",
      confirmOrder: "Confirm booking",
      continueBooking: "Continue to booking",
      confirmTitle: "Confirm your booking?",
      confirmText: "Are you sure you want to place this booking?",
      cancelConfirmation: "Go back",
      approveConfirmation: "Yes, confirm booking",
      thankYouTitle: "Thank you for your booking",
      thankYouText: "We will contact you.",
      close: "Close",
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
      booking: {
        title: "Completa tu reserva — Ollanta Tours",
        description: "Confirma tus tours seleccionados, fechas, viajeros y datos de contacto con Ollanta Tours.",
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
      currency: "Moneda",
      menu: "Menú",
    },
    images: {
      hero: "Aventura en el Valle Sagrado desde Ollantaytambo",
      sacredValley: "Valle Sagrado",
      morayTerraces: "Terrazas de Moray",
    },
    about: {
      heroTitle: "Una agencia de viajes de confianza",
      servingSince: "A tu servicio desde 2016",
      storyTitle: "La historia, el camino y la misión de nuestra agencia hoy",
      missionTitle: "Nuestra misión",
      missionText:
        "Nuestra misión es hacer que viajar por el Valle Sagrado sea simple, accesible e inolvidable con itinerarios locales bien planificados.",
      visionTitle: "Nuestra visión",
      visionText:
        "Nuestra visión es convertirnos en el operador turístico de mayor confianza en Ollantaytambo, inspirando a explorar con seguridad.",
      valuesTitle: "Nuestro valor",
      valuesText:
        "Nuestros valores se basan en la confianza, la seguridad y el respeto por las comunidades locales. Priorizamos un servicio claro y experiencias memorables.",
      getInTouch: "Contáctanos",
      historyBadge: "Lee nuestra historia",
      historyTitle: "Nuestro camino de excelencia y éxito en los viajes",
      timelineTitle: "A tu servicio desde 2016",
      timelineLead:
        "De un pequeño equipo local a miles de viajeros, nuestro enfoque sigue siendo el mismo: experiencias reales, guías reales y el auténtico Ollantaytambo.",
      timeline2016: "Comenzamos en Ollantaytambo con los primeros tours de un día a Machu Picchu.",
      timeline2019: "Un equipo local en crecimiento sumó la Montaña de Colores y rutas en bicicleta.",
      timeline2022: "Más cercanía con los viajeros y atención bilingüe para huéspedes internacionales.",
      timeline2026: "Ampliamos itinerarios a medida y un servicio prémium para grupos pequeños en el Valle Sagrado.",
      awardsBadge: "Premios de viaje",
      awardsTitle: "Celebramos la excelencia en viajes y en el servicio",
      award1Title: "Premio a la excelencia en viajes",
      award1Text:
        "Reconocimiento por viajes bien planificados en el Valle Sagrado con un fuerte enfoque en un servicio local excepcional.",
      award2Title: "Servicio de viaje de confianza",
      award2Text:
        "Reconocimiento por planificación fiable, seguridad y atención constante antes, durante y después de cada tour.",
      award3Title: "Premio a la elección del cliente",
      award3Text:
        "Elegidos por viajeros que valoran la atención personal, fechas flexibles y experiencias andinas auténticas.",
      award4Title: "Premio a la excelencia en el servicio",
      award4Text:
        "Honramos el soporte rápido, la comunicación transparente y tours creados con experiencia local.",
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
      t5q: "Nuestro viaje estuvo perfectamente organizado de principio a fin. Cada detalle estuvo cuidadosamente planificado y la experiencia fue relajada y memorable.",
      t5n: "Alexander D. Lane",
      t5r: "Coordinador de viajes",
      t6q: "Fue una de las mejores experiencias de viaje que hemos tenido. Todo se gestionó de forma profesional, desde el transporte hasta las visitas.",
      t6n: "Sophia G. Turner",
      t6r: "Especialista en turismo",
      t7q: "Desde la reserva hasta el regreso a casa, todo se manejó con eficiencia. Las recomendaciones y los guías locales fueron excelentes.",
      t7n: "Luna C. Reeves",
      t7r: "Planificadora de vacaciones",
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
      destinationsBadge: "Nuestros tours",
      destinationsTitle: "Explora tours soñados desde Ollantaytambo",
      destinationsLead: "Elige entre nuestras aventuras más populares o contáctanos para un itinerario personalizado.",
      contactTitle: "Contáctanos hoy",
      contactLead: "Conéctate con nosotros para el mejor soporte de viaje en Ollantaytambo.",
      contactPanelTitle: "Conéctate con nosotros para el mejor soporte de viaje",
      contactPanelText:
        "Conéctate con nosotros para recibir el mejor soporte de viaje y una asistencia personalizada para todas tus necesidades. Nuestro equipo local está listo para ayudarte en Ollantaytambo.",
      contactDestination: "Destino de viaje",
      contactDestinationPlaceholder: "Machu Picchu, Valle Sagrado...",
      contactNamePlaceholder: "Jane Smith",
      contactEmailPlaceholder: "jane@email.com",
      contactMessagePlaceholder: "Escribe tu mensaje aquí...",
      contactSubmit: "Enviar mensaje",
      contactMapTitle: "Ollanta Tours en la Plaza Principal, Ollantaytambo",
      phoneLabel: "Número de teléfono",
      emailLabel: "Correo electrónico",
      officeLabel: "Dirección de la oficina",
      testimonialsBadge: "Reseñas",
      testimonialsTitle: "Lee reseñas de\nhuéspedes felices",
      testimonialsLead: "Historias reales de viajeros que exploraron el Valle Sagrado con nosotros.",
      loadMore: "Cargar más",
      bookNow: "Reservar ahora",
      phone: "Teléfono",
      email: "Correo",
      office: "Oficina",
      address: "Plaza Principal, Ollantaytambo",
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
      destination: "Tours",
      chooseTours: "Elige uno o más tours",
      combineSave: "¡Combina con otro tour y ahorra!",
      selectedTours: "{count} tours seleccionados",
      tourDate: "Fecha",
      dateLater: "Acordar la fecha más adelante",
      tourTravelers: "Viajeros",
      pricePerPerson: "Precio por persona",
      tourTotal: "Total del tour",
      orderSummary: "Resumen del pedido",
      totalOrder: "Precio total del pedido",
      pricesInUsd: "Los precios se muestran en {code}.",
      pricesInCurrency: "Los precios se muestran en {code}.",
      travelerOptionOne: "1 viajero",
      travelerOptionMany: "{count} viajeros",
      requiredTours: "Selecciona al menos un tour.",
      travelers: "Número de viajeros",
      message: "Mensaje",
      submit: "Enviar solicitud",
      success: "¡Gracias! Te contactaremos pronto.",
      orderTitle: "Completa tu reserva",
      orderLead: "Tus tours seleccionados están listos. Añade los datos de una persona responsable y la información de contacto.",
      contactDetails: "Datos de la persona responsable",
      confirmOrder: "Confirmar reserva",
      continueBooking: "Continuar con la reserva",
      confirmTitle: "¿Confirmar tu reserva?",
      confirmText: "¿Seguro que quieres realizar esta reserva?",
      cancelConfirmation: "Volver",
      approveConfirmation: "Sí, confirmar reserva",
      thankYouTitle: "Gracias por tu reserva",
      thankYouText: "Nos pondremos en contacto contigo.",
      close: "Cerrar",
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
      booking: {
        title: "Finalisez votre réservation — Ollanta Tours",
        description: "Confirmez les circuits choisis, les dates, les voyageurs et vos coordonnées avec Ollanta Tours.",
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
      currency: "Devise",
      menu: "Menu",
    },
    images: {
      hero: "Aventure dans la Vallée sacrée à Ollantaytambo",
      sacredValley: "Vallée sacrée",
      morayTerraces: "Terrasses de Moray",
    },
    about: {
      heroTitle: "Une agence de voyage digne de confiance",
      servingSince: "À votre service depuis 2016",
      storyTitle: "L'histoire, le parcours et la mission de notre agence aujourd'hui",
      missionTitle: "Notre mission",
      missionText:
        "Notre mission est de rendre les voyages dans la Vallée sacrée simples, accessibles et mémorables grâce à des itinéraires locaux bien préparés.",
      visionTitle: "Notre vision",
      visionText:
        "Notre vision est de devenir le voyagiste le plus digne de confiance à Ollantaytambo, en aidant les voyageurs à explorer en toute confiance.",
      valuesTitle: "Nos valeurs",
      valuesText:
        "Nos valeurs reposent sur la confiance, la sécurité et le respect des communautés locales. Nous privilégions un service clair et des expériences inoubliables.",
      getInTouch: "Nous contacter",
      historyBadge: "Lire notre histoire",
      historyTitle: "Notre parcours d'excellence et de réussite dans le voyage",
      timelineTitle: "À votre service depuis 2016",
      timelineLead:
        "D'une petite équipe locale à des milliers de voyageurs, notre priorité reste la même : des expériences authentiques, de vrais guides et le véritable Ollantaytambo.",
      timeline2016: "Nous avons commencé à Ollantaytambo avec les premières excursions d'une journée au Machu Picchu.",
      timeline2019: "Une équipe locale grandissante a ajouté la Montagne aux sept couleurs et des circuits VTT.",
      timeline2022: "Des liens plus forts avec les voyageurs et une assistance bilingue pour les visiteurs internationaux.",
      timeline2026: "Développement d'itinéraires sur mesure et d'un service premium en petits groupes dans la Vallée sacrée.",
      awardsBadge: "Récompenses voyage",
      awardsTitle: "Célébrer l'excellence dans le voyage et le service",
      award1Title: "Prix d'excellence voyage",
      award1Text:
        "Une reconnaissance pour des voyages soigneusement organisés dans la Vallée sacrée, avec un fort souci de qualité de service.",
      award2Title: "Service de voyage de confiance",
      award2Text:
        "Une reconnaissance pour une organisation fiable, la sécurité et une attention constante avant, pendant et après chaque circuit.",
      award3Title: "Prix du choix des voyageurs",
      award3Text:
        "Choisis par des voyageurs qui apprécient l'attention personnelle, des dates flexibles et des expériences andines authentiques.",
      award4Title: "Prix d'excellence du service",
      award4Text:
        "Une distinction pour un accompagnement rapide, une communication transparente et des circuits conçus avec une expertise locale.",
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
      t5q: "Notre voyage a été parfaitement organisé du début à la fin. Chaque détail a été soigneusement prévu, rendant l'expérience sereine et agréable.",
      t5n: "Alexander D. Lane",
      t5r: "Coordinateur de voyage",
      t6q: "Ce fut l'une des meilleures expériences de voyage que nous ayons eues. Tout a été organisé avec professionnalisme, des transferts aux hébergements.",
      t6n: "Sophia G. Turner",
      t6r: "Spécialiste du tourisme",
      t7q: "Du moment de la réservation jusqu'au retour, tout a été géré efficacement. Les recommandations et les guides locaux étaient excellents.",
      t7n: "Luna C. Reeves",
      t7r: "Organisatrice de vacances",
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
      destinationsBadge: "Nos circuits",
      destinationsTitle: "Découvrez des circuits de rêve au départ d'Ollantaytambo",
      destinationsLead: "Choisissez parmi nos aventures les plus populaires ou contactez-nous pour un itinéraire sur mesure.",
      contactTitle: "Contactez-nous dès aujourd'hui",
      contactLead: "Notre équipe est à votre écoute pour vous accompagner au mieux à Ollantaytambo.",
      contactPanelTitle: "Contactez-nous pour le meilleur accompagnement de voyage",
      contactPanelText:
        "Contactez-nous pour bénéficier du meilleur accompagnement et d'une assistance personnalisée pour tous vos besoins de voyage. Notre équipe locale est prête à vous aider à Ollantaytambo.",
      contactDestination: "Destination de voyage",
      contactDestinationPlaceholder: "Machu Picchu, Vallée sacrée...",
      contactNamePlaceholder: "Jane Smith",
      contactEmailPlaceholder: "jane@email.com",
      contactMessagePlaceholder: "Écrivez votre message ici...",
      contactSubmit: "Envoyer le message",
      contactMapTitle: "Ollanta Tours sur la Plaza Principal, Ollantaytambo",
      phoneLabel: "Numéro de téléphone",
      emailLabel: "Adresse e-mail",
      officeLabel: "Adresse du bureau",
      testimonialsBadge: "Avis",
      testimonialsTitle: "Découvrez les avis\nde nos voyageurs",
      testimonialsLead: "Des récits authentiques de voyageurs ayant exploré la Vallée sacrée avec nous.",
      loadMore: "Afficher plus",
      bookNow: "Réserver",
      phone: "Téléphone",
      email: "E-mail",
      office: "Agence",
      address: "Plaza Principal, Ollantaytambo",
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
      destination: "Circuits",
      chooseTours: "Choisissez un ou plusieurs circuits",
      combineSave: "Combinez avec un autre circuit et économisez !",
      selectedTours: "{count} circuits sélectionnés",
      tourDate: "Date",
      dateLater: "Fixer la date plus tard",
      tourTravelers: "Voyageurs",
      pricePerPerson: "Prix par personne",
      tourTotal: "Total du circuit",
      orderSummary: "Récapitulatif de la réservation",
      totalOrder: "Prix total de la réservation",
      pricesInUsd: "Les prix sont indiqués en {code}.",
      pricesInCurrency: "Les prix sont indiqués en {code}.",
      travelerOptionOne: "1 voyageur",
      travelerOptionMany: "{count} voyageurs",
      requiredTours: "Sélectionnez au moins un circuit.",
      travelers: "Nombre de voyageurs",
      message: "Message",
      submit: "Envoyer la demande",
      success: "Merci ! Nous vous contacterons très bientôt.",
      orderTitle: "Finalisez votre réservation",
      orderLead: "Vos circuits sélectionnés sont prêts. Ajoutez les coordonnées d'une personne responsable pour continuer.",
      contactDetails: "Coordonnées de la personne responsable",
      confirmOrder: "Confirmer la réservation",
      continueBooking: "Continuer la réservation",
      confirmTitle: "Confirmer votre réservation ?",
      confirmText: "Voulez-vous vraiment effectuer cette réservation ?",
      cancelConfirmation: "Retour",
      approveConfirmation: "Oui, confirmer",
      thankYouTitle: "Merci pour votre réservation",
      thankYouText: "Nous vous contacterons.",
      close: "Fermer",
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

function getCurrency() {
  const saved = localStorage.getItem(CURRENCY_KEY);
  return SUPPORTED_CURRENCIES.includes(saved) ? saved : "USD";
}

function t(path, lang = getLang()) {
  return path.split(".").reduce((acc, key) => acc?.[key], i18n[lang]) ?? path;
}

function formatMoney(amountUsd) {
  const currency = getCurrency();
  const amount = Math.round(Number(amountUsd) * CURRENCY_RATES[currency]);
  const locale =
    currency === "PEN" ? "es-PE" : currency === "EUR" ? "de-DE" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function updateCurrencyLabels(lang = getLang()) {
  const code = getCurrency();
  const label = t("booking.pricesInCurrency", lang).replace("{code}", code);
  document
    .querySelectorAll(
      '[data-i18n="booking.pricesInCurrency"], [data-i18n="booking.pricesInUsd"]'
    )
    .forEach((el) => {
      el.textContent = label;
    });
  document.querySelectorAll(".currency-switch").forEach((el) => {
    el.setAttribute("aria-label", t("a11y.currency", lang));
  });
  document.querySelectorAll(".currency-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.currency === code);
  });
}

function refreshPrices(lang = getLang()) {
  updateCurrencyLabels(lang);
  renderTourCards(document.querySelector("[data-tour-grid]"));

  const detailRoot = document.querySelector("[data-tour-detail]");
  if (detailRoot) {
    const slug = detailRoot.dataset.tourDetail;
    const tour = tours.find((item) => item.slug === slug);
    const priceEl = detailRoot.querySelector("[data-detail-price]");
    if (tour && priceEl) {
      const data = t(`tours.${slug}`, lang);
      priceEl.innerHTML = `${formatMoney(tour.price)} <small>${data.per}</small>`;
    }
  }

  refreshTourMultiSelects(lang);
}

function setCurrency(code) {
  if (!SUPPORTED_CURRENCIES.includes(code)) code = "USD";
  localStorage.setItem(CURRENCY_KEY, code);
  refreshPrices();
}

function initCurrencySwitch() {
  document.querySelectorAll(".header-actions .lang-switch").forEach((langSwitch) => {
    if (langSwitch.parentElement.querySelector(".currency-switch")) return;

    const wrap = document.createElement("div");
    wrap.className = "currency-switch";
    wrap.dataset.i18nAriaLabel = "a11y.currency";
    wrap.setAttribute("aria-label", t("a11y.currency"));
    wrap.innerHTML = SUPPORTED_CURRENCIES.map(
      (code) =>
        `<button type="button" data-currency="${code}">${code}</button>`
    ).join("");
    langSwitch.after(wrap);

    wrap.querySelectorAll("button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.currency === getCurrency());
      btn.addEventListener("click", () => setCurrency(btn.dataset.currency));
    });
  });
  updateCurrencyLabels();
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
  window.ToursEffects?.refresh();
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

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.dataset.i18nTitle, lang));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder, lang);
  });

  document.querySelectorAll("[data-tour-select]").forEach((select) => {
    const selected = new Set(
      [...select.selectedOptions].map((option) => option.value).filter(Boolean)
    );
    const isMulti = select.multiple || select.hasAttribute("data-multi-tour");
    const placeholder = isMulti
      ? ""
      : `<option value="">${t("selects.chooseTour", lang)}</option>`;
    select.innerHTML = `${placeholder}${getSortedTours(lang)
      .map(
        (tour) =>
          `<option value="${tour.slug}">${t("tours." + tour.slug + ".name", lang)}</option>`
      )
      .join("")}`;
    [...select.options].forEach((option) => {
      option.selected = selected.has(option.value);
    });
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
    const nav = column.querySelector("nav") || column;
    nav.querySelectorAll("a").forEach((link) => link.remove());
    getSortedTours(lang).forEach((tour) => {
      const link = document.createElement("a");
      link.href = `destination-${tour.slug}.html`;
      link.textContent = t(`tours.${tour.slug}.name`, lang);
      nav.appendChild(link);
    });
  });

  refreshTourMultiSelects(lang);
  updateCurrencyLabels(lang);
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
            <div class="tour-price">${formatMoney(tour.price)} <small>${data.per}</small></div>
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

    const wrap = createPhoneField();
    const mount = form.querySelector("[data-phone-mount]");
    if (mount) {
      mount.replaceWith(wrap);
      wrap.classList.add("contact-field");
    } else {
      const emailInput = form.querySelector('input[type="email"]');
      if (!emailInput) return;
      emailInput.after(wrap);
    }
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

let tourMultiId = 0;

function selectedTourSlugs(select) {
  return [...select.selectedOptions]
    .map((option) => option.value)
    .filter(Boolean);
}

function captureTourDetailValues(picker) {
  picker.querySelectorAll("[data-tour-booking-row]").forEach((row) => {
    const slug = row.dataset.tourBookingRow;
    picker.tourValues.set(slug, {
      date: row.querySelector("[data-tour-date]")?.value || "",
      dateLater: row.querySelector("[data-tour-date-later]")?.checked || false,
      travelers: row.querySelector("[data-tour-travelers]")?.value || "1",
    });
  });
}

function tourTravelerOptions(lang, selected = "1") {
  return Array.from({ length: MAX_TRAVELERS }, (_, index) => index + 1)
    .map((count) => {
      const value = String(count);
      const label =
        count === 1
          ? t("booking.travelerOptionOne", lang)
          : t("booking.travelerOptionMany", lang).replace("{count}", count);
      return `<option value="${value}"${value === selected ? " selected" : ""}>${label}</option>`;
    })
    .join("");
}

function updateOrderPricing(picker, lang = getLang()) {
  const form = picker.closest(
    "[data-order-form], [data-tour-detail] [data-order-entry]"
  );
  const summary = form?.querySelector("[data-order-price-summary]");
  if (!form || !summary) return;

  captureTourDetailValues(picker);
  const items = selectedTourSlugs(picker.sourceSelect)
    .map((slug) => {
      const tour = tours.find((item) => item.slug === slug);
      if (!tour) return null;
      const travelers = Math.max(
        1,
        Number(picker.tourValues.get(slug)?.travelers) || 1
      );
      const total = tour.price * travelers;
      picker.querySelector(
        `[data-tour-booking-row="${slug}"] [data-tour-total]`
      ).textContent = formatMoney(total);
      return {
        name: t(`tours.${slug}.name`, lang),
        travelers,
        unitPrice: tour.price,
        total,
      };
    })
    .filter(Boolean);

  summary.hidden = items.length === 0;
  summary.querySelector("[data-order-summary-lines]").innerHTML = items
    .map((item) => {
      const travelersLabel =
        item.travelers === 1
          ? t("booking.travelerOptionOne", lang)
          : t("booking.travelerOptionMany", lang).replace(
              "{count}",
              item.travelers
            );
      return `
        <div class="order-summary-line">
          <span>
            <strong>${item.name}</strong>
            <small>${travelersLabel} × ${formatMoney(item.unitPrice)}</small>
          </span>
          <strong>${formatMoney(item.total)}</strong>
        </div>
      `;
    })
    .join("");
  summary.querySelector("[data-order-grand-total]").textContent = formatMoney(
    items.reduce((total, item) => total + item.total, 0)
  );
}

function renderTourBookingDetails(picker, lang = getLang()) {
  captureTourDetailValues(picker);
  const select = picker.sourceSelect;
  const details = picker.querySelector("[data-tour-booking-details]");
  const selected = selectedTourSlugs(select);
  const canChooseDateLaterOnNextPage = Boolean(
    picker.closest("[data-order-entry]")
  );

  details.innerHTML = selected
    .map((slug) => {
      const values = picker.tourValues.get(slug) || {
        date: "",
        dateLater: false,
        travelers: "1",
      };
      const name = t(`tours.${slug}.name`, lang);
      const tour = tours.find((item) => item.slug === slug);
      const showPricing = Boolean(
        (picker.closest("[data-order-form]") ||
          picker.closest("[data-tour-detail]")) &&
          tour
      );
      const tourTotal = tour
        ? tour.price * (Number(values.travelers) || 1)
        : 0;
      return `
        <article class="tour-booking-row" data-tour-booking-row="${slug}">
          <strong>${name}</strong>
          <input type="hidden" name="tours[]" value="${slug}" />
          <div class="tour-booking-body">
            <div class="tour-booking-main">
              <div class="tour-date-field">
                <label>
                  <span>${t("booking.tourDate", lang)}</span>
                  <input
                    type="date"
                    name="tourDate[${slug}]"
                    value="${values.date}"
                    ${values.dateLater ? "disabled" : ""}
                    ${values.dateLater || canChooseDateLaterOnNextPage ? "" : "required"}
                    data-tour-date
                  />
                </label>
                <label class="tour-date-later">
                  <input
                    type="checkbox"
                    name="tourDateLater[${slug}]"
                    value="yes"
                    ${values.dateLater ? "checked" : ""}
                    data-tour-date-later
                  />
                  <span>${t("booking.dateLater", lang)}</span>
                </label>
              </div>
              <label class="tour-travelers-field">
                <span>${t("booking.tourTravelers", lang)}</span>
                <select name="tourTravelers[${slug}]" required data-tour-travelers>
                  ${tourTravelerOptions(lang, values.travelers)}
                </select>
              </label>
            </div>
            ${
              tour
                ? `
                  <figure class="tour-booking-photo">
                    <img src="${tour.image}" alt="${name}" loading="lazy" />
                  </figure>
                `
                : ""
            }
          </div>
          ${
            showPricing
              ? `
                <div class="tour-price-details">
                  <span>
                    <small>${t("booking.pricePerPerson", lang)}</small>
                    <strong>${formatMoney(tour.price)}</strong>
                  </span>
                  <span>
                    <small>${t("booking.tourTotal", lang)}</small>
                    <strong data-tour-total>${formatMoney(tourTotal)}</strong>
                  </span>
                </div>
              `
              : ""
          }
        </article>
      `;
    })
    .join("");
  updateOrderPricing(picker, lang);
}

function refreshTourMultiPicker(picker, lang = getLang()) {
  const select = picker.sourceSelect;
  const selected = new Set(selectedTourSlugs(select));
  const options = picker.querySelector("[data-tour-multi-options]");
  const summary = picker.querySelector("[data-tour-multi-summary]");

  options.innerHTML = getSortedTours(lang)
    .map((tour) => {
      const checked = selected.has(tour.slug);
      return `
        <label class="tour-multi-option" role="option" aria-selected="${checked}">
          <input type="checkbox" value="${tour.slug}"${checked ? " checked" : ""} />
          <span>${t(`tours.${tour.slug}.name`, lang)}</span>
        </label>
      `;
    })
    .join("");

  const selectedNames = selectedTourSlugs(select).map((slug) =>
    t(`tours.${slug}.name`, lang)
  );
  summary.textContent =
    selectedNames.length === 0
      ? t("booking.chooseTours", lang)
      : selectedNames.length <= 2
        ? selectedNames.join(", ")
        : t("booking.selectedTours", lang).replace("{count}", selectedNames.length);

  picker
    .querySelector("[data-tour-multi-button]")
    .setAttribute("aria-label", summary.textContent);
  picker.querySelector("[data-tour-multi-error]").textContent = t(
    "booking.requiredTours",
    lang
  );
  renderTourBookingDetails(picker, lang);
  updateDetailGallery(lang);
}

function refreshTourMultiSelects(lang = getLang()) {
  document.querySelectorAll("[data-tour-multi-picker]").forEach((picker) => {
    refreshTourMultiPicker(picker, lang);
  });
}

function setTourMultiSelection(select, slugs) {
  const selected = new Set(slugs);
  [...select.options].forEach((option) => {
    option.selected = selected.has(option.value);
  });
  const picker = select.tourMultiPicker;
  if (picker) {
    picker.querySelector("[data-tour-multi-error]").hidden = true;
    picker
      .querySelector("[data-tour-multi-button]")
      .removeAttribute("aria-invalid");
    refreshTourMultiPicker(picker);
  }
}

function initTourMultiSelects() {
  document.querySelectorAll("[data-tour-select][data-multi-tour]").forEach((select) => {
    if (select.tourMultiPicker) return;

    select.multiple = true;
    select.hidden = true;
    select.removeAttribute("name");
    select.removeAttribute("required");
    const id = `tour-multi-${++tourMultiId}`;
    const picker = document.createElement("div");
    picker.className = "tour-multi";
    picker.dataset.tourMultiPicker = "";
    picker.sourceSelect = select;
    picker.tourValues = new Map();
    picker.innerHTML = `
      <p class="tour-multi-hint" id="${id}-hint" data-i18n="booking.chooseTours"></p>
      <button
        class="tour-multi-button"
        type="button"
        aria-expanded="false"
        aria-controls="${id}-menu"
        data-tour-multi-button
      >
        <span data-tour-multi-summary></span>
        <span aria-hidden="true">▾</span>
      </button>
      <div class="tour-multi-menu" id="${id}-menu" hidden data-tour-multi-menu>
        <div class="tour-multi-options" role="listbox" aria-multiselectable="true" data-tour-multi-options></div>
      </div>
      <p class="tour-multi-error" id="${id}-error" hidden data-tour-multi-error></p>
      <div class="tour-booking-details" data-tour-booking-details></div>
    `;
    select.after(picker);
    select.tourMultiPicker = picker;

    const button = picker.querySelector("[data-tour-multi-button]");
    const menu = picker.querySelector("[data-tour-multi-menu]");
    const hint = picker.querySelector(".tour-multi-hint");
    hint.textContent = t("booking.chooseTours", getLang());
    button.setAttribute("aria-describedby", `${id}-hint ${id}-error`);

    const close = () => {
      menu.hidden = true;
      button.setAttribute("aria-expanded", "false");
    };

    button.addEventListener("click", () => {
      const willOpen = menu.hidden;
      menu.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
    });

    picker.addEventListener("change", (event) => {
      const dateLater = event.target.closest("[data-tour-date-later]");
      if (dateLater) {
        const row = dateLater.closest("[data-tour-booking-row]");
        const date = row.querySelector("[data-tour-date]");
        date.disabled = dateLater.checked;
        date.required =
          !dateLater.checked && !dateLater.closest("[data-order-entry]");
        captureTourDetailValues(picker);
        return;
      }

      const travelers = event.target.closest("[data-tour-travelers]");
      if (travelers) {
        captureTourDetailValues(picker);
        updateOrderPricing(picker);
        return;
      }

      const checkbox = event.target.closest('.tour-multi-option input[type="checkbox"]');
      if (!checkbox) return;
      const option = [...select.options].find(
        (item) => item.value === checkbox.value
      );
      if (option) option.selected = checkbox.checked;
      picker.querySelector("[data-tour-multi-error]").hidden = true;
      button.removeAttribute("aria-invalid");
      refreshTourMultiPicker(picker);
    });

    picker.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        close();
        button.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!picker.contains(event.target)) close();
    });

    refreshTourMultiPicker(picker);
  });
}

function validateTourMultiSelects(form) {
  if (form.hasAttribute("data-tours-optional")) return true;

  let valid = true;
  form.querySelectorAll("[data-tour-multi-picker]").forEach((picker) => {
    const hasTours = selectedTourSlugs(picker.sourceSelect).length > 0;
    const error = picker.querySelector("[data-tour-multi-error]");
    const button = picker.querySelector("[data-tour-multi-button]");
    error.hidden = hasTours;
    button.toggleAttribute("aria-invalid", !hasTours);
    if (!hasTours && valid) {
      button.focus();
      valid = false;
    }
  });
  return valid;
}

function createOrderDraft(form) {
  const picker = form.querySelector("[data-tour-multi-picker]");
  if (!picker) return { tours: [] };

  captureTourDetailValues(picker);
  return {
    tours: selectedTourSlugs(picker.sourceSelect).map((slug) => {
      const values = picker.tourValues.get(slug) || {};
      return {
        slug,
        date: values.date || "",
        dateLater: Boolean(values.dateLater),
        travelers: values.travelers || "1",
      };
    }),
  };
}

function readOrderDraft() {
  try {
    const parsed = JSON.parse(sessionStorage.getItem(ORDER_DRAFT_KEY) || "{}");
    const availableSlugs = new Set(tours.map((tour) => tour.slug));
    const items = Array.isArray(parsed.tours) ? parsed.tours : [];
    return {
      tours: items
        .filter((item) => availableSlugs.has(item?.slug))
        .map((item) => ({
          slug: item.slug,
          date:
            typeof item.date === "string" &&
            /^\d{4}-\d{2}-\d{2}$/.test(item.date)
              ? item.date
              : "",
          dateLater: Boolean(item.dateLater),
          travelers:
            Number.isInteger(Number(item.travelers)) &&
            Number(item.travelers) >= 1 &&
            Number(item.travelers) <= MAX_TRAVELERS
              ? String(item.travelers)
              : "1",
        })),
    };
  } catch {
    return { tours: [] };
  }
}

function initOrderPage() {
  const form = document.querySelector("[data-order-form]");
  if (!form) return;

  const select = form.querySelector("[data-tour-select][data-multi-tour]");
  const picker = select?.tourMultiPicker;
  if (!select || !picker) return;

  const draft = readOrderDraft();
  picker.tourValues.clear();
  draft.tours.forEach((item) => {
    picker.tourValues.set(item.slug, {
      date: item.date,
      dateLater: item.dateLater,
      travelers: item.travelers,
    });
  });
  setTourMultiSelection(
    select,
    draft.tours.map((item) => item.slug)
  );
}

function showOrderConfirmation(form) {
  const lang = getLang();
  const submitButton = form.querySelector('[type="submit"]');
  const backdrop = document.createElement("div");
  backdrop.className = "order-modal-backdrop";
  backdrop.innerHTML = `
    <div class="order-modal" role="dialog" aria-modal="true" aria-labelledby="order-confirm-title">
      <h2 id="order-confirm-title">${t("booking.confirmTitle", lang)}</h2>
      <p>${t("booking.confirmText", lang)}</p>
      <div class="order-modal-actions">
        <button class="btn btn-outline" type="button" data-order-cancel>${t("booking.cancelConfirmation", lang)}</button>
        <button class="btn btn-primary" type="button" data-order-approve>${t("booking.approveConfirmation", lang)}</button>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  document.body.classList.add("order-modal-open");

  const close = () => {
    backdrop.remove();
    document.body.classList.remove("order-modal-open");
    document.removeEventListener("keydown", onKeydown);
    submitButton?.focus();
  };

  const onKeydown = (event) => {
    if (event.key === "Escape" && document.body.contains(backdrop)) {
      close();
    }
  };

  backdrop.querySelector("[data-order-cancel]").addEventListener("click", close);
  backdrop.querySelector("[data-order-approve]").addEventListener("click", () => {
    try {
      sessionStorage.removeItem(ORDER_DRAFT_KEY);
    } catch {
      // The thank-you state still works when browser storage is unavailable.
    }
    backdrop.innerHTML = `
      <div class="order-modal order-modal-thanks" role="dialog" aria-modal="true" aria-labelledby="order-thanks-title">
        <span class="order-modal-check" aria-hidden="true">✓</span>
        <h2 id="order-thanks-title">${t("booking.thankYouTitle", lang)}</h2>
        <p>${t("booking.thankYouText", lang)}</p>
        <button class="btn btn-primary" type="button" data-order-close>${t("booking.close", lang)}</button>
      </div>
    `;
    backdrop.querySelector("[data-order-close]").addEventListener("click", close);
    backdrop.querySelector("[data-order-close]").focus();
  });

  document.addEventListener("keydown", onKeydown);
  backdrop.querySelector("[data-order-approve]").focus();
}

function initForms() {
  document.querySelectorAll("[data-booking-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!validateTourMultiSelects(form)) return;

      if (form.hasAttribute("data-order-entry")) {
        const draft = createOrderDraft(form);
        try {
          sessionStorage.setItem(ORDER_DRAFT_KEY, JSON.stringify(draft));
        } catch {
          // Navigation still works if browser storage is unavailable.
        }
        window.location.href = "booking.html";
        return;
      }

      if (form.hasAttribute("data-order-form")) {
        showOrderConfirmation(form);
        return;
      }

      alert(t("booking.success"));
      form.reset();
      window.setTimeout(() => {
        form.querySelectorAll("[data-tour-select][data-multi-tour]").forEach((select) => {
          const defaults = select.dataset.defaultTour
            ? [select.dataset.defaultTour]
            : [];
          select.tourMultiPicker?.tourValues.clear();
          setTourMultiSelection(select, defaults);
        });
      });
    });
  });

}

function updateDetailGallery(lang = getLang()) {
  const root = document.querySelector("[data-tour-detail]");
  const gallery = root?.querySelector("[data-detail-gallery]");
  if (!root || !gallery) return;

  const select = root.querySelector("[data-order-entry] [data-tour-select]");
  const pageSlug = root.dataset.tourDetail;
  let slugs = select ? selectedTourSlugs(select) : [];
  if (!slugs.length && pageSlug) slugs = [pageSlug];

  if (pageSlug && slugs.includes(pageSlug)) {
    slugs = [pageSlug, ...slugs.filter((slug) => slug !== pageSlug)];
  }

  const showCaptions = slugs.length > 1;
  gallery.dataset.count = String(slugs.length);
  gallery.innerHTML = slugs
    .map((slug) => {
      const tour = tours.find((item) => item.slug === slug);
      if (!tour) return "";
      const name = t(`tours.${slug}.name`, lang);
      return `
        <figure class="detail-gallery-item">
          <img src="${tour.image}" alt="${name}" loading="lazy" />
          ${showCaptions ? `<figcaption>${name}</figcaption>` : ""}
        </figure>
      `;
    })
    .join("");
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
  root.querySelector("[data-detail-price]").innerHTML = `${formatMoney(tour.price)} <small>${data.per}</small>`;
  root.querySelectorAll("[data-detail-short]").forEach((el) => {
    el.textContent = data.short;
  });

  const list = root.querySelector("[data-detail-itinerary]");
  if (list) {
    list.innerHTML = itinerary[slug][lang]
      .map((item, index) => `<li><strong>${t("pages.day", lang)} ${index + 1}:</strong> ${item}</li>`)
      .join("");
  }

  const bookingSelect = root.querySelector("[data-tour-select]");
  if (bookingSelect) {
    bookingSelect.dataset.defaultTour = slug;
    if (!selectedTourSlugs(bookingSelect).length) {
      setTourMultiSelection(bookingSelect, [slug]);
    }
  }

  updateDetailGallery(lang);
}

function initFooterReveal() {
  const footer = document.querySelector("[data-footer-stage]");
  const watermark = footer?.querySelector(".footer-watermark");
  if (!footer || !watermark || footer.dataset.footerBound) return;
  footer.dataset.footerBound = "1";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    footer.classList.add("is-revealed");
    return;
  }

  const reveal = () => footer.classList.add("is-revealed");
  const hide = () => footer.classList.remove("is-revealed");

  const nearPageEnd = () => {
    const doc = document.documentElement;
    return window.scrollY + window.innerHeight >= doc.scrollHeight - 120;
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if ((entry.isIntersecting && entry.intersectionRatio >= 0.2) || nearPageEnd()) {
        reveal();
      } else if (entry.boundingClientRect.top > window.innerHeight * 0.7) {
        hide();
      }
    },
    {
      threshold: [0, 0.12, 0.2, 0.35, 0.5],
      rootMargin: "0px 0px -10% 0px",
    }
  );

  observer.observe(watermark);

  const onScroll = () => {
    if (nearPageEnd()) reveal();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  document.documentElement.lang = lang;
  applyTranslations(lang);
  renderTourCards(document.querySelector("[data-tour-grid]"));
  renderTourPlans(document.querySelector("[data-tour-plans]"));
  initHeader();
  initCurrencySwitch();
  initFaq();
  initTourMultiSelects();
  initOrderPage();
  initPhoneFields();
  initForms();
  initDetailPage();
  refreshPhoneFields(lang);
  initFooterReveal();

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
});
