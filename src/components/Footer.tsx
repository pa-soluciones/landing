import Link from "next/link";
import { CORTES_PATH } from "@/lib/schema";

const SERVICIOS: { name: string; href?: string }[] = [
  { name: "Perforaciones en hormigón armado" },
  { name: "Cortes en hormigón armado", href: CORTES_PATH },
  { name: "Sellado técnico de juntas de dilatación" },
  { name: "Bocas de ataque" },
  { name: "Anclajes químicos y mecánicos" },
  { name: "Operación técnica y mano de obra" },
];

export default function Footer() {
  return (
    <footer id="cierre" className="footer-section bg-dark text-light">
      <div className="container footer-inner">
        <h2 className="footer-statement">
          Soluciones que <em>sostienen</em> estructuras
        </h2>

        <div className="footer-grid">
          <div className="footer-col">
            <h3>Servicios</h3>
            <ul>
              {SERVICIOS.map((s) => (
                <li key={s.name}>{s.href ? <Link href={s.href}>{s.name}</Link> : s.name}</li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contacto</h3>
            <ul>
              <li>
                <a href="mailto:ventas@pasoluciones.com.ar" className="footer-contact-item">
                  <span className="label">Email</span>
                  <span className="value">ventas@pasoluciones.com.ar</span>
                </a>
              </li>
              <li>
                <a href="tel:+5491130144852" className="footer-contact-item">
                  <span className="label">Teléfono / WhatsApp</span>
                  <span className="value">+54 9 11 3014-4852</span>
                </a>
              </li>
              <li>
                <span className="footer-contact-item">
                  <span className="label">Zona de trabajo</span>
                  <span className="value">CABA y Gran Buenos Aires</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Legales</h3>
            <ul>
              <li>
                <Link href="/politica-de-privacidad">Política de Privacidad</Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones">Términos y Condiciones</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} PAS Piedra Angular Solutions. Todos los derechos
            reservados.
          </p>
          <a
            href="https://nosterlabs.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="powered-by-link"
          >
            <span className="powered-by-text">Powered by NosterLabs</span>
            <span className="powered-by-arrow">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
