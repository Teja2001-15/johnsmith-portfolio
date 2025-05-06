# Use official Node image to build the app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app and build it
COPY . .
RUN npm run build

# --- Production image ---
FROM nginx:alpine

# Copy the build output to nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default nginx configuration and copy custom one (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
