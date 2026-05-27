export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://pasoluciones.com.ar/#business",
    name: "PAS Piedra Angular Solutions",
    alternateName: "PAS",
    description:
      "Especialistas en perforaciones, cortes y anclajes en hormigón armado en Buenos Aires y CABA. Tecnología diamantada refrigerada por agua.",
    url: "https://pasoluciones.com.ar",
    telephone: "+5491130144852",
    email: "ventas@pasoluciones.com.ar",
    image: "https://pasoluciones.com.ar/opengraph.png",
    logo: "https://pasoluciones.com.ar/logo.svg",
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
      latitude: -34.6037,
      longitude: -58.3816,
    },
    areaServed: [
      { "@type": "City", name: "Buenos Aires" },
      { "@type": "City", name: "Ciudad Autónoma de Buenos Aires" },
      { "@type": "AdministrativeArea", name: "Gran Buenos Aires" },
      { "@type": "AdministrativeArea", name: "Zona Norte Buenos Aires" },
      { "@type": "AdministrativeArea", name: "Zona Sur Buenos Aires" },
      { "@type": "AdministrativeArea", name: "Zona Oeste Buenos Aires" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Perforación y Corte",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Perforaciones en Hormigón Armado",
            description:
              "Perforaciones de precisión para ductos, pases y refuerzos estructurales con tecnología diamantada.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sellado Técnico de Juntas de Dilatación",
            description:
              "Tratamiento elástico para absorber movimientos termo-mecánicos y evitar desgranamiento.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bocas de Ataque",
            description:
              "Perforación precisa, ejecución de recuadro y colocación de ladrillos para cumplir exigencias reglamentarias.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Anclajes Químicos y Mecánicos",
            description:
              "Instalaciones precisas de anclajes garantizando máxima estabilidad y durabilidad estructural.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Operación Técnica y Mano de Obra",
            description:
              "Operadores calificados para proyectos con maquinaria propia del cliente.",
          },
        },
      ],
    },
    foundingDate: "2018",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
    sameAs: ["https://pasoluciones.com.ar"],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
      url: "https://pasoluciones.com.ar/logo.svg",
      width: 200,
      height: 60,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+5491130144852",
      contactType: "customer service",
      availableLanguage: "Spanish",
    },
  };
}
