# Project Management System

A lightweight backend service for a project management application built with TypeScript and Express.

## Recent Changes

This update introduces a structured server setup with:

- A TypeScript-based Express application
- Middleware for security, CORS, compression, JSON parsing, and request logging
- A health check endpoint at `/health`
- Environment-based configuration for the server port
- Development and production scripts for running the API

## Project Structure

```text
server/
  src/
    app.ts          # Express app configuration and middleware
    server.ts       # Server startup entry point
    config/
      env.ts        # Environment variable loader
```

## Tech Stack

- Node.js
- TypeScript
- Express
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

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The API will be available at:
   ```text
   http://localhost:5000
   ```

## Available Scripts

- `npm run dev` — start the server in development mode with hot reload
- `npm run build` — compile the TypeScript project
- `npm start` — run the built server

## Environment Variables

The server reads the following values from a `.env` file:

- `PORT` — server port (defaults to `5000`)
- `NODE_ENV` — runtime environment (defaults to `development`)

## API Endpoints

- `GET /health` — returns a simple success response confirming the server is running
