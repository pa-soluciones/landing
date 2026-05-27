import Image from "next/image";
import { ShieldCheck, HardHat } from "lucide-react";

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
            height={700}
            loading="lazy"
          />
          <Image
            src="/logo-alt.svg"
            alt="PAS Logo"
            className="about-logo-overlay"
            width={250}
            height={100}
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
          <span className="section-top-title fade-up animate-on-scroll">Trayectoria y Solidez</span>
          <h2 className="section-title fade-up animate-on-scroll delay-100">Nosotros</h2>
          <p className="fade-up animate-on-scroll delay-200">
            En PAS (Piedra Angular Solutions) nos dedicamos a brindar soporte estructural de alta
            calidad, garantizando la solidez de cada proyecto mediante técnicas avanzadas y
            profesionalismo.
          </p>
          <p className="fade-up animate-on-scroll delay-300">
            Entendemos que la base de toda construcción es la confianza. Por eso, nuestro equipo de
            especialistas trabaja bajo los más estrictos estándares de seguridad y eficiencia
            operativa, adaptándonos a los desafíos más complejos de la arquitectura moderna en todo
            Buenos Aires y Ciudad Capital.
          </p>
          <div className="features-grid fade-up animate-on-scroll delay-400">
            <div className="feature-item">
              <ShieldCheck color="var(--primary)" size={24} />
              <span>Calidad Garantizada</span>
            </div>
            <div className="feature-item">
              <HardHat color="var(--primary)" size={24} />
              <span>Técnicos Expertos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
