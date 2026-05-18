/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Force non-www → www (301 permanent)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'answercareai.com' }],
        destination: 'https://www.answercareai.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
