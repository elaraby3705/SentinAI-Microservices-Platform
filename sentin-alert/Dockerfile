# 1. Use a lightweight Node.js base image (Alpine Linux)
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json first (for efficient caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install --production

# 5. Copy the rest of the app code
COPY . .

# 6. Expose the port
EXPOSE 3000

# 7. Start the server
CMD ["node", "server.js"]