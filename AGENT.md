# Agent Guidelines

## Commands
- **Development:** `pnpm dev` or `pnpm start` - Start Astro dev server
- **Build:** `pnpm build` - Build for production
- **Preview:** `pnpm preview` - Preview production build
- **Check:** Use `pnpm build` for type checking and build verification

## Architecture
- **Framework:** Astro with TypeScript support and i18n (Spanish/English)
- **Styling:** Tailwind CSS with custom components and responsive design
- **Structure:** `src/components/` (reusable components), `src/layouts/` (page layouts), `src/pages/` (routes)
- **Deployment:** Static site generation (SSG) with optional Vercel integration

## Code Style
- **Components:** PascalCase naming (e.g., `Header.astro`, `SocialPill.astro`)
- **Imports:** Relative imports using `../` notation, external packages first
- **Props:** TypeScript interfaces for component props, destructured in component script
- **Styling:** Tailwind classes for styling, scoped `<style>` for component-specific CSS
- **Files:** `.astro` for components/layouts/pages, TypeScript interfaces in frontmatter
- **Classes:** Template literals for complex Tailwind class combinations
- **i18n:** Default locale "es", routes support both Spanish and English

## Important Files
- `astro.config.mjs` - Main configuration with Tailwind integration and i18n setup
- `src/layouts/Layout.astro` - Main layout with global styles and font loading
