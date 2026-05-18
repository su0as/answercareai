/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Force www → non-www (301 permanent)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.answercareai.com' }],
        destination: 'https://answercareai.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
