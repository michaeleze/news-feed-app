# Builder Context: Install dependencies (only when needed)
FROM node:16-alpine AS builder

# Copy package.json and package-lock.json
COPY package*.json ./

# set node environment
ENV NODE_ENV production

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM nginx:stable-alpine

# Expose port 80
EXPOSE 80

# Start application
CMD ["npm", "start"]
