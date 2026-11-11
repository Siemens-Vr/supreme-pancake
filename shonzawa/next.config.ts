import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  devIndicators: false,
  images: { unoptimized: true },
  // Use the compiler API: the CLI checker returns empty output on this host.
  // Type checking remains enabled during production builds.
  experimental: { useTypeScriptCli: false },
};

export default nextConfig;
