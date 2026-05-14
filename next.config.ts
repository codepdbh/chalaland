import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ============================================
     GITHUB PAGES — Static Export Configuration
     ============================================ */
  output: "export",

  /**
   * Base path for GitHub Pages.
   * If your repo is: github.com/username/turismo-solidario
   * Then set basePath to: "/turismo-solidario"
   * If using a custom domain, leave as empty string ""
   */
  basePath: "/turismo-solidario",

  /** Trailing slashes for static file compatibility */
  trailingSlash: true,

  /** Disable image optimization for static export */
  images: {
    unoptimized: true,
  },

  /** Keep Turbopack scoped to this project even if parent folders have lockfiles */
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
