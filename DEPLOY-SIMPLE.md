# DataNerd - Deployment Guide

## Quick Start Options

### Option 1: Docker (Recommended)

**Prerequisites:**
- Docker and Docker Compose installed

**Steps:**
```bash
# Clone and navigate
cd datanerd-site

# Start all services
docker-compose up -d

# Access
# Frontend: http://localhost
# Backend: http://localhost:8001/api/
```

### Option 2: Local Development

**Frontend:**
```bash
cd frontend
npm install
npm start  # Runs on http://localhost:3000
```

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload  # Runs on http://localhost:8001
```

**MongoDB:**
```bash
# Install and start MongoDB locally
# Or use MongoDB Atlas (cloud)
```

### Option 3: Vercel (Frontend Only)

**Prerequisites:**
- Vercel CLI: `npm i -g vercel`

**Steps:**
```bash
# Deploy frontend
vercel --prod

# Set environment variable in Vercel dashboard:
# REACT_APP_BACKEND_URL = your-backend-url
```

**Backend:** Deploy to Railway, Render, or any Python hosting service.

### Option 4: VPS (Ubuntu/Debian)

```bash
# Install dependencies
sudo apt update
sudo apt install -y docker.io docker-compose nginx

# Clone project
git clone <your-repo>
cd datanerd-site

# Start with Docker
docker-compose up -d

# Configure domain (optional)
# Edit nginx.conf with your domain
# Setup SSL with Let's Encrypt
```

## Environment Variables

**Frontend (.env):**
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend (.env):**
```
MONGO_URL=mongodb://localhost:27017/datanerd
DB_NAME=datanerd
CORS_ORIGINS=*
```

## Troubleshooting

**Port conflicts:**
- Frontend: Change port in docker-compose.yml (80:80 → 3000:80)
- Backend: Change port in docker-compose.yml (8001:8001 → 8002:8001)

**MongoDB connection:**
- Local: Use `mongodb://localhost:27017/datanerd`
- Docker: Use `mongodb://mongo:27017/datanerd`
- Cloud: Use MongoDB Atlas connection string

**Build errors:**
- Clear cache: `docker-compose build --no-cache`
- Check Node version: Requires Node 16+
- Check Python version: Requires Python 3.8+
