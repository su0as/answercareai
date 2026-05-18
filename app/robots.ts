import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/welcome'],  // welcome is post-purchase, don't index
      },
    ],
    sitemap: 'https://www.answercareai.com/sitemap.xml',
    host: 'https://www.answercareai.com',
  }
}
