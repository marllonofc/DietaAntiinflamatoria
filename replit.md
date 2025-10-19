# Anti-Inflammatory Diet Landing Page

## Overview

This is a sales landing page for a Spanish-language digital product called "Dieta Anti-Inflamatória" (Anti-Inflammatory Diet). The application is designed as a single-page marketing site selling a 30-day diet guide for $10, focusing on reducing chronic inflammation and pain through nutrition. It follows a reference-based marketing approach inspired by high-converting sales pages from platforms like Shopify, Teachable, and Kajabi.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing. The application has a minimal route structure with a home page and 404 fallback.

**UI Component System**: shadcn/ui component library built on Radix UI primitives. The design system uses the "new-york" style variant with Tailwind CSS for styling. Components are fully typed and follow a composition pattern for maximum flexibility.

**State Management**: TanStack React Query (v5) for server state management, though the current implementation appears to be primarily static content without active data fetching.

**Styling Approach**: Tailwind CSS with a custom design system defined in the configuration. The color palette emphasizes purple (primary brand), green (CTAs), and yellow (emphasis), following the specifications in `design_guidelines.md`. Custom CSS variables enable theming support with HSL color values.

**Design System**: A comprehensive component library including accordions, dialogs, forms, navigation, charts, and more. The system uses class-variance-authority for variant management and supports both light and dark modes through CSS custom properties.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript in ESM module format.

**API Structure**: Minimal backend setup with route registration through `registerRoutes()`. Currently implements a basic storage interface but no active endpoints are defined. The architecture is prepared for future API routes prefixed with `/api`.

**Development Server**: Custom Vite integration for development with HMR (Hot Module Replacement). The server handles both API routes and serves the frontend in development mode through Vite middleware.

**Production Build**: Separates frontend (Vite) and backend (esbuild) builds. Frontend outputs to `dist/public` while backend bundles to `dist/index.js`.

**Session Management**: Infrastructure in place for connect-pg-simple session storage, though not currently implemented.

### Data Storage Solutions

**Database ORM**: Drizzle ORM configured for PostgreSQL with Neon serverless database support. Schema is defined in TypeScript with Zod validation integration.

**Current Schema**: Basic user table with UUID primary keys, username, and password fields. This appears to be template/boilerplate code not actively used by the landing page.

**In-Memory Storage**: MemStorage class provides temporary data persistence during development without requiring a database connection. Implements the IStorage interface with user CRUD operations.

**Migration Strategy**: Drizzle Kit configured for schema migrations with PostgreSQL dialect. Migrations output to `./migrations` directory.

### Authentication and Authorization

**Current State**: Authentication infrastructure is prepared but not implemented. The schema includes user credentials, and the storage interface supports user operations, but no auth routes or middleware are active.

**Session Support**: Package dependencies include connect-pg-simple for PostgreSQL-backed sessions, indicating planned session-based authentication.

### External Dependencies

**UI Component Libraries**:
- Radix UI primitives for accessible component foundations (accordion, dialog, dropdown, popover, select, etc.)
- Embla Carousel for potential image/testimonial carousels
- React Hook Form with Zod resolvers for form validation (prepared but not actively used)

**Styling**:
- Tailwind CSS for utility-first styling
- class-variance-authority for component variant management
- clsx and tailwind-merge for className utilities

**Database & ORM**:
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for PostgreSQL connection
- drizzle-zod for schema-to-validation integration

**Development Tools**:
- Vite plugins for development experience (@replit/vite-plugin-runtime-error-modal, cartographer, dev-banner)
- TypeScript for type safety across the stack
- esbuild for fast production builds

**Deployment**:
- Netlify Functions support (serverless-http wrapper in `netlify/functions/api.ts`)
- Configuration for both traditional Express server and serverless deployment

**Utilities**:
- date-fns for date manipulation
- cmdk for command menu functionality
- lucide-react for icon components

### Design Pattern Decisions

**Component Co-location**: Components, hooks, and utilities are organized by feature with shared UI components in a dedicated directory. This supports scalability as the application grows.

**Type Safety**: Full TypeScript implementation with strict mode enabled. Path aliases (`@/`, `@shared/`) simplify imports and enforce architectural boundaries.

**Server-Client Separation**: Clear separation between client (`client/src`), server (`server/`), and shared (`shared/`) code. This enables code reuse while maintaining security boundaries.

**Configuration as Code**: Centralized configuration in root-level files (Vite, Tailwind, TypeScript, Drizzle) with type safety and validation.

**Progressive Enhancement**: The landing page is built as a static-first application that can be enhanced with dynamic features. The database and authentication infrastructure is ready but not required for the current marketing page functionality.