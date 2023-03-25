/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.pieronanni.com', 's3.eu-west-2.amazonaws.com', 'ipfs.io'],
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
