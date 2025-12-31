# 🚀 GitHub + Vercel Deployment Guide
## AMA eBooks - Ang Malayang Agila

Complete step-by-step guide para ma-deploy ang AMA eBooks sa Vercel gamit ang GitHub.

---

## 📋 Prerequisites

Siguruha nga naa kay:
- ✅ GitHub account (https://github.com)
- ✅ Vercel account (https://vercel.com) - pwede mo sign in gamit ang GitHub
- ✅ Git installed sa imong computer

---

## 🔧 Step 1: Setup Git sa Local

### Install Git (kung wala pa)

**Windows:**
```bash
# Download from: https://git-scm.com/download/win
# Or use winget:
winget install Git.Git
```

**Mac:**
```bash
brew install git
```

**Linux:**
```bash
sudo apt install git
```

### Configure Git (first time ra ni)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 📁 Step 2: Initialize Git Repository

```bash
# Navigate to your project folder
cd path/to/ama-ebooks

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: AMA eBooks - Ang Malayang Agila"
```

---

## 🌐 Step 3: Create GitHub Repository

### Option A: Via GitHub Website (Easiest)

1. **Go to GitHub:**
   - Visit: https://github.com/new
   - Or click "+" icon → "New repository"

2. **Fill in details:**
   ```
   Repository name: ama-ebooks
   Description: AMA eBooks - Digital Library of The Fraternal Order of Eagles
   Visibility: Public (or Private, up to you)
   ⚠️ DO NOT initialize with README (we already have files)
   ```

3. **Create repository**

4. **Copy the repository URL:**
   ```
   Example: https://github.com/YOUR-USERNAME/ama-ebooks.git
   ```

### Option B: Via GitHub CLI
```bash
gh repo create ama-ebooks --public --source=. --remote=origin --push
```

---

## 📤 Step 4: Push to GitHub

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR-USERNAME/ama-ebooks.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

Kung mangayo ug credentials:
- Username: (your GitHub username)
- Password: (use Personal Access Token, dili password)

### How to create Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Select "repo" scope
3. Copy the token and use it as password

---

## ☁️ Step 5: Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended for Beginners)

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Sign in with GitHub

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find "ama-ebooks" repository
   - Click "Import"

3. **Configure Project:**
   ```
   Framework Preset: Other
   Root Directory: ./
   Build Command: (leave empty)
   Output Directory: (leave empty)
   Install Command: (leave empty)
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait 30-60 seconds
   - Done! 🎉

5. **Get Your URL:**
   ```
   Example: https://ama-ebooks.vercel.app
   or your custom domain
   ```

### Method 2: Vercel CLI (For Advanced Users)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# Set up and deploy? Y
# Which scope? (Select your account)
# Link to existing project? N
# What's your project's name? ama-ebooks
# In which directory is your code located? ./
# Want to override settings? N

# Production deployment
vercel --prod
```

---

## 🔄 Step 6: Auto-Deployment Setup

Good news! Vercel automatically sets up auto-deployment:

✅ **Every push to `main` branch = Auto deploy to production**
✅ **Every push to other branches = Preview deployment**

### How it works:
```bash
# Make changes to your code
# Example: Update a book or fix a bug

# Stage changes
git add .

# Commit
git commit -m "Updated content: Added new eBook"

# Push to GitHub
git push origin main

# Vercel automatically deploys in ~30 seconds! 🚀
```

---

## 📝 Step 7: Update Your App Content

### To add/edit books:
1. Open your deployed site: `https://ama-ebooks.vercel.app`
2. Click "Admin" button
3. Enter password (default: `admin123`)
4. Add/Edit/Delete books
5. Changes are saved in browser's localStorage

⚠️ **Note:** Changes sa admin panel are stored locally. Para permanent changes sa code, edit ang files sa GitHub.

---

## 🎨 Step 8: Customize Domain (Optional)

### Add Custom Domain:

1. **In Vercel Dashboard:**
   - Go to your project
   - Settings → Domains
   - Add domain (e.g., `amaebooks.com`)

2. **Update DNS:**
   - Add these records sa imong domain provider:
   ```
   Type: CNAME
   Name: www (or @)
   Value: cname.vercel-dns.com
   ```

3. **Wait for propagation** (5-30 minutes)

---

## 🔧 Common Git Commands

### Update code:
```bash
# Pull latest changes from GitHub
git pull origin main

# Make changes to files
# ...

# Stage all changes
git add .

# Commit with message
git commit -m "Your commit message here"

# Push to GitHub (auto-deploys to Vercel)
git push origin main
```

### Check status:
```bash
git status              # See what changed
git log                 # See commit history
git diff                # See exact changes
```

### Branches (for testing):
```bash
git checkout -b feature/new-design    # Create new branch
git push origin feature/new-design    # Push branch (creates preview)
git checkout main                      # Switch back to main
git merge feature/new-design          # Merge changes
```

---

## 📊 Vercel Dashboard Features

### Analytics (Free tier includes):
- Page views
- Visitor count
- Top pages
- Geographic data

### Deployment History:
- View all deployments
- Rollback to previous versions
- Preview builds
- Deployment logs

### Environment Variables:
- Settings → Environment Variables
- Add secrets or config

---

## 🐛 Troubleshooting

### Issue: "Git not recognized"
```bash
# Add Git to PATH or reinstall
# Windows: Add C:\Program Files\Git\cmd to PATH
```

### Issue: "Permission denied (publickey)"
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add to GitHub
# Settings → SSH and GPG keys → New SSH key
# Copy from: cat ~/.ssh/id_ed25519.pub
```

### Issue: "Vercel build failed"
```bash
# Check vercel.json configuration
# Check file structure
# View deployment logs in Vercel dashboard
```

### Issue: "Service Worker not working"
```bash
# Vercel automatically serves over HTTPS ✅
# Check sw.js is in root directory
# Check manifest.json is accessible
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

### Issue: "PWA not installable"
```bash
# Make sure deployed to HTTPS (Vercel uses HTTPS by default ✅)
# Check manifest.json is valid
# Check icons are accessible
# Test with Lighthouse in Chrome DevTools
```

---

## 📱 Testing Your Deployment

### 1. Test PWA Features:
```bash
# In Chrome DevTools (F12)
Application → Manifest ✅
Application → Service Workers ✅
Lighthouse → Run audit → PWA score should be 90+ ✅
```

### 2. Test Installation:
- Desktop: Look for install icon in address bar
- Mobile: "Add to Home Screen" in browser menu
- Both: Install banner should appear

### 3. Test Offline:
- Open DevTools → Network tab
- Check "Offline" checkbox
- Reload page - should still work! ✅

---

## 🔐 Security Best Practices

### Update Admin Password:
1. Open deployed site
2. Open browser console (F12)
3. Run:
```javascript
localStorage.setItem('adminPassword', 'your-strong-password-here');
```

### Enable 2FA on GitHub:
- GitHub → Settings → Password and authentication
- Enable two-factor authentication

### Vercel Security:
- Settings → Security
- Enable "Deployment Protection"
- Add "Password Protection" if needed

---

## 📈 Monitoring & Updates

### Weekly Tasks:
- ✅ Check Vercel analytics
- ✅ Review deployment logs
- ✅ Test PWA functionality
- ✅ Update content as needed

### Monthly Tasks:
- ✅ Update dependencies (if any added)
- ✅ Review security settings
- ✅ Check browser compatibility
- ✅ Backup data (export localStorage)

---

## 🎯 Quick Reference

### Important URLs:
```
GitHub Repo: https://github.com/YOUR-USERNAME/ama-ebooks
Vercel Dashboard: https://vercel.com/dashboard
Live Site: https://ama-ebooks.vercel.app
```

### Common Commands:
```bash
# Daily workflow
git pull                           # Get latest
# ... make changes ...
git add .                          # Stage
git commit -m "Description"        # Commit
git push                           # Deploy

# View deployment
vercel --prod                      # Force production deploy
vercel ls                          # List deployments
vercel logs                        # View logs
```

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **GitHub Docs:** https://docs.github.com
- **Git Tutorial:** https://git-scm.com/docs/gittutorial
- **PWA Docs:** https://web.dev/progressive-web-apps/

---

## 🎓 Video Tutorial Suggestions

Search YouTube for:
1. "How to deploy to Vercel"
2. "GitHub basics tutorial"
3. "Git for beginners"
4. "Progressive Web Apps tutorial"

---

## ✅ Deployment Checklist

Before pushing to production:

- [ ] All files in repository
- [ ] .gitignore properly configured
- [ ] vercel.json configured
- [ ] manifest.json has correct URLs
- [ ] All icons generated
- [ ] Service worker tested locally
- [ ] Admin password changed from default
- [ ] Test on multiple devices
- [ ] PWA installable
- [ ] Offline mode working

---

## 🎉 Success!

Kung naa nay tanan:
1. ✅ Code sa GitHub
2. ✅ Auto-deployment setup
3. ✅ Live sa Vercel
4. ✅ PWA working
5. ✅ HTTPS enabled

**Congratulations!** Your AMA eBooks is now live! 🦅

---

**Developed by Godmisoft | Heber Mayormita**

*Para sa additional help, feel free to reach out!*
