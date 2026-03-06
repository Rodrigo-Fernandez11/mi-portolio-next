/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones básicas
  compress: true,
  poweredByHeader: false,
  
  // Optimización de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
