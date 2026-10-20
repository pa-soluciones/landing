"use client";
import { useEffect } from "react";
import { isSnapLayout } from "@/lib/layout";

const SECTIONS = ["inicio", "servicios", "proyectos", "clientes", "nosotros", "contacto", "faq", "cierre"];

export function useScrollBehavior() {
  useEffect(() => {
    const wrapper = document.getElementById("scroll-wrapper");
    const header = document.getElementById("main-header");
    const dotNav = document.getElementById("dot-nav");
    const dotIndicator = document.getElementById("dot-indicator");

    if (!wrapper) return;

    let currentSection = 0;
    let isScrolling = false;
    const isMobile = () => !isSnapLayout();

    function getDots() {
      return Array.from(document.querySelectorAll<HTMLElement>(".dot"));
    }

    function updateDotIndicator(idx: number) {
      if (!dotIndicator || !dotNav) return;
      const navRect = dotNav.getBoundingClientRect();
      const items = dotNav.querySelectorAll<HTMLElement>("li");
      const li = items[idx];
      if (!li) return;
      const liRect = li.getBoundingClientRect();
      const centerY = liRect.top + liRect.height / 2 - navRect.top - 11;
      dotIndicator.style.transform = `translateY(${centerY}px)`;
    }

    function updateDotMode(sectionId: string) {
      if (!dotNav) return;
      const lightSections = ["clientes", "nosotros", "contacto", "faq"];
      dotNav.classList.toggle("light-mode", lightSections.includes(sectionId));
    }

    function scrollToSection(idx: number, fromBelow = false) {
      if (isMobile()) return;
      if (idx < 0 || idx >= SECTIONS.length) return;
      const sectionEl = document.getElementById(SECTIONS[idx]);
      if (!sectionEl) return;

      // Coming back up into a section taller than the viewport lands on its last screen.
      const top = fromBelow
        ? Math.max(sectionEl.offsetTop, sectionEl.offsetTop + sectionEl.offsetHeight - wrapper!.clientHeight)
        : sectionEl.offsetTop;
      isScrolling = true;
      wrapper!.scrollTo({ top, behavior: "smooth" });
      currentSection = idx;

      const dots = getDots();
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
      updateDotIndicator(idx);
      updateDotMode(SECTIONS[idx]);

      if (header) {
        header.classList.toggle("visible", idx > 0);
      }

      setTimeout(() => { isScrolling = false; }, 800);
    }

    // A section taller than the viewport scrolls through its own content before snapping on.
    function scrollWithin(dir: 1 | -1) {
      const sectionEl = document.getElementById(SECTIONS[currentSection]);
      if (!sectionEl) return false;
      const view = wrapper!.clientHeight;
      const pos = wrapper!.scrollTop;
      const start = sectionEl.offsetTop;
      const end = sectionEl.offsetTop + sectionEl.offsetHeight - view;
      let target: number | null = null;
      if (dir > 0 && pos < end - 1) target = Math.min(end, pos + view * 0.8);
      if (dir < 0 && pos > start + 1) target = Math.max(start, pos - view * 0.8);
      if (target === null) return false;
      isScrolling = true;
      wrapper!.scrollTo({ top: target, behavior: "smooth" });
      setTimeout(() => { isScrolling = false; }, 800);
      return true;
    }

    function step(dir: 1 | -1) {
      if (scrollWithin(dir)) return;
      if (dir > 0 && currentSection < SECTIONS.length - 1) scrollToSection(currentSection + 1);
      else if (dir < 0 && currentSection > 0) scrollToSection(currentSection - 1, true);
    }

    // Intercept ALL anchor clicks → use custom scroll on desktop
    function handleAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const sectionId = anchor.getAttribute("href")?.slice(1);
      if (!sectionId) return;
      const idx = SECTIONS.indexOf(sectionId);
      if (idx === -1) return;
      e.preventDefault();
      if (isMobile()) {
        // Mobile: manual scroll inside the overflow-y: auto wrapper
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      scrollToSection(idx);
    }

    // Wheel — desktop only
    function onWheel(e: WheelEvent) {
      if (isMobile()) return;
      // Horizontal wheel over the carousel belongs to it; vertical wheel still moves the page
      const carousel = (e.target as HTMLElement).closest(".carousel-track-container");
      if (carousel && Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      // On short viewports the FAQ list scrolls internally; only take over at its edges
      const faq = (e.target as HTMLElement).closest<HTMLElement>(".faq-section");
      if (faq && faq.scrollHeight > faq.clientHeight) {
        const atTop = faq.scrollTop <= 0;
        const atBottom = Math.ceil(faq.scrollTop + faq.clientHeight) >= faq.scrollHeight;
        if (!(atTop && e.deltaY < 0) && !(atBottom && e.deltaY > 0)) return;
      }
      e.preventDefault();
      if (isScrolling) return;
      if (e.deltaY !== 0) step(e.deltaY > 0 ? 1 : -1);
    }

    // Touch — desktop only (tablet landscape)
    let touchStartY = 0;
    function onTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0].clientY;
    }
    function onTouchEnd(e: TouchEvent) {
      if (isMobile()) return;
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50 || isScrolling) return;
      step(diff > 0 ? 1 : -1);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (isMobile()) return;
      if (isScrolling) return;
      if ((e.target as HTMLElement).closest("input, textarea, select")) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    }

    document.addEventListener("click", handleAnchorClick);
    document.addEventListener("keydown", onKeyDown);
    wrapper.addEventListener("wheel", onWheel, { passive: false });
    wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
    wrapper.addEventListener("touchend", onTouchEnd, { passive: true });

    // Init indicator position after a short delay to allow layout
    const initTimer = setTimeout(() => updateDotIndicator(0), 100);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      document.removeEventListener("keydown", onKeyDown);
      wrapper.removeEventListener("wheel", onWheel);
      wrapper.removeEventListener("touchstart", onTouchStart);
      wrapper.removeEventListener("touchend", onTouchEnd);
      clearTimeout(initTimer);
    };
  }, []);
}
