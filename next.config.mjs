/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  target: "server",
  images: {
    domains: ["picsum.photos", "localhost"],
  },
};

export default nextConfig;
