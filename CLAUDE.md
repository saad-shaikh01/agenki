# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 website for "The Pulp House Publishing" - a publishing services company. The site is built with TypeScript, React 19, and uses the App Router with server components.

## Commands

### Development
```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19 (Server Components by default)
- **Styling**: Tailwind CSS v4 with custom animations
- **UI Components**: shadcn/ui + custom components (Radix UI primitives)
- **Form Handling**: react-hook-form with Zod validation
- **Animations**: Framer Motion
- **Theme**: next-themes (dark mode support, defaults to dark)
- **Type Safety**: TypeScript with strict mode

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with ThemeProvider, Header, Footer
│   ├── page.tsx           # Homepage
│   ├── services/          # Service pages (both static and dynamic)
│   │   ├── [slug]/        # Dynamic route for services
│   │   └── {service}/     # Static service pages
│   ├── packages/          # Package offering pages
│   └── {other-pages}/     # Static pages (about-us, contact-us, etc.)
├── components/
│   ├── global/            # Reusable components (icons, images, container, wrapper)
│   ├── layout/            # Header and Footer components
│   │   ├── header/        # TopBar and MainNav sub-components
│   │   └── footer/        # Footer sub-components
│   ├── sections/          # Page-specific sections
│   │   ├── home/          # Homepage sections
│   │   ├── about/         # About page sections
│   │   └── contact/       # Contact page sections
│   ├── forms/             # Form components
│   └── ui/                # shadcn/ui components + custom UI components
├── constants/             # App-wide constants
│   ├── site.ts           # Site config (APP_NAME, APP_DOMAIN)
│   ├── links.ts          # Navigation and footer links
│   ├── plans.ts          # Pricing/package data
│   ├── services.ts       # Services data
│   ├── reviews.ts        # Testimonials data
│   ├── animation.ts      # Framer Motion variants
│   └── fonts.ts          # Font configurations
├── functions/             # Utility functions
│   ├── cn.ts             # Class name utility (clsx + twMerge)
│   ├── metadata.ts       # SEO metadata generation helper
│   └── index.ts          # Exported utilities
├── hooks/                 # Custom React hooks
│   ├── useFormHandler.ts
│   └── use-click-outside.ts
├── lib/
│   └── data.ts           # Core data (SITE_CONFIG, NAV_LINKS, SERVICES, TESTIMONIALS)
└── styles/
    └── globals.css       # Global styles and CSS variables
```

### Key Patterns

#### 1. Server Components by Default
Most components are server components. Only add `"use client"` when needed for:
- Event handlers
- Browser APIs
- State management (useState, useContext)
- Framer Motion animations
- Theme toggling

#### 2. Path Aliases
Use `@/` prefix for imports (configured in tsconfig.json):
```typescript
import { cn } from "@/functions";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/data";
```

#### 3. Dynamic Routes
Service pages use generateStaticParams for static generation:
- Dynamic route: `/services/[slug]/page.tsx`
- Uses `SERVICES` array from `@/lib/data` for static generation
- Each service also has a dedicated static page for custom content

#### 4. Component Organization
- **ui/**: Pure presentational components (shadcn/ui + custom)
- **global/**: App-wide reusable components
- **sections/**: Page-specific composed sections
- **layout/**: Site-wide layout components (header, footer)
- **forms/**: Form components with react-hook-form + Zod

#### 5. Data Management
Central data files in `/constants` and `/lib/data.ts`:
- `SITE_CONFIG`: Company info, contact details
- `NAV_LINKS`: Navigation structure with nested children
- `SERVICES`: Service offerings (used for dynamic routes)
- `TESTIMONIALS`: Customer reviews

#### 6. Styling Conventions
- Use Tailwind utility classes
- Dark mode: `dark:` prefix (defaults to dark theme)
- Custom animations defined in `tailwind.config.ts`
- Framer Motion variants in `constants/animation.ts`
- CSS variables for theming in `globals.css`

#### 7. Metadata & SEO
Use `generateMetadata()` helper from `@/functions/metadata.ts`:
- Supports OpenGraph and Twitter cards
- Environment variables for site info
- Configurable per-page via params

## Important Notes

### shadcn/ui Integration
- Components installed via shadcn CLI are in `src/components/ui`
- Custom path alias configured in `components.json`: `utils` → `@/functions`
- When adding shadcn components, they'll use `cn()` from `@/functions`

### Image Handling
- Remote images from `rank1pro.com` allowed (see `next.config.mjs`)
- Static images imported from `components/global/images.tsx`
- Icons centralized in `components/global/icons.tsx`

### Theme System
- Uses next-themes with class-based dark mode
- Theme toggle component: `components/global/mode-toggle.tsx`
- Default theme is dark (`layout.tsx` line 41)
- CSS variables for colors in `globals.css`

### Trailing Slashes
URLs use trailing slashes (`next.config.mjs` line 11)

### Known Issues
- Duplicate files: `modeToggle.tsx` and `mode-toggle.tsx` in global/ - prefer `mode-toggle.tsx`
- Font imports commented out in `layout.tsx` (lines 20-21)
- GoogleAnalytics component commented out in `layout.tsx` (line 24)

## Development Workflow

1. **Adding a new page**: Create in `src/app/{page-name}/page.tsx`
2. **Adding a new service**: Add entry to `SERVICES` in `lib/data.ts` and optionally create static page
3. **Adding UI components**: Use `npx shadcn@latest add {component}` or create in `components/ui`
4. **Adding sections**: Create in `components/sections/{page-name}/`
5. **Updating navigation**: Modify `NAV_LINKS` in `lib/data.ts`

## Dependencies of Note

- **Prisma**: Installed but schema/usage not visible in scanned files
- **Carousel**: embla-carousel-react
- **Charts**: recharts
- **Form validation**: zod + @hookform/resolvers
- **Notifications**: sonner
- **Utility hooks**: usehooks-ts, react-use
