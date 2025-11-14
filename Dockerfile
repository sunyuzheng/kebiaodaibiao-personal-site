# Multi-stage build for Vite React app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies (express for serving static files)
RUN npm ci --only=production

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Copy server file
COPY server.js ./

# Expose port (PORT will be set at runtime by Koyeb)
EXPOSE 8000

# Start application using PORT environment variable
# Use shell form (sh -c) to ensure environment variable expansion
CMD sh -c "node server.js"

