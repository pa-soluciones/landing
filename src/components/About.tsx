import Image from "next/image";

export default function About() {
  return (
    <section id="nosotros" className="about-section">
      <div className="container grids-2">
        <div className="about-image fade-left animate-on-scroll">
          <div className="image-accent" />
          <Image
            src="/about_us_img.webp"
            alt="Equipo PAS Piedra Angular Solutions trabajando en obra"
            className="about-main-img"
            width={600}
            height={600}
            loading="lazy"
          />
          <Image
            src="/logo-alt.svg"
            alt="PAS Logo"
            className="about-logo-overlay"
            width={250}
            height={137}
            loading="lazy"
          />
          <div className="experience-badge">
            <span className="number">+6</span>
            <span className="text">
              Años de
              <br />
              Experiencia
            </span>
          </div>
        </div>
        <div className="about-content">
          <h2 className="section-title fade-up animate-on-scroll delay-100">Nosotros</h2>
          <p className="about-slogan fade-up animate-on-scroll delay-150">
            Soluciones que <span className="text-primary">sostienen</span> estructuras
          </p>
          <p className="fade-up animate-on-scroll delay-200">
            En PAS (Piedra Angular Solutions) hacemos perforaciones, cortes, anclajes, sellado de
            juntas y bocas de ataque en hormigón armado.
          </p>
          <p className="fade-up animate-on-scroll delay-300">
            Entendemos que la base de toda construcción es la confianza. Por eso definimos el método
            de cada trabajo en una visita técnica previa y trabajamos con tecnología diamantada
            refrigerada por agua, en CABA y Gran Buenos Aires.
          </p>
          <div className="features-grid fade-up animate-on-scroll delay-400">
            <div className="feature-item">
              <span>Visita técnica sin cargo</span>
            </div>
            <div className="feature-item">
              <span>Presupuesto sin compromiso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
