# 🚀 GitHub to cPanel Deployment Guide

## 📋 Overview
Deploy your Elvish Name Generator from GitHub directly to cPanel hosting using Git Version Control.

## 🔧 Method 1: cPanel Git™ Version Control (Recommended)

### Prerequisites
- cPanel hosting with Git support enabled
- GitHub repository: `https://github.com/farazahmedzai/alvishname`
- SSH key access to your cPanel account

### Step 1: Set Up cPanel Git Repository
1. **Login to cPanel**
2. **Find "Git™ Version Control"** in the Files section
3. **Click "Create"** to add a new repository
4. **Configure Repository:**
   - **Repository Root**: `/public_html/` (your domain root)
   - **Repository URL**: `https://github.com/farazahmedzai/alvishname.git`
   - **Branch**: `main` (or your primary branch)

### Step 2: Deploy Static Files
After cloning, you'll need to move the deployment files:
1. **Navigate to File Manager** in cPanel
2. **Go to your repository directory**
3. **Copy these files to public_html:**
   - `cpanel-upload/index.html` → `public_html/index.html`
   - `cpanel-upload/.htaccess` → `public_html/.htaccess`
   - `cpanel-upload/robots.txt` → `public_html/robots.txt`
   - `cpanel-upload/sitemap.xml` → `public_html/sitemap.xml`

### Step 3: Update Domain References
**Important**: Replace `elvishnamegenerator.com` with your actual domain in:
- `public_html/index.html`
- `public_html/sitemap.xml`
- `public_html/robots.txt`

## 🔧 Method 2: Manual Git Deployment

### Step 1: Clone Repository on cPanel
1. **Access cPanel Terminal** or **SSH to your hosting**
2. **Navigate to public_html:**
   ```bash
   cd public_html
   ```
3. **Clone your repository:**
   ```bash
   git clone https://github.com/farazahmedzai/alvishname.git temp-repo
   ```

### Step 2: Deploy Files
```bash
# Copy deployment files
cp temp-repo/cpanel-upload/index.html ./
cp temp-repo/cpanel-upload/.htaccess ./
cp temp-repo/cpanel-upload/robots.txt ./
cp temp-repo/cpanel-upload/sitemap.xml ./

# Clean up
rm -rf temp-repo
```

### Step 3: Set Permissions
```bash
chmod 644 index.html
chmod 644 .htaccess
chmod 644 robots.txt
chmod 644 sitemap.xml
```

## 🔧 Method 3: FTP with GitHub Actions (Advanced)

### Step 1: Create GitHub Action
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to cPanel

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build project
      run: npm run build
      
    - name: Deploy via FTP
      uses: SamKirkland/FTP-Deploy-Action@v4.3.4
      with:
        server: ${{ secrets.FTP_SERVER }}
        username: ${{ secrets.FTP_USERNAME }}
        password: ${{ secrets.FTP_PASSWORD }}
        local-dir: ./cpanel-upload/
        server-dir: /public_html/
```

### Step 2: Configure GitHub Secrets
Add these secrets in your GitHub repository settings:
- `FTP_SERVER`: Your cPanel FTP server address
- `FTP_USERNAME`: Your cPanel username
- `FTP_PASSWORD`: Your cPanel password

## 📁 Repository Structure
```
alvishname/
├── cpanel-upload/           # Ready-to-deploy files
│   ├── index.html          # Static application
│   ├── .htaccess           # Server configuration
│   ├── robots.txt          # SEO directives
│   └── sitemap.xml         # Site structure
├── client/                 # Source code
├── server/                 # Backend source
├── deploy.sh               # Deployment script
└── GITHUB_CPANEL_DEPLOYMENT.md
```

## 🎯 Quick Start (Recommended)

### For Most cPanel Hosts:
1. **Download the 4 files** from `cpanel-upload/` directory
2. **Upload via cPanel File Manager:**
   - `index.html`
   - `.htaccess`
   - `robots.txt` 
   - `sitemap.xml`
3. **Update domain references** in the files
4. **Test your site** - should work immediately!

### For Git-enabled cPanel:
1. **Use cPanel Git™ Version Control** to clone your repository
2. **Copy deployment files** to public_html
3. **Update domain references**
4. **Set up automatic deployments** for future updates

## 🔍 Verification Steps

After deployment:
1. ✅ Visit your domain - site loads
2. ✅ Test name generation functionality
3. ✅ Check `yourdomain.com/robots.txt`
4. ✅ Check `yourdomain.com/sitemap.xml`
5. ✅ Verify mobile responsiveness
6. ✅ Test SSL certificate (HTTPS)

## 🚨 Troubleshooting

### Issue: Files not updating
**Solution**: Clear cPanel file cache or restart Apache

### Issue: .htaccess not working
**Solution**: Check if mod_rewrite is enabled in your hosting

### Issue: Git not available
**Solution**: Use Manual upload method instead

### Issue: Domain not resolving
**Solution**: Check DNS propagation (24-48 hours)

## 🎉 Success!

Your Elvish Name Generator is now deployed from GitHub to cPanel hosting!

The site will:
- ✅ Load instantly on your domain
- ✅ Generate authentic Elvish names
- ✅ Work perfectly on mobile devices
- ✅ Start ranking for "elvish name generator" keywords
- ✅ Handle all SEO optimization automatically

**Repository**: https://github.com/farazahmedzai/alvishname
**Deployment**: Complete static application ready for any cPanel hosting