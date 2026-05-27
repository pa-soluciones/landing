"use client";
import { useEffect } from "react";

const SECTIONS = ["inicio", "servicios", "proyectos", "nosotros", "contacto", "faq"];

export function useScrollBehavior() {
  useEffect(() => {
    const wrapper = document.getElementById("scroll-wrapper");
    const header = document.getElementById("main-header");
    const dotNav = document.getElementById("dot-nav");
    const dotIndicator = document.getElementById("dot-indicator");

    if (!wrapper) return;

    let currentSection = 0;
    let isScrolling = false;
    const isMobile = () => window.innerWidth < 768;

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
      const lightSections = ["nosotros", "contacto", "faq"];
      dotNav.classList.toggle("light-mode", lightSections.includes(sectionId));
    }

    function scrollToSection(idx: number) {
      if (isMobile()) return;
      if (idx < 0 || idx >= SECTIONS.length) return;
      const sectionEl = document.getElementById(SECTIONS[idx]);
      if (!sectionEl) return;

      isScrolling = true;
      wrapper!.scrollTo({ top: sectionEl.offsetTop, behavior: "smooth" });
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
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) wrapper!.scrollTo({ top: sectionEl.offsetTop, behavior: "smooth" });
        return;
      }
      scrollToSection(idx);
    }

    // Wheel — desktop only
    function onWheel(e: WheelEvent) {
      if (isMobile()) return;
      // Don't intercept wheel inside the carousel
      const carousel = (e.target as HTMLElement).closest(".carousel-track-container");
      if (carousel) return;
      e.preventDefault();
      if (isScrolling) return;
      if (e.deltaY > 0 && currentSection < SECTIONS.length - 1) {
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    }

    // Touch — desktop only (tablet landscape)
    let touchStartY = 0;
    function onTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0].clientY;
    }
    function onTouchEnd(e: TouchEvent) {
      if (isMobile()) return;
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      if (diff > 0 && currentSection < SECTIONS.length - 1) scrollToSection(currentSection + 1);
      else if (diff < 0 && currentSection > 0) scrollToSection(currentSection - 1);
    }

    document.addEventListener("click", handleAnchorClick);
    wrapper.addEventListener("wheel", onWheel, { passive: false });
    wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
    wrapper.addEventListener("touchend", onTouchEnd, { passive: true });

    // Init indicator position after a short delay to allow layout
    const initTimer = setTimeout(() => updateDotIndicator(0), 100);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      wrapper.removeEventListener("wheel", onWheel);
      wrapper.removeEventListener("touchstart", onTouchStart);
      wrapper.removeEventListener("touchend", onTouchEnd);
      clearTimeout(initTimer);
    };
  }, []);
}
