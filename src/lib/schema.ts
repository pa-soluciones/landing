export const SITE_URL = "https://www.pasoluciones.com.ar";
export const CORTES_PATH = "/cortes-de-hormigon-armado";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: "PAS Piedra Angular Solutions",
    alternateName: ["PAS", "Piedra Angular Solutions", "Piedra Angular Soluciones"],
    legalName: "MENA BRACA, LUIS DANIEL",
    description:
      "Especialistas en perforaciones, cortes y anclajes en hormigón armado en Buenos Aires y CABA. Tecnología diamantada refrigerada por agua.",
    url: SITE_URL,
    telephone: "+5491130144852",
    email: "ventas@pasoluciones.com.ar",
    image: `${SITE_URL}/opengraph.png`,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/logo.svg`,
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
            "@id": `${SITE_URL}/#service-perforaciones`,
            name: "Perforaciones en Hormigón Armado",
            description:
              "Perforaciones de precisión para ductos, pases y refuerzos estructurales con tecnología diamantada refrigerada por agua. Una perforación estándar de 4\" a 20 cm tarda entre 15 y 40 minutos.",
            provider: { "@id": `${SITE_URL}/#business` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: cortesService(),
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE_URL}/#service-juntas`,
            name: "Sellado Técnico de Juntas de Dilatación",
            description:
              "Tratamiento elástico para absorber movimientos termo-mecánicos y evitar desgranamiento y filtraciones.",
            provider: { "@id": `${SITE_URL}/#business` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE_URL}/#service-bocas`,
            name: "Bocas de Ataque",
            description:
              "Servicio integral: perforación precisa, ejecución de recuadro y colocación de ladrillos según exigencias reglamentarias del Código de Edificación GCBA.",
            provider: { "@id": `${SITE_URL}/#business` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE_URL}/#service-anclajes`,
            name: "Anclajes Químicos y Mecánicos",
            description:
              "Instalaciones precisas de anclajes garantizando máxima estabilidad y durabilidad estructural.",
            provider: { "@id": `${SITE_URL}/#business` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE_URL}/#service-operacion`,
            name: "Operación Técnica y Mano de Obra",
            description:
              "Operadores calificados para proyectos con maquinaria propia del cliente. Adaptación a cronogramas de obra.",
            provider: { "@id": `${SITE_URL}/#business` },
          },
        },
      ],
    },
    foundingDate: "2026",
    sameAs: [],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[], path = "/") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}${path}#faq`,
    url: `${SITE_URL}${path}#faq`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
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
    "@id": `${SITE_URL}/#organization`,
    name: "PAS Piedra Angular Solutions",
    alternateName: ["PAS", "Piedra Angular Solutions", "Piedra Angular Soluciones"],
    legalName: "MENA BRACA, LUIS DANIEL",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/logo.svg`,
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
    "@id": `${SITE_URL}/#website`,
    name: "PAS Piedra Angular Solutions",
    url: SITE_URL,
    inLanguage: "es-AR",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

function cortesService() {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}${CORTES_PATH}#service`,
    name: "Cortes en Hormigón Armado",
    serviceType: "Corte de hormigón armado",
    url: `${SITE_URL}${CORTES_PATH}`,
    description:
      "Cortes con disco e hilo diamantado en losas, muros, vigas y pavimentos: apertura de vanos, pases rectangulares, corte de juntas y demolición controlada. Tecnología diamantada refrigerada por agua en CABA y Gran Buenos Aires.",
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: ["Ciudad Autónoma de Buenos Aires", "Gran Buenos Aires"],
  };
}

export function cortesServiceSchema() {
  return { "@context": "https://schema.org", ...cortesService() };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
