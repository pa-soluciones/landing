"use client";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "clientes", label: "Clientes" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
  { id: "faq", label: "FAQ" },
  { id: "cierre", label: "PAS" },
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
