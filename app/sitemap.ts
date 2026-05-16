import { MetadataRoute } from 'next'

const BASE = 'https://answercareai.com'
const NOW  = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core pages ────────────────────────────────────────────────────────
    { url: BASE,                                       lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/product`,                          lastModified: NOW, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/trades`,                           lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },

    // ── Trade niche SEO pages ─────────────────────────────────────────────
    { url: `${BASE}/plumbers`,                         lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/hvac`,                             lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/electricians`,                     lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/locksmiths`,                       lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/roofers`,                          lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/pest-control`,                     lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },

    // ── Other vertical pages ──────────────────────────────────────────────
    { url: `${BASE}/dental`,                           lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/legal`,                            lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/realestate`,                       lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },

    // ── Comparison pages ─────────────────────────────────────────────────
    { url: `${BASE}/compare/ringwell-alternative`,     lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/compare/answering-service`,        lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },

    // ── Legal / trust pages ───────────────────────────────────────────────
    { url: `${BASE}/privacy`,                          lastModified: NOW, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/terms`,                            lastModified: NOW, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/refund`,                           lastModified: NOW, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
