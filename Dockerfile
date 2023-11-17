# Builder Context: Install dependencies (only when needed)
FROM node:16-alpine AS builder

# Copy package.json and package-lock.json
COPY package*.json ./

# set node environment
ENV NODE_ENV production

# Install dependencies
RUN yarn

# Copy the rest of your app's source code
COPY . .

# Build the application
RUN yarn build

# Expose port 80
EXPOSE 80

# Start application
CMD ["yarn", "start"]
