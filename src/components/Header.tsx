"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header id="main-header">
      <nav className="container">
        <a href="#inicio" className="logo-container" id="nav-logo-container" aria-label="Ir al inicio">
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
        <a href="#contacto" className="btn-cta bg-primary">
          Contáctanos
        </a>
      </nav>
    </header>
  );
}
