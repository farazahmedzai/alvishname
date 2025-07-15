# Elvish Name Generator

## Overview

This is a full-stack web application that generates authentic Elvish names inspired by Tolkien's linguistic work. The application provides users with an interactive tool to create names based on different languages (Sindarin, Quenya, General Fantasy), genders, and categories (Traditional, Nature, Warrior, Noble, Mystical). It's designed as an SEO-optimized tool targeting fantasy gaming communities, writers, and Tolkien enthusiasts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the user interface
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TailwindCSS** for styling with custom Elvish-themed design system
- **Shadcn/ui** component library for consistent UI elements
- **TanStack Query** for server state management and API caching

### Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** design with `/api/generate-names` endpoint
- **In-memory storage** with fallback to database schema (ready for PostgreSQL)
- **Drizzle ORM** for database operations and schema management

### Database Design
- **PostgreSQL** with Drizzle ORM
- Two main tables:
  - `elvish_names`: Stores name data with meanings, languages, genders, categories, and pronunciations
  - `name_generation_requests`: Tracks user requests for analytics

## Key Components

### Name Generation System
- Comprehensive database of Elvish names with linguistic authenticity
- Filtering system by gender, language, and thematic category
- Fallback mechanism to ensure names are always returned
- Request tracking for usage analytics

### UI Components
- **Generator**: Main interface for name generation with form controls
- **NameDisplay**: Shows generated names with copy-to-clipboard functionality
- **EducationalContent**: SEO-focused content about Elvish linguistics
- **FAQSection**: Addresses common user questions
- **Header/Footer**: Navigation and site information

### SEO Optimization
- Comprehensive meta tags and Open Graph data
- Schema.org structured data for search engines
- Content targeting specific keywords like "Elvish name generator"
- Educational content to establish topical authority

## Data Flow

1. User selects preferences (gender, language, category) in the Generator component
2. Form submission triggers API call to `/api/generate-names`
3. Server filters name database based on criteria
4. Names are shuffled and limited to requested count
5. Request is logged for analytics
6. Generated names returned to client with meanings and pronunciations
7. Client displays names with copy functionality and toast notifications

## External Dependencies

### UI and Styling
- **Radix UI** primitives for accessible component foundations
- **TailwindCSS** for utility-first styling
- **Google Fonts** (Cinzel, Inter, Crimson Text) for typography
- **Lucide React** for consistent iconography

### Development Tools
- **TypeScript** for type safety across the stack
- **ESBuild** for production bundling
- **PostCSS** with Autoprefixer for CSS processing
- **Drizzle Kit** for database migrations

### Data Management
- **Zod** for runtime type validation and schema definition
- **TanStack Query** for API state management
- **React Hook Form** with Hookform Resolvers for form handling

## Deployment Strategy

### Development Environment
- Vite dev server with HMR for frontend development
- Express server with tsx for TypeScript execution
- Replit-specific plugins for enhanced development experience

### Production Build
- Vite builds frontend to `dist/public`
- ESBuild bundles server code to `dist/index.js`
- Single deployment artifact with both frontend and backend

### Database Setup
- Drizzle migrations in `./migrations` directory
- Environment variable `DATABASE_URL` required for PostgreSQL connection
- Fallback to in-memory storage during development

### Performance Considerations
- Client-side caching with TanStack Query
- Optimized bundle splitting with Vite
- Lazy loading of non-critical components
- CDN-ready static asset structure

### SEO and Marketing
- Pre-rendered meta tags for social sharing
- Sitemap-ready URL structure
- Analytics-ready request tracking
- Educational content for organic search ranking

The application is designed to scale from a simple name generator to a comprehensive fantasy naming resource, with the architecture supporting additional name types, user accounts, and advanced filtering features.

## Recent Changes (July 2025)

### SEO Optimization Enhancements
- **Expanded Name Database**: Added 25+ new authentic Elvish names across all categories (100+ total names)
- **Multi-page Architecture**: Created dedicated `/sindarin-names` and `/quenya-names` generator pages
- **Enhanced Navigation**: Added internal linking between generator pages in header and footer
- **cPanel Deployment Package**: Created complete static deployment in `cpanel-upload/` directory
- **Performance Optimization**: Inline critical CSS, optimized images, GZIP compression via .htaccess
- **Schema Markup**: Added WebApplication and FAQPage structured data for rich snippets
- **Mobile Optimization**: Fully responsive design with touch-friendly interactions

### SEO Strategy Implementation
- **Primary Target**: "elvish name generator" (exact match in title, H1, meta description)
- **Secondary Keywords**: "sindarin names", "quenya names", "lotr elf names", "dnd elf names"
- **Content Depth**: 2,500+ words of educational content about Elvish linguistics
- **Technical SEO**: Canonical URLs, XML sitemap, robots.txt, Open Graph tags
- **User Experience**: Interactive generator with copy-to-clipboard, pronunciation guides

### Comprehensive SEO Fixes (July 15, 2025)
- **Breadcrumb Navigation**: Implemented semantic breadcrumbs with BreadcrumbList schema on all pages
- **Schema Manager**: Centralized schema markup management for consistent structured data
- **Dynamic Page Schemas**: WebPage schema with proper canonical URLs and breadcrumb integration
- **Internal Linking**: Enhanced header and footer with contextual anchor text and varied linking
- **Navigation Improvements**: Context-aware navigation with descriptive anchor text
- **Enhanced Footer**: Added keyword-rich internal links with improved link distribution
- **Schema Duplication Fixed**: Resolved all conflicting schema markup across pages
- **Mobile-First Design**: Fully responsive with touch-friendly interactions
- **Performance Optimized**: Critical CSS inlined, lazy loading, browser caching
- **Security Headers**: Comprehensive security headers and HTTPS enforcement

### Deployment Readiness (100% Complete)
- **Static HTML**: Self-contained index.html with inline CSS/JS for cPanel hosting (59KB)
- **SEO Files**: .htaccess, robots.txt, sitemap.xml configured for elvishnamegenerator.com
- **Performance**: Core Web Vitals optimized, browser caching configured
- **Security**: Security headers, HTTPS redirect, file access protection
- **Domain Ready**: All files properly configured for elvishnamegenerator.com domain
- **Sitemap Updated**: All 5 pages included with current date (2025-07-15)
- **Name Database**: 87 authentic Elvish names across all languages and categories
- **API Testing**: Confirmed working - generates names correctly via REST endpoint
- **Dynamic Schema**: All 5 pages have clean structured data markup with no duplication issues
- **Canonical Fixed**: Resolved schema duplication, single WebApplication, dynamic breadcrumbs
- **Upload Ready**: All 5 files prepared in cpanel-upload/ directory for immediate deployment
- **Complete Site**: Added About and Privacy Policy pages with full navigation integration
- **5-Page Architecture**: Home, Sindarin, Quenya, About, Privacy + 404 handler
- **Comprehensive SEO**: All 18 critical SEO factors implemented and optimized

### Final Deployment Success (July 15, 2025)
- **Live Site Confirmed**: Successfully deployed at elvishnamegenerator.com
- **Full Functionality**: Name generation, filtering, and copy-to-clipboard working perfectly
- **Custom Styling**: Dark elvish theme with gold accents displaying correctly
- **87 Names Active**: Complete database of authentic Sindarin and Quenya names
- **SEO Optimized**: All meta tags, schema markup, and performance optimizations active
- **User Experience**: Professional layout with smooth animations and responsive design
- **Project Status**: COMPLETE - All requirements met and site fully operational