/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
    ],
  },
  reactStrictMode: false,
}

export default nextConfig
