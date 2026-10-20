import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: lets phones on the local network load the dev server's scripts.
  allowedDevOrigins: ["192.168.*.*"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "embla-carousel-react"],
  },
  compress: true,
};

export default nextConfig;
