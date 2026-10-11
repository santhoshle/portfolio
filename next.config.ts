import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Hide the Next.js "N" dev indicator badge (errors are still shown)
  devIndicators: false,
  // Bundle these into the server build instead of loading them from node_modules.
  // Otherwise Turbopack links to them with a junction point, which fails on
  // drives that don't support junctions (e.g. exFAT).
  transpilePackages: ["react-markdown"],
  compiler: {
    // Strip console.* (except errors) from production bundles
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;
