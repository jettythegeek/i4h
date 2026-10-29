/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  outputFileTracingIncludes: {
    "/api/report-download": ["./assets/reports/**/*"],
  },
};

export default nextConfig;
