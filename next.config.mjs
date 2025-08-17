/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a fully static site for GitHub Pages
  output: 'export',
  // GH Pages serves from root for user/org sites; no basePath needed
  // Ensure assets work without the Next image optimizer
  images: {
    unoptimized: true,
  },
  // Make routes resolve to folder indexes (e.g., /about -> /about/ index.html)
  trailingSlash: true,
  // Skip ESLint during build so export isn't blocked by lint-only issues
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
