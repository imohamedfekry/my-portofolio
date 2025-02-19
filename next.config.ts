import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // تغيير مجلد البنية إلى "build"
  experimental: {
    reactCompiler: {
      compilationMode: 'annotation',
    },
  },
};

export default nextConfig;
