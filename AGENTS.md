# Agent Rules

## Next.js version

This project uses **Next.js 16** (App Router). APIs, conventions, and file structure may differ from training data. Read `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.

## Proyecto

Landing page de **PAS Piedra Angular Solutions** — empresa de perforaciones en hormigón armado, Buenos Aires, Argentina. Sitio: `pasoluciones.com.ar`.

## CSS

- Sin Tailwind, sin CSS Modules. Todo en `src/app/globals.css`.
- Variables en `:root`: `--primary: #F49600`, `--secondary: #5F5E5E`, `--bg-dark: #1F2123`, etc.
- No agregar librerías de estilos nuevas sin consultar.

## Fuentes

Self-hosted en `/public/fonts/` via `next/font/local`. Config en `src/lib/fonts.ts`. No usar Google Fonts remoto.

## Componentes

Todos en `src/components/`. Sin subdirectorios excepto `icons/`. Naming: PascalCase, un componente por archivo.

## Imágenes

Formato webp para fotos, svg para íconos. Usar `next/image` con `width`/`height` explícitos o `fill`. No agregar imágenes sin optimizar.

## SEO

- `src/lib/schema.ts` tiene los schemas de schema.org. Si se agregan secciones nuevas con FAQs, usar `faqSchema()`.
- `src/app/robots.ts` y `src/app/sitemap.ts` son dinámicos — no crear archivos estáticos equivalentes.

## Analytics

GTM `GTM-PBZCGJDV` ya está en `layout.tsx`. No duplicar scripts de analytics.

## Restricciones

- No modificar `layout.tsx` sin entender el impacto en SEO y analytics.
- No reemplazar CSS custom por Tailwind.
- No agregar dependencias pesadas sin justificación (ya hay embla-carousel-react y lucide-react).
