# Project Structure

## Root Directory

```
├── app/                 # Application source code
├── build/              # Production build output
├── public/             # Static assets
├── .kiro/              # Kiro configuration and steering
├── .github/            # GitHub workflows and CI/CD
├── node_modules/       # Dependencies
└── package.json        # Project configuration
```

## App Directory (`app/`)

```
app/
├── root.tsx           # Root layout with MUI theme and error boundary
├── routes.ts          # Route configuration (file-based routing)
├── routes/            # Route components
│   └── home.tsx       # Main landing page
├── components/        # Reusable React components
│   └── social-icons.tsx
└── app.css           # Global styles and Tailwind imports
```

## Routing Convention

- **File-based routing** via React Router v7
- Routes defined in `app/routes.ts`
- Route components in `app/routes/` directory
- Index route: `routes/home.tsx`

## Component Organization

- **Shared components** in `app/components/`
- **Route-specific components** co-located with routes when needed
- **Component naming** uses PascalCase for exports
- **File naming** uses kebab-case

## Asset Management

- **Static assets** in `public/` directory
- **Images** referenced with absolute paths (e.g., `/image.jpg`)
- **Fonts** loaded via Google Fonts CDN

## Styling Architecture

- **Global styles** in `app/app.css`
- **MUI theme** configured in `root.tsx`
- **Component styles** via MUI's `sx` prop
- **Utility classes** via TailwindCSS when needed

## Path Aliases

- `~/` maps to `app/` directory
- Import example: `import { Component } from "~/components/component"`

## Type Safety

- **Route types** auto-generated in `.react-router/types/`
- **Component props** typed via Route.MetaArgs, Route.ErrorBoundaryProps
- **Strict TypeScript** configuration enforced
