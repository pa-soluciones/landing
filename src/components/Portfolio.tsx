"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";

const images = [
  { src: "/work-images/perforaciones-anclajes-mecanicos.webp", alt: "Obra de anclajes mecánicos" },
  { src: "/work-images/junta-de-dilatacion-2.webp", alt: "Sellado de junta de dilatación" },
  { src: "/work-images/abertura-junta.webp", alt: "Apertura de junta estructural" },
  { src: "/work-images/abertura-junta-2.webp", alt: "Apertura de junta estructural" },
  { src: "/work-images/corte-disco-diamantado.webp", alt: "Corte con disco diamantado" },
  { src: "/work-images/plenos.webp", alt: "Perforaciones para plenos técnicos" },
  { src: "/work-images/herramientas.webp", alt: "Herramientas" },
  { src: "/work-images/perforacion1.webp", alt: "Perforación en Hormigon Armado" },
  { src: "/work-images/perforacion2.webp", alt: "Perforación en Hormigon Armado" },
  { src: "/work-images/perforacion3.webp", alt: "Perforación en Hormigon Armado" },
  { src: "/work-images/perforacion4.webp", alt: "Perforación en Hormigon Armado" },
  { src: "/work-images/perforacion5.webp", alt: "Perforación en Hormigon Armado" },
  { src: "/work-images/perforaciones.webp", alt: "Perforaciones en Hormigon Armado" },
];

const SCALE = 2.5;

// Pan offset (in pre-scale units) that keeps a zoomed edge from leaving the screen.
function clampPan(t: number, start: number, size: number, origin: number, view: number) {
  const edge = start + origin * (1 - SCALE); // near edge of the zoomed image when t = 0
  const a = (view - size * SCALE - edge) / SCALE;
  const b = -edge / SCALE;
  return Math.min(Math.max(a, b), Math.max(Math.min(a, b), t));
}

export default function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, startTx: 0, startTy: 0, moved: false });
  const touchRef = useRef({ startX: 0, startY: 0, startTx: 0, startTy: 0, moved: false });
  const baseRectRef = useRef<DOMRect | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  function openModal(src: string, alt: string) {
    openerRef.current = document.activeElement as HTMLElement | null;
    setModal({ src, alt });
    setZoomed(false);
    setTranslate({ x: 0, y: 0 });
    setOrigin({ x: 50, y: 50 });
  }

  function closeModal() {
    setModal(null);
    setZoomed(false);
    setTranslate({ x: 0, y: 0 });
  }

  useEffect(() => {
    if (!modal) return;
    closeBtnRef.current?.focus();
    const opener = openerRef.current;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      // The close button is the only control in the dialog, so Tab stays on it.
      if (e.key === "Tab") {
        e.preventDefault();
        closeBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [modal]);

  function handleImageClick(e: React.MouseEvent<HTMLImageElement>) {
    e.stopPropagation();
    if (dragRef.current.moved) return;
    toggleZoom(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect());
  }

  function handleImageTap(e: React.TouchEvent<HTMLImageElement>) {
    e.preventDefault(); // blocks the synthetic click that fires after touchend
    // A drag ends here too: it pans (or swipes to close), it must not toggle the zoom.
    if (touchRef.current.moved) return;
    e.stopPropagation();
    if (e.changedTouches.length !== 1) return;
    const t = e.changedTouches[0];
    toggleZoom(t.clientX, t.clientY, e.currentTarget.getBoundingClientRect());
  }

  function toggleZoom(clientX: number, clientY: number, rect: DOMRect) {
    if (zoomed) {
      setZoomed(false);
      setTranslate({ x: 0, y: 0 });
      return;
    }
    baseRectRef.current = rect;
    const ox = ((clientX - rect.left) / rect.width) * 100;
    const oy = ((clientY - rect.top) / rect.height) * 100;
    setOrigin({ x: ox, y: oy });
    setTranslate({ x: 0, y: 0 });
    setZoomed(true);
  }

  function handleMouseDown(e: React.MouseEvent) {
    if (!zoomed) return;
    e.preventDefault();
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startTx: translate.x,
      startTy: translate.y,
      moved: false,
    };
    setIsDragging(true);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDragging) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragRef.current.moved = true;
    pan(dragRef.current.startTx + dx / SCALE, dragRef.current.startTy + dy / SCALE);
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleTouchStart(e: React.TouchEvent) {
    const t = e.touches[0];
    touchRef.current = { startX: t.clientX, startY: t.clientY, startTx: translate.x, startTy: translate.y, moved: false };
  }

  function handleTouchMove(e: React.TouchEvent) {
    const t = e.touches[0];
    const dx = t.clientX - touchRef.current.startX;
    const dy = t.clientY - touchRef.current.startY;
    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) touchRef.current.moved = true;
    if (!zoomed) return;
    e.stopPropagation();
    pan(touchRef.current.startTx + dx / SCALE, touchRef.current.startTy + dy / SCALE);
  }

  // Keeps the zoomed image covering the screen instead of sliding off into the black.
  function pan(tx: number, ty: number) {
    const r = baseRectRef.current;
    if (!r) return setTranslate({ x: tx, y: ty });
    setTranslate({
      x: clampPan(tx, r.left, r.width, (origin.x / 100) * r.width, window.innerWidth),
      y: clampPan(ty, r.top, r.height, (origin.y / 100) * r.height, window.innerHeight),
    });
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (zoomed) return;
    const t = e.changedTouches[0];
    const dx = Math.abs(t.clientX - touchRef.current.startX);
    const dy = t.clientY - touchRef.current.startY;
    if (dx > 10) return; // horizontal swipe — ignore
    if (dy > 80) closeModal();
  }

  return (
    <section id="proyectos" className="portfolio-section bg-dark text-light">
      <div className="container text-center">
        <span className="section-top-title fade-up animate-on-scroll">Nuestros Proyectos</span>
        <h2 className="section-title fade-up animate-on-scroll delay-100">Galería de Imágenes</h2>

        <div className="portfolio-carousel-container fade-up animate-on-scroll delay-200">
          <div className="carousel-track-container" ref={emblaRef}>
            <div style={{ display: "flex" }}>
              {images.map((img) => (
                <button
                  type="button"
                  key={img.src}
                  className="portfolio-item"
                  onClick={() => openModal(img.src, img.alt)}
                  aria-label={`Ampliar imagen: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={533}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div className="overlay" aria-hidden="true">
                    <span>Ver imagen</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="carousel-nav">
            <button className="carousel-btn" onClick={scrollPrev} aria-label="Imagen anterior">
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-btn" onClick={scrollNext} aria-label="Imagen siguiente">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <div
          className="image-modal show"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada: ${modal.alt}`}
        >
          <button ref={closeBtnRef} className="close-modal" onClick={closeModal} aria-label="Cerrar imagen">
            &times;
          </button>
          <p className="modal-hint" aria-hidden="true">
            <span className="hint-touch">
              {zoomed ? "Arrastrá para moverte · tocá para alejar" : "Tocá la imagen para ampliar"}
            </span>
            <span className="hint-mouse">
              {zoomed ? "Arrastrá para moverte · hacé clic para alejar" : "Hacé clic en la imagen para ampliar"}
            </span>
          </p>
          <div
            className="modal-content-wrapper"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={modal.src}
              alt={modal.alt}
              id="modal-image"
              className={zoomed ? "zoomed" : ""}
              onClick={handleImageClick}
              onTouchEnd={handleImageTap}
              onMouseDown={handleMouseDown}
              style={{
                transformOrigin: `${origin.x}% ${origin.y}%`,
                transform: zoomed
                  ? `scale(${SCALE}) translate(${translate.x}px, ${translate.y}px)`
                  : "scale(1)",
                cursor: zoomed ? (isDragging ? "grabbing" : "grab") : "zoom-in",
                transition: isDragging ? "none" : "transform 0.3s ease",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
