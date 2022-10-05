/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['soundpickr-images.s3.eu-west-2.amazonaws.com', 'i.scdn.co', 'eu.ui-avatars.com', 'res.cloudinary.com', 'soundpickr-nfts.s3.eu-west-2.amazonaws.com', 's3.eu-west-2.amazonaws.com'],
  }
}

module.exports = nextConfig
