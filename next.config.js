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
    remotePatterns: [{
      protocol: "https",
      hostname: "lh3.googleusercontent.com",
      port: ""
    }],

  },
  webpack: (config, { isServer }) => {
    isServer && (config.externals = [...config.externals,  'socket.io-client']);
    return config;
  },
  
};

module.exports = nextConfig;
