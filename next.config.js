/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/magazine",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
