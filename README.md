# PAS — Piedra Angular Solutions

Landing page institucional para **PAS Piedra Angular Solutions**, empresa especializada en perforaciones en hormigón armado, sellado de juntas y anclajes en Buenos Aires, Argentina.

- **Sitio**: [pasoluciones.com.ar](https://pasoluciones.com.ar)
- **Repo**: [github.com/pa-soluciones/landing](https://github.com/pa-soluciones/landing)

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- CSS puro con design tokens (sin Tailwind, sin CSS Modules)
- Fuentes self-hosted: Poppins + Outfit (woff2 en `/public/fonts/`)
- embla-carousel-react · lucide-react

## Estructura

```
src/
  app/
    layout.tsx        # metadata, OG, GTM, schema.org, fuentes
    page.tsx          # página principal (SSR)
    globals.css       # design system completo (tokens, utils, animaciones)
    robots.ts         # robots.txt dinámico
    sitemap.ts        # sitemap.xml dinámico
  components/
    Header.tsx        # nav con scroll behavior
    Hero.tsx          # sección hero con carousel (embla)
    About.tsx
    Services.tsx
    Portfolio.tsx     # galería de trabajos
    FAQ.tsx           # acordeón con FAQ schema
    Footer.tsx
    ContactForm.tsx
    DotNav.tsx        # navegación por puntos (secciones)
    ClientInit.tsx    # init lado cliente
    icons/            # íconos SVG custom
  hooks/
    useReveal.ts      # IntersectionObserver para animaciones de entrada
    useScrollBehavior.ts
  lib/
    fonts.ts          # configuración next/font/local
    faqData.ts        # datos FAQ
    schema.ts         # schema.org: LocalBusiness, Organization, FAQPage
public/
  fonts/              # woff2 self-hosted
  ico/                # favicon set completo + webmanifest
  services/           # íconos SVG de servicios
  work-images/        # fotos de trabajos (webp)
  logo.svg / logo-alt.svg / opengraph.png / animated-logo.webm
```

## Dev

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run start
```

## Analytics

- GTM: `GTM-PBZCGJDV`
- Hotjar/ContentSquare: cargado en `lazyOnload`

## SEO

- schema.org `LocalBusiness` + `Organization` + `FAQPage` inyectados en `<head>`
- OG image: `/public/opengraph.png` (1200×630)
- Canonical: `https://pasoluciones.com.ar`
- Lang: `es-AR`
