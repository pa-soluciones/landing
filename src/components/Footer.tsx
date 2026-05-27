import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container text-center">
        <div className="footer-logo">
          <Image
            src="/logo-alt.svg"
            alt="PAS Piedra Angular Solutions"
            className="footer-pas-img"
            width={200}
            height={60}
            loading="lazy"
          />
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} PAS Piedra Angular Solutions. Todos los derechos reservados.
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
    </footer>
  );
}
