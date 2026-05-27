export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://pasoluciones.com.ar/#business",
    name: "PAS Piedra Angular Solutions",
    alternateName: "PAS",
    description:
      "Especialistas en perforaciones, cortes y anclajes en hormigón armado en Buenos Aires y CABA. Tecnología diamantada refrigerada por agua.",
    url: "https://pasoluciones.com.ar",
    telephone: "+5491130144852",
    email: "ventas@pasoluciones.com.ar",
    image: "https://pasoluciones.com.ar/opengraph.png",
    logo: {
      "@type": "ImageObject",
      "@id": "https://pasoluciones.com.ar/#logo",
      url: "https://pasoluciones.com.ar/logo.svg",
      width: 200,
      height: 60,
    },
    priceRange: "$$",
    currenciesAccepted: "ARS",
    paymentAccepted: "Efectivo, Transferencia bancaria",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.60376,
      longitude: -58.38162,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Ciudad Autónoma de Buenos Aires",
        sameAs: "https://www.wikidata.org/wiki/Q1486",
      },
      {
        "@type": "AdministrativeArea",
        name: "Gran Buenos Aires",
        sameAs: "https://www.wikidata.org/wiki/Q112643",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Perforación y Corte",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://pasoluciones.com.ar/#service-perforaciones",
            name: "Perforaciones en Hormigón Armado",
            description:
              "Perforaciones de precisión para ductos, pases y refuerzos estructurales con tecnología diamantada refrigerada por agua. Una perforación estándar de 4\" a 20 cm tarda entre 15 y 40 minutos.",
            provider: { "@id": "https://pasoluciones.com.ar/#business" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://pasoluciones.com.ar/#service-juntas",
            name: "Sellado Técnico de Juntas de Dilatación",
            description:
              "Tratamiento elástico para absorber movimientos termo-mecánicos y evitar desgranamiento y filtraciones.",
            provider: { "@id": "https://pasoluciones.com.ar/#business" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://pasoluciones.com.ar/#service-bocas",
            name: "Bocas de Ataque",
            description:
              "Servicio integral: perforación precisa, ejecución de recuadro y colocación de ladrillos según exigencias reglamentarias del Código de Edificación GCBA.",
            provider: { "@id": "https://pasoluciones.com.ar/#business" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://pasoluciones.com.ar/#service-anclajes",
            name: "Anclajes Químicos y Mecánicos",
            description:
              "Instalaciones precisas de anclajes garantizando máxima estabilidad y durabilidad estructural.",
            provider: { "@id": "https://pasoluciones.com.ar/#business" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": "https://pasoluciones.com.ar/#service-operacion",
            name: "Operación Técnica y Mano de Obra",
            description:
              "Operadores calificados para proyectos con maquinaria propia del cliente. Adaptación a cronogramas de obra.",
            provider: { "@id": "https://pasoluciones.com.ar/#business" },
          },
        },
      ],
    },
    foundingDate: "2018",
    sameAs: [],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://pasoluciones.com.ar/#faq",
    url: "https://pasoluciones.com.ar/#faq",
    isPartOf: { "@id": "https://pasoluciones.com.ar/#website" },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://pasoluciones.com.ar/#organization",
    name: "PAS Piedra Angular Solutions",
    url: "https://pasoluciones.com.ar",
    logo: {
      "@type": "ImageObject",
      "@id": "https://pasoluciones.com.ar/#logo",
      url: "https://pasoluciones.com.ar/logo.svg",
      width: 200,
      height: 60,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+5491130144852",
      contactType: "customer service",
      availableLanguage: { "@type": "Language", name: "Spanish" },
      areaServed: "AR",
    },
    sameAs: [],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://pasoluciones.com.ar/#website",
    name: "PAS Piedra Angular Solutions",
    url: "https://pasoluciones.com.ar",
    inLanguage: "es-AR",
    publisher: { "@id": "https://pasoluciones.com.ar/#organization" },
  };
}
