# Sanity.io CMS Setup

Dokumentasi untuk setup dan penggunaan Sanity CMS dengan JSON fallback.

## Prerequisites

1. Buat akun di [sanity.io](https://sanity.io)
2. Install CLI: `npm install -g @sanity/cli`
3. Login: `sanity login`

## Setup Steps

### 1. Create Sanity Project

```bash
sanity init
# Follow prompts:
# - Project name: web-profile
# - Dataset: production
# - TypeScript: Yes
# - Package manager: npm
```

### 2. Configure Environment Variables

Copy `.env.local.example` ke `.env.local`:

```bash
cp .env.local.example .env.local
```

Isi values dari Sanity dashboard:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - dari sanity.io/dashboard
- `NEXT_PUBLIC_SANITY_DATASET` - обычно "production"

### 3. Initialize Sanity Studio

```bash
npm run studio
```

Buka `http://localhost:3000/studio` untuk akses CMS dashboard.

## Content Schemas

| Schema | Description |
|--------|-------------|
| `hero` | Name, title, description, location, email, stats |
| `about` | Bio, skills categories, stats |
| `projects` | Array of projects (title, description, tech, links) |
| `contact` | Email, location, social links, form placeholders |

## JSON Fallback System

### How It Works

```
┌─────────────┐     try      ┌─────────────┐
│  Component  │ ──────────▶  │   Sanity    │
│             │              │    CDN      │
└─────────────┘              └──────┬──────┘
       ▲                         │ catch
       │                         ▼
       │                   ┌─────────────┐
       └────────────────── │    JSON     │
                           │   Fallback  │
                           └─────────────┘
```

### When Fallback is Used

1. **Sanity tidak dikonfigurasi** - env vars belum diisi
2. **Bandwidth exceeded** - free tier 10GB/mo habis
3. **Sanity unavailable** - CDN down atau error

### Manual JSON Update

Jika perlu update JSON fallback manual:

```bash
# Export dari Sanity
sanity export --output ./src/content

# Atau buat script sendiri menggunakan @sanity/client
```

## Update Content Strategy

### Option 1: Via Sanity Studio (Recommended)

1. Buka `http://localhost:3000/studio` atau production `/studio`
2. Login dengan Sanity account
3. Edit content sesuai kebutuhan
4. Changes auto-deploy dan reflect di frontend

### Option 2: Manual JSON Edit

1. Edit langsung file di `src/content/*.json`
2. Commit dan push ke GitHub
3. Vercel auto-redeploy dengan content baru

## Revalidation Strategy

Content menggunakan Next.js ISR (Incremental Static Regeneration):

```typescript
// Di page/component
export async function generateStaticParams() {
  return [];
}

export const revalidate = 3600; // 1 hour
```

Atau on-demand revalidation dengan webhooks.

## Monitoring Bandwidth

1. Buka [sanity.io/manage](https://sanity.io/manage)
2. Pilih project → Usage
3. Monitor "Bandwidth" section

### Jika Mendekati Limit

1. **Warning email** dari Sanity jika approaching limit
2. **Upgrade** ke pay-as-you-go plan (~$1/GB)
3. **Fallback** ke JSON files (automatic)

## Troubleshooting

### "Sanity fetch failed, using fallback"

Ini normal jika:
- Env vars belum diset
- Sanity project belum dibuat
- Bandwidth exceeded

Content tetap serving dari JSON files.

### Studio tidak bisa diakses

1. Check `NEXT_PUBLIC_SANITY_PROJECT_ID` di `.env.local`
2. Pastikan sanity CLI logged in: `sanity debug`
3. Check Sanity status di [status.sanity.io](https://status.sanity.io)

## Next Steps

1. ✅ Create Sanity account
2. ✅ Initialize project
3. ✅ Setup schemas
4. ⏳ Configure env vars
5. ⏳ Test CMS functionality
6. ⏳ Setup revalidation/webhook

---

Untuk pertanyaan lebih lanjut, check [Sanity docs](https://www.sanity.io/docs) atau buat issue di repository.
