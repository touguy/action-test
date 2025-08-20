import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: "/user",	// base suburl 지정
  output: "standalone",  // standalone 빌드 활성화
  eslint: {
    ignoreDuringBuilds: true, // 빌드 시 ESLint 검사 무시
  },
};

export default nextConfig;
