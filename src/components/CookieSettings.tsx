"use client";

export default function CookieSettings() {
  function reset() {
    try {
      localStorage.removeItem("pas-cookie-consent");
    } catch {}
    location.reload();
  }

  return (
    <button className="btn-cookie btn-cookie-accept" onClick={reset}>
      Cambiar mis preferencias de cookies
    </button>
  );
}
