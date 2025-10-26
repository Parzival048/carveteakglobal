# Furniture Showcase & Lead Generation Website

## Overview

This is a furniture showcase and lead generation website for a traditional wooden furniture company specializing in handcrafted Sagwan and Teak wood furniture. The application is designed to present products in an elegant, visually appealing manner while capturing customer inquiries through contact forms. It follows modern e-commerce design patterns with a focus on natural aesthetics and trust-building.

The tech stack consists of:
- **Frontend**: React with TypeScript, Vite build system
- **Backend**: Express.js server
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Data**: Drizzle ORM with PostgreSQL schema (currently using in-memory storage)
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Component Structure**
The application uses a single-page architecture with component-based design:
- Single main route (`HomePage`) that composes multiple section components
- Sections include: Navigation, Hero, About, Products, Gallery, Contact, Footer, and WhatsAppButton
- All components are TypeScript-based React functional components with hooks

**State Management**
- TanStack Query (React Query) for server state management and API calls
- React Hook Form for form state and validation
- No global state management (Redux/Context) as the application is primarily presentational

**UI Component System**
- Uses Shadcn/ui component library built on Radix UI primitives
- Extensive set of pre-built accessible components (40+ component files)
- Consistent design system via Tailwind CSS configuration
- Custom theme with warm, natural color palette optimized for furniture showcase

**Styling Approach**
- Tailwind CSS utility-first methodology
- Custom color system using HSL values for light mode only
- Typography: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- Design tokens defined in `index.css` using CSS custom properties
- Responsive design with mobile-first breakpoints

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the API layer
- Development and production build configurations using Vite and esbuild
- Custom logging middleware for API requests

**API Design**
- RESTful endpoint pattern at `/api/*`
- Single primary endpoint: `POST /api/contact` for lead capture
- Request/response handling with JSON
- Error handling middleware with standardized error responses

**Data Layer**
- Currently uses in-memory storage via `MemStorage` class
- Schema defined with Drizzle ORM for PostgreSQL (ready for database migration)
- Single table: `contact_submissions` with fields: id, name, phone, email, message, createdAt
- Zod schemas for runtime validation aligned with database schema

**Email Notifications**
- Integration with FormSubmit.co service for sending email notifications
- Configured to notify admin email when new contact submissions are received
- No API keys required; uses FormSubmit.co's free tier

### Data Storage Solutions

**Current Implementation**
- In-memory storage using Map data structure
- Implementation lives in `server/storage.ts` with `IStorage` interface
- Submissions persist only during server runtime (lost on restart)

**Designed for PostgreSQL Migration**
- Database schema defined in `shared/schema.ts` using Drizzle ORM
- Drizzle configuration ready at `drizzle.config.ts`
- Uses `@neondatabase/serverless` for PostgreSQL connection
- Migration files configured to output to `./migrations` directory
- Schema uses Postgres-specific features (gen_random_uuid())

**Migration Path**
The application can be switched from in-memory to PostgreSQL by:
1. Provisioning a PostgreSQL database (Neon or standard Postgres)
2. Setting `DATABASE_URL` environment variable
3. Running `npm run db:push` to sync schema
4. Replacing `MemStorage` with Drizzle-based storage implementation

### External Dependencies

**Third-Party UI Libraries**
- Radix UI: Accessible component primitives for dialogs, dropdowns, forms, etc.
- Shadcn/ui: Pre-built component library wrapping Radix primitives
- Embla Carousel: Carousel/slider functionality
- Lucide React: Icon library
- Class Variance Authority: Utility for managing component variants
- React Day Picker: Calendar component

**Form & Validation**
- React Hook Form: Form state management
- Zod: Schema validation for forms and API data
- @hookform/resolvers: Integration between React Hook Form and Zod

**Data Fetching**
- TanStack Query (React Query): Server state management, caching, and data fetching

**Database & ORM**
- Drizzle ORM: TypeScript ORM for PostgreSQL
- Drizzle Kit: Migration tooling
- Drizzle Zod: Automatic Zod schema generation from Drizzle schemas
- @neondatabase/serverless: Postgres client for Neon serverless databases
- connect-pg-simple: PostgreSQL session store (installed but not actively used)

**Build Tools**
- Vite: Frontend build tool and dev server
- esbuild: Backend bundler for production builds
- TypeScript: Type system for both frontend and backend
- Tailwind CSS: Utility-first CSS framework with PostCSS

**Email Service**
- FormSubmit.co: Free form submission to email service (no API key required)
- Configured to send to `process.env.ADMIN_EMAIL` or default fallback

**Replit-Specific Plugins**
- @replit/vite-plugin-runtime-error-modal: Development error overlay
- @replit/vite-plugin-cartographer: Code navigation tool
- @replit/vite-plugin-dev-banner: Development environment banner

**Asset Management**
- Generated images stored in `attached_assets/generated_images/` directory
- Imported via Vite's asset resolution system
- 14 product and showcase images used throughout the site

**Routing**
- Wouter: Lightweight client-side routing library (React Router alternative)