import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // تغيير مجلد البنية إلى "build"
  distDir: 'build',
  experimental: {
    reactCompiler: {
      compilationMode: 'annotation',
    },
  },
};

export default nextConfig;
