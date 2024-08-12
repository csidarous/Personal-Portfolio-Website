#!/bin/bash

# Navigate to the project directory
cd /public_html
# Pull the latest changes from GitHub
git pull origin main

# Install dependencies
npm install

# Build the project
npm run build

# (Optional) Restart any services, e.g., a Node.js server
pm2 start npm --name "my-next-app" -- start


