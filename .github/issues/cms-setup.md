# Issue: Setup Sanity.io CMS untuk Portfolio Website

## Overview
Kita akan setup Content Management System (CMS) menggunakan Sanity.io untuk mengelola semua content di portfolio website secara terpusat, sehingga tidak perlu edit code untuk mengubah text/content.

## Mengapa Sanity.io?
- **Free tier**: 10GB bandwidth/bulan (cukup untuk ~200k page views)
- **Built-in change log**: bisa lihat siapa mengubah apa kapan
- **CDN-powered**: content di-cache, tidak affect SEO
- **Embedded Studio**: bisa akses CMS langsung dari website kita di route `/studio`
- **Fallback JSON**: jika free tier exceeded, system会自动切换 ke file JSON local

## Goals / Tujuan
1. Content (hero, about, projects, contact) bisa di-edit dari CMS dashboard tanpa perlu edit code
2. Ada sistem fallback menggunakan file JSON jika bandwidth exceeded atau CMS unavailable
3. Semua perubahan content tercatat di change log (audit trail)
4. Frontend tetap fast dan SEO-friendly

## Technical Approach

### Step 1: Setup Sanity Project
- Create project di sanity.io
- Install `@sanity/client` dan `next-sanity`
- Setup project ID dan dataset

### Step 2: Define Content Schemas
Buat schema untuk:
- `hero`: name, title, description, location, email, stats (years, projects, clients)
- `about`: bio text, skills categories, stats
- `project[]`: array of projects (title, description, tech stack, github link, demo link)
- `contact`: email, location, social links
- `siteSettings`: global settings

### Step 3: Setup Embedded Sanity Studio
- Install studio di `/studio` route
- Configure untuk Next.js app router

### Step 4: Data Fetching Layer
- Create API layer yang abstract Sanity/JSON fallback
- Logic:
  ```
  try {
    fetch from Sanity CDN
  } catch (error) {
    fallback to local JSON file
  }
  ```

### Step 5: JSON Fallback System
- Create `/src/content/*.json` files dengan latest content
- Update script (manual atau automated) untuk export CMS content → JSON
- Documentation untuk tim: cara update JSON manually

### Step 6: Revalidation Strategy
- Use Next.js ISR dengan `revalidate` untuk cache content
- Set appropriate revalidate time (1 jam / 1 hari)

## Content yang Akan Dimigrate

### Hero Section
```json
{
  "name": "Cahya Agung",
  "title": "Middle to Senior Software Engineer",
  "description": "A passionate Full Stack Developer...",
  "location": "Indonesia",
  "email": "cahyaagong@gmail.com",
  "stats": [
    { "label": "Years Experience", "value": "6+" },
    { "label": "Projects Delivered", "value": "20+" },
    { "label": "Happy Clients", "value": "10+" }
  ]
}
```

### About Section
```json
{
  "bio": "A passionate Middle to Senior Software Engineer...",
  "skills": [
    { "category": "Frontend", "items": ["React", "Next.js", "TypeScript", "Tailwind"] },
    { "category": "Backend", "items": ["Node.js", "PostgreSQL", "MongoDB", "GraphQL"] },
    ...
  ],
  "stats": [...]
}
```

### Projects Section
```json
{
  "projects": [
    {
      "title": "E-Commerce Platform",
      "description": "A full-stack e-commerce solution...",
      "tech": ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      "github": "https://github.com/...",
      "demo": "https://..."
    },
    ...
  ]
}
```

### Contact Section
```json
{
  "email": "cahyaagong@gmail.com",
  "location": "Indonesia",
  "socials": [
    { "platform": "GitHub", "url": "https://github.com/CahyaAgong" },
    ...
  ]
}
```

## Risk & Mitigation

| Risk | Mitigation |
|------|------------|
| Bandwidth exceeded (>10GB/mo) | JSON fallback otomatis |
| Sanity down/unavailable | JSON fallback, atau deploy sendiri |
| Need custom audit log | Sanity sudah built-in, atau create log di JSON update |

## Labels
`cms`, `backend`, `enhancement`

## Milestones
- [ ] Setup Sanity project dan studio
- [ ] Define all content schemas
- [ ] Create data fetching layer dengan fallback
- [ ] Migrate all hardcoded content
- [ ] Test fallback mechanism
- [ ] Document usage untuk tim

## Difficulty
🟢 Beginner Friendly - Semua step ada dokumentasinya

## Dependencies
None - ini adalah independent feature
