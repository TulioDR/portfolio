import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   reactCompiler: true,
   allowedDevOrigins: ["192.168.0.107", "192.168.1.4"],
};

export default nextConfig;
