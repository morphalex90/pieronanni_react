/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.pieronanni.com'],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/cv',
  //       destination: '/cv.pdf',
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
