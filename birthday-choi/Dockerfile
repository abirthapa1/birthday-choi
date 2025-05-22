# Base Image
FROM node:18-alpine AS builder

#Create a working directory
WORKDIR /app

# Copying package.json
COPY package.json ./

# Install dependencies
RUN npm i

# Copy rest of the files
COPY . .

# Build the app
RUN npm run build

# --- Stage 2: Production stage ---
FROM node:18-alpine

WORKDIR /app

# Copy only the built app from the builder
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev  # Only install production deps

EXPOSE 3000
CMD ["npm", "start"]