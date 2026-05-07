import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   reactCompiler: true,
   allowedDevOrigins: [
      "192.168.0.104",
      "192.168.1.3",
      "192.168.0.101",
      "192.168.0.100",
      "192.168.0.103",
   ],
};

export default nextConfig;
