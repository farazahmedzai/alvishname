#!/bin/bash

# GitHub to cPanel Deployment Script
# This script builds and deploys your Elvish Name Generator to cPanel hosting

echo "🚀 Starting GitHub to cPanel deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the static version
echo "🔨 Building static version..."
npm run build

# Create deployment directory
echo "📁 Creating deployment files..."
mkdir -p deployment

# Copy static files from cpanel-upload
cp cpanel-upload/index.html deployment/
cp cpanel-upload/.htaccess deployment/
cp cpanel-upload/robots.txt deployment/
cp cpanel-upload/sitemap.xml deployment/

echo "✅ Deployment files ready in 'deployment' directory"
echo ""
echo "📋 Next steps:"
echo "1. Commit and push these changes to GitHub"
echo "2. Use cPanel Git™ Version Control to connect your repository"
echo "3. Deploy the 'deployment' directory to your public_html folder"
echo ""
echo "🎉 Your Elvish Name Generator is ready for cPanel deployment!"