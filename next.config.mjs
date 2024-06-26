/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cv',
        destination: '/cv.pdf',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
