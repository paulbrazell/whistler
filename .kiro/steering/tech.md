# Technology Stack

## Framework & Build System

- **React Router v7** - Full-stack React framework with file-based routing
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript development
- **Node.js** - Server-side runtime

## UI & Styling

- **Material-UI (MUI)** - React component library for consistent design
- **TailwindCSS** - Utility-first CSS framework
- **React Icons** - Icon library including social media icons
- **Inter Font** - Primary typography via Google Fonts

## Key Dependencies

- **React 19** - Latest React with concurrent features
- **Emotion** - CSS-in-JS styling (MUI dependency)
- **isbot** - Bot detection for SSR optimization

## Configuration

- **SSR disabled** - Configured as SPA in `react-router.config.ts`
- **Path aliases** - `~/` maps to `app/` directory
- **ES2022** - Modern JavaScript target

## Common Commands

### Development

```bash
npm run dev          # Start development server (http://localhost:5173)
npm run typecheck    # Run TypeScript type checking
```

### Production

```bash
npm run build        # Build for production
npm run start        # Start production server
```

### Docker

```bash
docker build -t whistler .    # Build Docker image
docker run -p 3000:3000 whistler  # Run container
```

## Deployment

### GitHub Pages

- **Hosting** - Deployed via GitHub Pages with automated CI/CD
- **Custom Domain** - Domain hosted on Squarespace with DNS pointing to GitHub Pages
- **Build Process** - GitHub Actions workflow builds and deploys on push to main branch
- **Static Assets** - Deploys `build/client` directory as static site
- **Node Version** - Uses Node.js 24 in CI environment

### Deployment Workflow

1. Push to main branch triggers GitHub Actions
2. Installs dependencies with `npm ci`
3. Builds production bundle with `npm run build`
4. Deploys `build/client` to GitHub Pages
5. Custom domain serves the static site

## Development Notes

- Hot Module Replacement (HMR) enabled in development
- TypeScript strict mode enforced
- Vite handles asset optimization and bundling
- Production builds optimized for static hosting
- SPA configuration works seamlessly with GitHub Pages
