# Portfolio Website

## Overview

This is a full-stack portfolio website built with React and Express, showcasing a professional developer's work, skills, and experience. The application features a modern single-page design with smooth scrolling navigation, contact form functionality, and responsive design optimized for both desktop and mobile devices.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Component Library**: Radix UI primitives with shadcn/ui components
- **State Management**: React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store
- **Validation**: Zod for schema validation
- **Development**: Hot reload with Vite integration

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure
- **Contact Messages Table**: Stores form submissions with name, email, subject, message, and timestamp
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations

### API Endpoints
- `POST /api/contact` - Submit contact form messages
- `GET /api/contact-messages` - Retrieve all contact messages (admin functionality)

### Frontend Sections
- **Hero Section**: Introduction with professional headshot and call-to-action
- **About Section**: Personal information and statistics
- **Experience Section**: Work history with technologies used
- **Education Section**: Academic background and certifications
- **Skills Section**: Technical and soft skills with visual progress indicators
- **Projects Section**: Portfolio showcase with project details and links
- **Certificates Section**: Professional certifications and achievements
- **Contact Section**: Contact form with real-time validation

### Storage Layer
- **Production**: PostgreSQL with Drizzle ORM
- **Development**: In-memory storage fallback for quick development
- **Data Models**: Users and contact messages with full TypeScript support

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form
   - Form data validated with Zod schema
   - Data sent to `/api/contact` endpoint
   - Server validates and stores in database
   - Success/error response returned to client
   - Toast notification shown to user

2. **Navigation**:
   - Smooth scroll navigation between sections
   - Active section tracking with scroll position
   - Mobile-responsive hamburger menu

3. **Content Rendering**:
   - Static content rendered from component data
   - Animations triggered on scroll with Framer Motion
   - Responsive images with optimized loading

## External Dependencies

### Core Framework Dependencies
- React 18 with TypeScript support
- Express.js for server framework
- Vite for build tooling and development server

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- Framer Motion for animations
- Lucide React for icons

### Database and Validation
- Drizzle ORM for database operations
- Neon Database for serverless PostgreSQL
- Zod for schema validation
- React Hook Form for form management

### Development Tools
- TypeScript for type safety
- ESBuild for server bundling
- PostCSS for CSS processing
- Replit integration for development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Server Build**: ESBuild bundles Express server with all dependencies
3. **Database Migration**: Drizzle Kit handles schema migrations
4. **Asset Optimization**: Vite optimizes images, CSS, and JavaScript

### Production Configuration
- Server runs on Node.js with ESM modules
- Static files served from Express with Vite middleware in development
- Database connections managed through environment variables
- Session storage configured for PostgreSQL

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment specification (development/production)

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```%         
