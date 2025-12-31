# 🚀 Quick Start - GitHub + Vercel Deployment

## Para sa mga dali lang! (3 Easy Steps)

### ✅ Prerequisites
- GitHub account
- Vercel account (sign in gamit ang GitHub)
- Git installed sa computer

---

## 🎯 Method 1: Automated Setup (Easiest!)

### Windows:
```bash
# Double-click: setup.bat
# OR run in CMD:
setup.bat
```

### Mac/Linux:
```bash
# Make executable:
chmod +x setup.sh

# Run:
./setup.sh
```

Ang script mo-guide nimo through the entire setup! 🎉

---

## 🎯 Method 2: Manual Setup (Detailed Control)

### Step 1: Push to GitHub
```bash
# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: AMA eBooks"

# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/ama-ebooks.git

# Push
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

**Via Vercel Dashboard:**
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! 🎉

**Via Vercel CLI:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## 📝 After Deployment

Your app will be live at:
```
https://ama-ebooks.vercel.app
```

Or your custom domain!

### Auto-Deployment:
✅ Every push to GitHub = Auto deploy!
```bash
# Update code
git add .
git commit -m "Updated content"
git push

# Vercel automatically deploys! 🚀
```

---

## 🔧 Important Files

- `vercel.json` - Vercel configuration
- `.gitignore` - Files to ignore
- `manifest.json` - PWA configuration
- `sw.js` - Service Worker

⚠️ Don't delete these files!

---

## 📱 Test Your PWA

1. Open your Vercel URL
2. Click "Install" button (appears automatically)
3. Or use browser menu: "Install App"
4. Test offline mode in DevTools

---

## 🎨 Customize

### Change Admin Password:
1. Open browser console (F12)
2. Run:
```javascript
localStorage.setItem('adminPassword', 'new-password');
```

### Add Custom Domain:
1. Vercel Dashboard → Your Project
2. Settings → Domains
3. Add your domain
4. Update DNS records

---

## 📚 Full Documentation

Para sa detailed guide:
- **GITHUB_VERCEL_DEPLOYMENT.md** - Complete step-by-step
- **README.md** - App features and usage
- **GOOGLE_PLAY_DEPLOYMENT.md** - Deploy to Play Store

---

## ❓ Need Help?

### Common Issues:

**"Git not found"**
- Install Git: https://git-scm.com

**"Permission denied"**
- Use Personal Access Token instead of password
- Create at: https://github.com/settings/tokens

**"Build failed on Vercel"**
- Check vercel.json is correct
- Check all files are uploaded
- View logs in Vercel dashboard

---

## ✅ Deployment Checklist

- [ ] Git installed
- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project deployed on Vercel
- [ ] PWA tested and working
- [ ] Admin password changed

---

## 🦅 You're All Set!

Kung naa nay tanan sa checklist, congratulations! 

Your AMA eBooks is now:
- ✅ Live on the web
- ✅ Auto-deploying on updates
- ✅ PWA installable
- ✅ Secured with HTTPS
- ✅ Ready for users!

---

**Developed by Godmisoft | Heber Mayormita**

*Happy coding! 🚀*
