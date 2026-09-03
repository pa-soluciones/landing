"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const heroEl = document.getElementById("inicio");
    const headerEl = document.getElementById("main-header");
    if (!heroEl) return;
    const isMobile = () => window.innerWidth < 768;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!isMobile()) return;
        const show = !entry.isIntersecting;
        headerEl?.classList.toggle("visible", show);
        if (!show) setIsOpen(false);
      },
      { threshold: 0.1 }
    );

    obs.observe(heroEl);
    return () => obs.disconnect();
  }, []);

  return (
    <header id="main-header">
      <nav className="container">
        <a href="#inicio" className="logo-container" id="nav-logo-container" aria-label="Ir al inicio" onClick={close}>
          <Image
            src="/logo.svg"
            alt="PAS Piedra Angular Solutions"
            width={100}
            height={40}
            priority
          />
        </a>
        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#nosotros">Nosotros</a>
        </div>
        <button
          className={`mobile-menu-btn${isOpen ? " is-open" : ""}`}
          onClick={() => setIsOpen(v => !v)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span className="hamburger-icons">
            <Menu size={26} />
            <X size={26} />
          </span>
        </button>
        <a href="#contacto" className="btn-cta bg-primary header-cta" onClick={close}>
          Contáctanos
        </a>
      </nav>

      <div className={`mobile-menu${isOpen ? " open" : ""}`}>
        <a href="#inicio" onClick={close}>Inicio</a>
        <a href="#servicios" onClick={close}>Servicios</a>
        <a href="#proyectos" onClick={close}>Proyectos</a>
        <a href="#nosotros" onClick={close}>Nosotros</a>
        <a href="#contacto" className="btn-cta bg-primary" onClick={close}>Contáctanos</a>
      </div>
    </header>
  );
}
