# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite HMR)
npm run build    # Production build to /dist
npm run lint     # ESLint
npm run preview  # Preview prod build
```

## Tech Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS 4 (via @tailwindcss/vite plugin)
- React Router DOM 7
- Path alias: `@/*` → `./src/*`

## Architecture

**Marketing site for Infinititech Partners** - heavy animation focus, dark theme, custom cursor.

### Component Layers

1. **effects/** - Canvas-based visuals (ParticleField, AuroraBackground, CustomCursor, Constellation)
   - ParticleField runs 300 particles with physics/connections per frame
   - CustomCursor replaces OS cursor globally

2. **ui/** - Interactive primitives (SplitText, MagneticButton, TiltCard, ParallaxLayer, BlurText)
   - All use IntersectionObserver or mouse tracking for animations

3. **sections/** - Page sections (Hero, About, Services, Products, Portfolio, Process, Team, Contact)
   - Data-driven from `data/data.tsx`

4. **pages/** - Route views composing sections
   - HomePage stacks all sections
   - Other pages are dedicated routes

### Hooks

- `useInView` - IntersectionObserver wrapper for scroll triggers
- `useMousePosition` - Real-time mouse coords
- `useParallax` - Scroll-based offset

### Styling

- `styles/globals.css` - Tailwind + CSS variables + all custom animations
- Design tokens: `--color-primary: #00ffcc`, `--color-secondary: #ff6b35`, `--color-accent: #667eea`, `--color-bg: #080c15`
- Fonts: Clash Display (headings), Satoshi (body), JetBrains Mono (code)

### Data

- All static content in `data/data.tsx` with TypeScript interfaces
- Exports: navItems, footerLinks, contactInfo, socialLinks, whyChooseUs, values, stats, services, products, projects, processSteps, team
- No state management lib - direct imports where needed
