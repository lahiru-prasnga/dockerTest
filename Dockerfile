# Use an official Node.js runtime as a base image
FROM node:21

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application source code to the container
COPY . .

# Expose the port on which the app will run
EXPOSE 4000

# Define the command to run your application
CMD ["node", "server.js"]
