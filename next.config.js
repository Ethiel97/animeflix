/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost:3000',
      'https://api.jikan.moe',
      'https://myanimelist.net',
      'myanimelist.net',
      'https://cdn.myanimelist.net',
      'img.youtube.com',
      'cdn.myanimelist.net'
    ],
  }
}

module.exports = nextConfig
