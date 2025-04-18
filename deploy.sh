#!/bin/bash

APP_DIR="/var/www/portfolio"
APP_NAME="portfolio"

echo "📦 Switching to app directory..."
cd $APP_DIR || exit

echo "🔄 Pulling latest changes from GitHub..."
git pull origin main

echo "📥 Installing dependencies..."
npm install

echo "🛠 Building Next.js app..."
npm run build

echo "🚀 Restarting app with PM2..."
pm2 restart $APP_NAME || pm2 start npm --name "$APP_NAME" -- start
pm2 save

echo "✅ Deployment finished!"
