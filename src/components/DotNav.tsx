"use client";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "contacto", label: "Contacto" },
  { id: "proyectos", label: "Proyectos" },
  { id: "nosotros", label: "Nosotros" },
  { id: "faq", label: "FAQ" },
];

export default function DotNav() {
  return (
    <nav className="dot-nav" id="dot-nav" aria-label="Navegación por secciones">
      <ul>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`dot${i === 0 ? " active" : ""}`}
              data-index={i}
              aria-label={s.label}
            />
          </li>
        ))}
      </ul>
      <div className="dot-indicator" id="dot-indicator" />
    </nav>
  );
}
