import { defineStore } from 'pinia'

/**
 * Portfolio — websites & apps you've built.
 *
 * To add a new item, copy an object below into the `items` array.
 *
 * Fields:
 *   title        (required)  Name of the product
 *   description  (required)  Short summary of what it is / does
 *   type         (optional)  'website' | 'app' — shown as a small badge
 *   image        (optional)  Path under /public, e.g. '/portfolio/my-app.webp'
 *                            Drop image files into: public/portfolio/
 *   url          (optional)  Live site / store / demo link
 *   github       (optional)  Source repo link
 *   tags         (optional)  Tech or topic chips, e.g. ['Vue', 'Node']
 *   year         (optional)  Year string, e.g. '2024'
 *
 * Example:
 * {
 *   title: 'My Cool App',
 *   type: 'app',
 *   description: 'A short description of what this does.',
 *   image: '/portfolio/my-cool-app.webp',
 *   url: 'https://example.com',
 *   github: 'https://github.com/you/repo',
 *   tags: ['Vue', 'Pinia'],
 *   year: '2025',
 * }
 */
export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    sectionTitle: 'Portfolio',
    sectionSubtitle: 'Websites and apps I’ve built — live links, screenshots, and short notes',
    items: [
      // ── Replace / extend these entries with your real work ──────────────
      {
        title: 'ReSTAGE',
        type: 'website',
        description:
          'Patient-facing web platform for an EU research consortium on rectal cancer care — project info, consortium, news, and educational resources supporting integrative decision-making with advanced MRI imaging and predictive models.',
        image: '/portfolio/restage.webp',
        url: 'https://re-stage.eu/',
        tags: ['Vue', 'Medical Imaging', 'EU Research', 'Patient Tools'],
        year: '2025',
      },
      {
        title: 'RadMark',
        type: 'website',
        description:
          'Collaborative radiology web app where clinicians annotate medical findings with bounding boxes on curated study sets — a focused viewer built for multi-site segmentation and image-analysis workflows.',
        image: '/portfolio/radmark.webp',
        url: 'https://radmark.web.app/',
        tags: ['Vue', 'Medical Imaging', 'Medical image viewer', 'annotation tools'],
        year: '2026',
      },

      // {
      //   title: 'Another Project',
      //   type: 'app',
      //   description: 'What it does in one or two sentences.',
      //   image: '/portfolio/another-project.webp',
      //   url: 'https://example.com',
      //   github: 'https://github.com/helghast79/another-project',
      //   tags: ['React', 'Node'],
      //   year: '2024',
      // },
    ],
  }),
})
