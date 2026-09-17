import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Crosshair, Droplets, Layers, ShieldCheck } from "lucide-react";
import ClientInit from "@/components/ClientInit";
import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import Footer from "@/components/Footer";
import {
  CORTES_PATH,
  breadcrumbSchema,
  cortesServiceSchema,
  faqSchema,
} from "@/lib/schema";

const TITLE = "Cortes en Hormigón Armado en Buenos Aires";
const DESCRIPTION =
  "Cortes con disco e hilo diamantado en losas, muros, vigas y pavimentos. Apertura de vanos, pases rectangulares y demolición controlada en CABA y GBA. Visita técnica sin cargo.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CORTES_PATH },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: CORTES_PATH,
    siteName: "PAS Piedra Angular Solutions",
    title: `${TITLE} | PAS`,
    description: DESCRIPTION,
    images: [{ url: "/opengraph.png", width: 1200, height: 630, alt: "PAS Piedra Angular Solutions" }],
  },
};

const TIPOS = [
  {
    title: "Corte con disco en losas y muros",
    text: "Cortes rectos en losas, tabiques y muros de hormigón armado con sierra de disco diamantado.",
  },
  {
    title: "Corte con hilo diamantado",
    text: "Para piezas de gran espesor o geometría compleja, como vigas, columnas y fundaciones, donde el disco no alcanza.",
  },
  {
    title: "Apertura de vanos",
    text: "Aberturas para puertas, ventanas, escaleras, ascensores y montacargas en estructuras existentes.",
  },
  {
    title: "Pases rectangulares",
    text: "Pases a medida en losas y muros para ductos de aire acondicionado, plenos e instalaciones.",
  },
  {
    title: "Pavimentos y juntas",
    text: "Corte de pavimentos de hormigón para zanjas y reparaciones, y aserrado de juntas en pisos.",
  },
  {
    title: "Demolición controlada",
    text: "Retiro de sectores de hormigón por corte, con menos ruido y vibración que la demolición con martillo.",
  },
];

const VENTAJAS = [
  {
    icon: Crosshair,
    title: "Precisión",
    text: "Bordes limpios y medidas exactas, listos para la etapa siguiente de la obra.",
  },
  {
    icon: ShieldCheck,
    title: "Sin vibración excesiva",
    text: "El corte no transmite impactos a la estructura que queda en pie.",
  },
  {
    icon: Layers,
    title: "Corta hormigón y armadura",
    text: "La herramienta diamantada corta el hormigón y los hierros en la misma pasada.",
  },
  {
    icon: Droplets,
    title: "Refrigerado por agua",
    text: "El agua enfría la herramienta y retiene buena parte del polvo del corte.",
  },
];

const PASOS = [
  {
    title: "Nos contás el trabajo",
    text: "Por WhatsApp o por el formulario, con fotos o planos si los tenés.",
  },
  {
    title: "Visita técnica sin cargo",
    text: "Relevamos la estructura y definimos el método de corte más adecuado.",
  },
  {
    title: "Presupuesto",
    text: "Te enviamos la cotización sin compromiso.",
  },
  {
    title: "Ejecución",
    text: "Cortamos con equipos diamantados y nos adaptamos al cronograma de tu obra.",
  },
];

const FAQS = [
  {
    question: "¿Qué diferencia hay entre el corte con disco y con hilo diamantado?",
    answer:
      "El disco se usa para cortes rectos en losas, muros y pisos. El hilo diamantado se usa cuando el espesor o la forma de la pieza superan lo que alcanza el disco, como en vigas, columnas o fundaciones. En la visita técnica definimos el método según la estructura.",
  },
  {
    question: "¿Se puede abrir un vano en un muro o losa de hormigón armado existente?",
    answer:
      "Sí. Hacemos aperturas para puertas, ventanas, escaleras y ascensores en estructuras existentes. Antes de cortar, la intervención tiene que estar evaluada por el profesional responsable de la estructura, que define si hacen falta refuerzos.",
  },
  {
    question: "¿El corte daña la estructura?",
    answer:
      "El corte con herramientas diamantadas no transmite los impactos ni la vibración de un martillo demoledor, por lo que no afecta al hormigón que rodea el corte.",
  },
  {
    question: "¿El corte genera mucho polvo o ruido?",
    answer:
      "El agua que refrigera el disco o el hilo retiene buena parte del polvo. El ruido es menor que el de la demolición con martillo, lo que facilita trabajar en edificios habitados u oficinas en funcionamiento.",
  },
  {
    question: "¿En qué zonas trabajan y cómo pido un presupuesto?",
    answer:
      "Trabajamos en CABA y Gran Buenos Aires. Escribinos por WhatsApp con una descripción y fotos del trabajo: coordinamos una visita técnica sin cargo y te enviamos el presupuesto sin compromiso.",
  },
];

const schemas = [
  cortesServiceSchema(),
  breadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Cortes en hormigón armado", path: CORTES_PATH },
  ]),
  faqSchema(FAQS, CORTES_PATH),
];

export default function CortesPage() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <header className="legal-header sp-header">
        <div className="container">
          <Link href="/" aria-label="Volver al inicio">
            <Image src="/logo-alt.svg" alt="PAS Piedra Angular Solutions" width={200} height={110} priority />
          </Link>
          <a href="#contacto" className="btn-cta bg-primary sp-header-cta">
            Cotizar
          </a>
        </div>
      </header>

      <main className="sp-main">
        <section className="sp-hero bg-dark text-light">
          <div className="container sp-hero-grid">
            <div>
              <nav aria-label="Ruta de navegación" className="sp-breadcrumb sp-rise">
                <Link href="/">Inicio</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Cortes en hormigón armado</span>
              </nav>
              <span className="section-top-title sp-rise">Servicio</span>
              <h1 className="section-title sp-rise sp-rise-1">{TITLE}</h1>
              <p className="sp-lead sp-rise sp-rise-2">
                Cortamos losas, muros, vigas y pavimentos con disco e hilo diamantado refrigerado
                por agua. Aperturas precisas y bordes limpios, sin vibración excesiva sobre la
                estructura.
              </p>
              <div className="sp-actions sp-rise sp-rise-3">
                <a href="#contacto" className="btn-cta bg-primary">
                  Cotizar por WhatsApp
                </a>
                <a href="#tipos" className="btn-outline">
                  Ver tipos de corte
                </a>
              </div>
              <ul className="sp-trust sp-rise sp-rise-4">
                <li>
                  <Check aria-hidden="true" /> Visita técnica sin cargo
                </li>
                <li>
                  <Check aria-hidden="true" /> Presupuesto sin compromiso
                </li>
                <li>
                  <Check aria-hidden="true" /> Equipo con +6 años de experiencia técnica
                </li>
              </ul>
            </div>
            <div className="sp-hero-media sp-rise sp-rise-2">
              <Image
                src="/work-images/corte-disco-diamantado.webp"
                alt="Corte de hormigón armado con disco diamantado"
                width={963}
                height={1280}
                sizes="(min-width: 1024px) 480px, 100vw"
                priority
              />
            </div>
          </div>
        </section>

        <section id="tipos" className="sp-section">
          <div className="container">
            <span className="section-top-title fade-up animate-on-scroll">Qué cortamos</span>
            <h2 className="section-title fade-up animate-on-scroll delay-100">Tipos de corte</h2>
            <ul className="sp-types">
              {TIPOS.map((tipo, i) => (
                <li key={tipo.title} className={`sp-type fade-up animate-on-scroll delay-${(i % 3) + 1}00`}>
                  <span className="sp-type-index">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{tipo.title}</h3>
                  <p>{tipo.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sp-section bg-dark text-light">
          <div className="container">
            <span className="section-top-title fade-up animate-on-scroll">Tecnología diamantada</span>
            <h2 className="section-title fade-up animate-on-scroll delay-100">Por qué cortar con diamante</h2>
            <ul className="sp-benefits">
              {VENTAJAS.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className={`fade-up animate-on-scroll delay-${i + 1}00`}>
                  <Icon className="sp-benefit-icon" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sp-section">
          <div className="container">
            <span className="section-top-title fade-up animate-on-scroll">Cómo trabajamos</span>
            <h2 className="section-title fade-up animate-on-scroll delay-100">De la consulta al corte</h2>
            <ol className="sp-steps">
              {PASOS.map((paso, i) => (
                <li key={paso.title} className={`fade-up animate-on-scroll delay-${i + 1}00`}>
                  <h3>{paso.title}</h3>
                  <p>{paso.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ContactForm defaultServicio="Cortes H° A°" />

        <section id="faq" className="sp-section sp-faq-section">
          <div className="container text-center">
            <span className="section-top-title fade-up animate-on-scroll">Preguntas frecuentes</span>
            <h2 className="section-title fade-up animate-on-scroll delay-100">Sobre los cortes</h2>
            <div className="fade-up animate-on-scroll delay-200">
              <FaqList items={FAQS} />
            </div>
          </div>
        </section>

        <section className="sp-cta">
          <div className="container">
            <h2 className="fade-up animate-on-scroll">¿Tenés que cortar hormigón armado?</h2>
            <p className="fade-up animate-on-scroll delay-100">Contanos qué necesitás y coordinamos una visita técnica sin cargo.</p>
            <div className="sp-actions fade-up animate-on-scroll delay-200">
              <a href="#contacto" className="btn-cta sp-btn-dark">
                Cotizar por WhatsApp
              </a>
            </div>
            <Link href="/#servicios" className="sp-cta-link">
              Ver todos los servicios
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ClientInit />
    </>
  );
}
