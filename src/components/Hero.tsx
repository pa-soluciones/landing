import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-background" />
      <div className="hero-content container">
        <div className="hero-logo-wrapper" id="hero-logo-wrapper">
          <video
            src="/animated-logo.webm"
            className="pas-logo"
            id="animated-logo"
            autoPlay
            loop
            muted
            playsInline
            poster="/logo.svg"
            preload="none"
            aria-label="PAS Piedra Angular Solutions logo animado"
          />
        </div>

        <h1 className="hero-title">
          Soluciones que <span className="text-primary">sostienen</span> estructuras
        </h1>
        <p className="hero-subtitle">
          Especialistas en cortes y perforaciones de hormigón armado mediante tecnología diamantada
          refrigerada por agua.
        </p>

        <div className="hero-buttons">
          <a href="#contacto" className="btn-cta bg-primary">
            Contactanos
          </a>
          <a href="#servicios" className="btn-outline">
            Ver Servicios
          </a>
        </div>
      </div>

      <a href="#servicios" className="scroll-indicator" aria-label="Ir a servicios">
        <ChevronDown />
        <ChevronDown />
      </a>
    </section>
  );
}
