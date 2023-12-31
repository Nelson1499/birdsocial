/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
