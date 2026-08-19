import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: [
    "192.168.0.107",
    "192.168.1.4",
    "192.168.0.105",
    "192.168.0.106",
    "192.168.0.100",
  ],
};

export default nextConfig;
