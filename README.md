# Project Management System

A lightweight backend service for a project management application built with TypeScript, Express, and Prisma.

## Recent Changes

This update introduces a more complete backend foundation with:

- A TypeScript-based Express application
- Middleware for security, CORS, compression, JSON parsing, and request logging
- A health check endpoint at `/api/v1/health`
- Environment-based server configuration
- Prisma setup for database access and migrations
- A centralized Prisma configuration file for migration connection settings

## Project Structure

```text
server/
  src/
    app.ts              # Express app configuration and middleware
    server.ts           # Server startup entry point
    routes/
      health.routes.ts  # Health endpoint route
    config/
      env.ts            # Environment variable loader
prisma/
  schema.prisma         # Prisma schema definition
prisma.config.ts       # Prisma migration and datasource configuration
```

## Tech Stack

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Helmet
- CORS
- Compression
- Morgan
- dotenv

## Getting Started

1. Navigate to the server folder:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root with the required variables:
   ```env
   PORT=5000
   NODE_ENV=development
   DATABASE_URL=postgresql://user:password@localhost:5432/project_management
   ```

4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. The API will be available at:
   ```text
   http://localhost:5000
   ```

## Available Scripts

- `npm run dev` — start the server in development mode with hot reload
- `npm run build` — compile the TypeScript project
- `npm start` — run the built server

## Environment Variables

The server and Prisma setup read the following values from a `.env` file:

- `PORT` — server port (defaults to `5000`)
- `NODE_ENV` — runtime environment (defaults to `development`)
- `DATABASE_URL` — PostgreSQL connection string used by Prisma

## API Endpoints

- `GET /api/v1/health` — returns a simple success response confirming the server is running
