"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useRef } from "react";

const images = [
  { src: "/work-images/perforacion.webp", alt: "Perforación de hormigón armado en obra" },
  { src: "/work-images/perforaciones-anclajes-mecanicos.webp", alt: "Obra de anclajes mecánicos" },
  { src: "/work-images/perforacion-2-metros.webp", alt: "Perforación de gran profundidad" },
  { src: "/work-images/junta-de-dilatacion-2.webp", alt: "Sellado de junta de dilatación" },
  { src: "/work-images/abertura-junta.webp", alt: "Apertura de junta estructural" },
  { src: "/work-images/corte-disco-diamantado.webp", alt: "Corte con disco diamantado" },
  { src: "/work-images/plenos.webp", alt: "Perforaciones para plenos técnicos" },
  { src: "/work-images/perforacion-3.webp", alt: "Perforación estructural" },
];

const SCALE = 2.5;

export default function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, startTx: 0, startTy: 0, moved: false });
  const touchRef = useRef({ startX: 0, startY: 0, startTx: 0, startTy: 0 });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  function openModal(src: string) {
    setModalSrc(src);
    setZoomed(false);
    setTranslate({ x: 0, y: 0 });
    setOrigin({ x: 50, y: 50 });
  }

  function closeModal() {
    setModalSrc(null);
    setZoomed(false);
    setTranslate({ x: 0, y: 0 });
  }

  function handleImageClick(e: React.MouseEvent<HTMLImageElement>) {
    e.stopPropagation();
    if (dragRef.current.moved) return;
    toggleZoom(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect());
  }

  function handleImageTap(e: React.TouchEvent<HTMLImageElement>) {
    e.preventDefault(); // blocks the synthetic click that fires after touchend
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
    setTranslate({
      x: dragRef.current.startTx + dx / SCALE,
      y: dragRef.current.startTy + dy / SCALE,
    });
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleTouchStart(e: React.TouchEvent) {
    const t = e.touches[0];
    touchRef.current = { startX: t.clientX, startY: t.clientY, startTx: translate.x, startTy: translate.y };
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!zoomed) return;
    e.stopPropagation();
    const t = e.touches[0];
    const dx = t.clientX - touchRef.current.startX;
    const dy = t.clientY - touchRef.current.startY;
    setTranslate({ x: touchRef.current.startTx + dx / SCALE, y: touchRef.current.startTy + dy / SCALE });
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
                <div
                  key={img.src}
                  className="portfolio-item"
                  onClick={() => openModal(img.src)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={533}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <span>Ver imagen</span>
                  </div>
                </div>
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

      {modalSrc && (
        <div className="image-modal show" onClick={closeModal}>
          <button className="close-modal" onClick={closeModal} aria-label="Cerrar imagen">
            &times;
          </button>
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
              src={modalSrc}
              alt="Vista completa"
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
