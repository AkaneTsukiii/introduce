# Personal Links Website

## Overview

This is a full-stack web application built to showcase personal social media links and profiles. The application serves as a digital business card or "link in bio" style website, featuring a clean, modern interface with social media integration.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: shadcn/ui components with Tailwind CSS
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **React Components**: Built using functional components with hooks
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme and responsive design
- **State Management**: TanStack Query for API state, React hooks for local state
- **Forms**: React Hook Form with Zod validation integration

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Session Management**: Built-in session handling capabilities

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Migrations**: Drizzle Kit for database migrations and schema management

### UI/UX Design
- **Dark Theme**: Primary dark color scheme with purple accent colors
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Component Library**: Extensive set of reusable UI components
- **Accessibility**: Built with Radix UI primitives for accessibility compliance

## Data Flow

1. **Client Requests**: Frontend makes HTTP requests to backend API endpoints
2. **API Processing**: Express server processes requests and interacts with storage layer
3. **Database Operations**: Drizzle ORM handles database queries and mutations
4. **Response Handling**: TanStack Query manages API responses and caching
5. **State Updates**: React components re-render based on updated state

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database ORM
- **wouter**: Lightweight client-side routing

### UI Dependencies
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

The application is configured for deployment with the following approach:

1. **Build Process**: Vite builds the frontend, esbuild bundles the backend
2. **Environment Variables**: DATABASE_URL required for PostgreSQL connection
3. **Production Mode**: NODE_ENV=production for optimized runtime
4. **Static Assets**: Frontend built to `dist/public` directory
5. **Server Bundle**: Backend bundled to `dist/index.js`

The build process creates a single deployable package with both frontend assets and backend server code.

## Recent Changes
- July 01, 2025: Updated to pure black background theme as requested
- July 01, 2025: Implemented file-based avatar rotation system with multiple avatar variants
- July 01, 2025: Created GitHub Pages compatible structure with root index.html
- July 01, 2025: Removed follower/stats display as requested, focusing on clean link presentation

## Changelog
- July 01, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.