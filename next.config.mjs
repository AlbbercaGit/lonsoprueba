/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configura la ruta base si tu sitio estará en un subdirectorio
  // Por ejemplo, si tu nombre de usuario es "usuario", la URL será usuario.github.io/photographer-portfolio
  // En ese caso, descomenta la siguiente línea:
  // basePath: '/photographer-portfolio',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

export default nextConfig;

