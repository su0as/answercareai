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
    { url: `${BASE}/garage-door`,                      lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/appliance-repair`,                 lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/septic`,                           lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },

    // ── Umbrella / hub pages ──────────────────────────────────────────────
    { url: `${BASE}/contractors`,                      lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 },

    // ── Other vertical pages ──────────────────────────────────────────────
    { url: `${BASE}/dental`,                           lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/legal`,                            lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/realestate`,                       lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },

    // ── Comparison pages ─────────────────────────────────────────────────
    { url: `${BASE}/compare/ringwell-alternative`,     lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/compare/answering-service`,        lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },

    // ── Blog index ────────────────────────────────────────────────────────
    { url: `${BASE}/blog`,                             lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },

    // ── Blog posts ────────────────────────────────────────────────────────
    { url: `${BASE}/blog/missed-calls-cost-plumbers`,                      lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/blog/best-answering-service-for-plumbers`,             lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/blog/best-ai-answering-service-for-trades`,            lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/blog/never-miss-a-call-contractor`,                    lastModified: NOW, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${BASE}/blog/ai-vs-traditional-answering-service-contractors`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.8  },

    // ── Legal / trust pages ───────────────────────────────────────────────
    { url: `${BASE}/privacy`,                          lastModified: NOW, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/terms`,                            lastModified: NOW, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/refund`,                           lastModified: NOW, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
