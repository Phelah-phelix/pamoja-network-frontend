/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4000/api/:path*",
      },
    ];
  },
  // Disable ESLint during build
  //eslint: {
    //ignoreDuringBuilds: true,
  //},
  // Disable TypeScript errors during build
  //typescript: {
    //ignoreBuildErrors: true,
  //},
};

export default nextConfig;
