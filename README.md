# SportParadis - Development Guide

A full-stack sports facility management platform built with React, Node.js, and PostgreSQL.

## 🚀 Quick Start

### Prerequisites
- **Docker** and **Docker Compose**

### Run Everything Locally

```bash
# Clone the repository
git clone <your-repo-url>
cd sportparadis

# Start all services
docker-compose up --build

# The application will be available at:
# Frontend: http://localhost:3000
# Backend API: http://localhost:4000
```

### Development Commands

```bash
# Start services in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild and restart
docker-compose up --build
```

## 📁 Project Structure

- `frontend/` - React app (Vite)
- `backend/` - Node.js/Express API (TypeScript)
- `db/` - PostgreSQL database scripts
- `nginx/` - Reverse proxy configuration

For detailed project information, see [AI_README.md](./AI_README.md). 