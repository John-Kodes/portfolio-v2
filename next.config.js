module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      // websites for images
    ],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
