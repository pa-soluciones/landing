import type { CSSProperties } from "react";

type Partner = { name: string; src: string; ratio: number; url?: string };

const PARTNERS: Partner[] = [
  { name: "AVN Nordelta", src: "/partners/avn-nordelta.svg", ratio: 174.1 / 45.4, url: "https://www.avnordelta.com/" },
  { name: "Tosud", src: "/partners/tosud.svg", ratio: 193 / 41, url: "https://tosudconstructora.com.ar/" },
];

const GROUP = Array.from({ length: Math.max(2, Math.ceil(10 / PARTNERS.length)) }, () => PARTNERS).flat();

function Logo({ partner, clone }: { partner: Partner; clone?: boolean }) {
  const style = {
    "--logo": `url(${partner.src})`,
    "--ratio": String(partner.ratio),
  } as CSSProperties;

  if (!partner.url) {
    return <span className="partner-logo" style={style} role="img" aria-label={partner.name} />;
  }

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="partner-logo"
      style={style}
      aria-label={partner.name}
      tabIndex={clone ? -1 : undefined}
    />
  );
}

function Group({ clone }: { clone?: boolean }) {
  return (
    <div className="partners-group" aria-hidden={clone}>
      {GROUP.map((p, i) => (
        <Logo key={`${p.src}-${i}`} partner={p} clone={clone} />
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <section id="clientes" className="partners-section">
      <div className="container text-center">
        <span className="section-top-title fade-up animate-on-scroll">Confían en nosotros</span>
        <h2 className="section-title fade-up animate-on-scroll delay-100">Clientes</h2>
        <p className="partners-desc fade-up animate-on-scroll delay-200">
          <strong>Empresas y estudios</strong> que nos eligieron para sus obras en{" "}
          <strong>CABA y Gran Buenos Aires</strong>.
        </p>
      </div>

      <div className="partners-marquee">
        <div
          className="partners-track"
          style={{ "--items": String(GROUP.length) } as CSSProperties}
        >
          <Group />
          <Group clone />
        </div>
      </div>
    </section>
  );
}
