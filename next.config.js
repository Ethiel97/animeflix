/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
