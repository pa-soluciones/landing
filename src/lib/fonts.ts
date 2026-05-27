import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    { path: "../../public/fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/poppins-700.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/poppins-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
});

export const outfit = localFont({
  src: [
    { path: "../../public/fonts/outfit-300.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/outfit-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/outfit-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
});
