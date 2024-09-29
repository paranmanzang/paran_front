/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  target: 'server',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;