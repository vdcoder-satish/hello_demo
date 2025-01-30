# Use Node.js 16 as the base image
FROM node:16.20.2 

# Set the working directory inside the container
WORKDIR /usr/src/app 

# Copy package.json and package-lock.json (if exists) to install dependencies
COPY package*.json ./ 

# Install dependencies
RUN npm install 

# Copy the rest of the application files
COPY . . 

# Expose port 3000
EXPOSE 3000 

# Run the application (use node instead of nodemon for production)
CMD ["node", "app.js"]
