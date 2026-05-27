"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Smartphone, MapPin, Copy, Check } from "lucide-react";

const WHATSAPP_NUMBER = "5491130144852";

const SERVICIOS = [
  "Perforaciones H° A°",
  "Sellado de Juntas",
  "Boca de Ataque",
  "Anclajes Químico y/o Mecánico",
  "Flexibilidad Operativa",
  "Consultoría General",
];

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("");
  const [consulta, setConsulta] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  function copyToClipboard(id: string, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const greeting = `¡Hola! Mi nombre es ${nombre}.`;
    const body = `*Servicio de interés:* ${servicio}\n*Consulta:* ${consulta}`;
    const message = encodeURIComponent(`${greeting}\n${body}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  }

  return (
    <section id="contacto" className="contact-section">
      <div className="container grids-2">
        <div className="contact-info fade-left animate-on-scroll">
          <span className="section-top-title">Hablemos</span>
          <h2 className="section-title">Contacto</h2>
          <p className="contact-desc">
            ¿Tenés un proyecto en mente o necesitás asesoramiento técnico? Completá el formulario y
            nuestro equipo se comunicará por WhatsApp a la brevedad.
          </p>
          <div className="contact-details">
            <button
              className="contact-item"
              onClick={() => copyToClipboard("email", "ventas@pasoluciones.com.ar")}
              aria-label="Copiar email"
            >
              <div className="icon-bubble">
                <Mail color="var(--primary)" size={20} />
              </div>
              <div className="contact-item-text">
                <span className="label">Email</span>
                <span className="value">ventas@pasoluciones.com.ar</span>
              </div>
              <span className={`copy-indicator${copiedId === "email" ? " copied" : ""}`}>
                {copiedId === "email" ? <Check size={15} /> : <Copy size={15} />}
              </span>
            </button>
            <button
              className="contact-item"
              onClick={() => copyToClipboard("phone", "+54 9 11 3014-4852")}
              aria-label="Copiar teléfono"
            >
              <div className="icon-bubble">
                <Smartphone color="var(--primary)" size={20} />
              </div>
              <div className="contact-item-text">
                <span className="label">Teléfono / WhatsApp</span>
                <span className="value">+54 9 11 3014-4852</span>
              </div>
              <span className={`copy-indicator${copiedId === "phone" ? " copied" : ""}`}>
                {copiedId === "phone" ? <Check size={15} /> : <Copy size={15} />}
              </span>
            </button>
            <button
              className="contact-item"
              onClick={() => copyToClipboard("location", "Provincia de Buenos Aires y CABA")}
              aria-label="Copiar ubicación"
            >
              <div className="icon-bubble">
                <MapPin color="var(--primary)" size={20} />
              </div>
              <div className="contact-item-text">
                <span className="label">Ubicación principal</span>
                <span className="value">Provincia de Buenos Aires y CABA</span>
              </div>
              <span className={`copy-indicator${copiedId === "location" ? " copied" : ""}`}>
                {copiedId === "location" ? <Check size={15} /> : <Copy size={15} />}
              </span>
            </button>
          </div>
        </div>

        <div className="contact-form-container fade-up animate-on-scroll delay-200">
          <form id="whatsapp-form" className="whatsapp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ej: Juan Pérez"
                maxLength={50}
                required
                value={nombre}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
              />
              <div className="char-counter">
                <span>{nombre.length}</span>/50
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="servicio">Servicio de Interés</label>
              <select
                id="servicio"
                name="servicio"
                required
                value={servicio}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setServicio(e.target.value)}
              >
                <option value="" disabled>
                  Seleccione un servicio
                </option>
                {SERVICIOS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="consulta">Consulta</label>
              <textarea
                id="consulta"
                name="consulta"
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                maxLength={500}
                required
                value={consulta}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setConsulta(e.target.value)}
              />
              <div className="char-counter">
                <span>{consulta.length}</span>/500
              </div>
            </div>
            <button type="submit" className="btn-submit bg-primary">
              Enviar Mensaje por WhatsApp
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
