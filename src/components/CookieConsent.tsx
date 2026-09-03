"use client";
import { useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";

const STORAGE_KEY = "pas-cookie-consent";
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function getConsent(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function setConsent(value: "accepted" | "rejected") {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {}
  listeners.forEach((onChange) => onChange());
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getConsent, () => "pending");

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            id="gtm-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PBZCGJDV');`,
            }}
          />
          <Script
            id="hotjar-init"
            strategy="lazyOnload"
            src="https://t.contentsquare.net/uxa/016fd7df4d13e.js"
          />
        </>
      )}

      {consent === null && (
        <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
          <p className="cookie-banner-text">
            Usamos cookies propias y de terceros para medir el uso del sitio y mejorar nuestros
            servicios. Podés aceptarlas o rechazarlas. Más información en la{" "}
            <Link href="/politica-de-privacidad">Política de Privacidad</Link>.
          </p>
          <div className="cookie-banner-actions">
            <button className="btn-cookie btn-cookie-reject" onClick={() => setConsent("rejected")}>
              Rechazar
            </button>
            <button className="btn-cookie btn-cookie-accept" onClick={() => setConsent("accepted")}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
