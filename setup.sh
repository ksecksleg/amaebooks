#!/bin/bash

# AMA eBooks - Quick Setup Script
# Developed by Godmisoft

echo "🦅 =============================================="
echo "   AMA eBooks - Deployment Setup"
echo "   Ang Malayang Agila Digital Library"
echo "============================================== 🦅"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null
then
    echo "❌ Git is not installed!"
    echo "Please install Git first:"
    echo "   Windows: https://git-scm.com/download/win"
    echo "   Mac: brew install git"
    echo "   Linux: sudo apt install git"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Get user information
read -p "Enter your GitHub username: " github_username
read -p "Enter repository name (default: ama-ebooks): " repo_name
repo_name=${repo_name:-ama-ebooks}

echo ""
echo "📝 Configuration:"
echo "   GitHub Username: $github_username"
echo "   Repository Name: $repo_name"
echo ""

read -p "Is this correct? (y/n): " confirm
if [ "$confirm" != "y" ]; then
    echo "Setup cancelled."
    exit 0
fi

echo ""
echo "🔧 Setting up Git repository..."

# Initialize git if not already initialized
if [ ! -d .git ]; then
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Configure git (if not configured)
git_name=$(git config user.name)
git_email=$(git config user.email)

if [ -z "$git_name" ]; then
    read -p "Enter your name for Git commits: " name
    git config user.name "$name"
fi

if [ -z "$git_email" ]; then
    read -p "Enter your email for Git commits: " email
    git config user.email "$email"
fi

echo "✅ Git configured"
echo ""

# Add all files
echo "📦 Adding files to Git..."
git add .
echo "✅ Files added"
echo ""

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: AMA eBooks - Ang Malayang Agila Digital Library

- PWA-ready eBook reader
- Admin panel for content management
- Offline support
- Beautiful UI with animations
- Developed by Godmisoft"
echo "✅ Commit created"
echo ""

# Set main branch
git branch -M main
echo "✅ Branch set to 'main'"
echo ""

# Add GitHub remote
repo_url="https://github.com/$github_username/$repo_name.git"
echo "🔗 Adding GitHub remote..."
echo "   URL: $repo_url"

if git remote | grep -q origin; then
    git remote set-url origin $repo_url
    echo "✅ Remote updated"
else
    git remote add origin $repo_url
    echo "✅ Remote added"
fi

echo ""
echo "=============================================="
echo "✅ Setup Complete!"
echo "=============================================="
echo ""
echo "📋 Next Steps:"
echo ""
echo "1️⃣  Create GitHub Repository:"
echo "   → Go to: https://github.com/new"
echo "   → Repository name: $repo_name"
echo "   → DO NOT initialize with README"
echo "   → Click 'Create repository'"
echo ""
echo "2️⃣  Push to GitHub:"
echo "   → Run: git push -u origin main"
echo "   → Enter your GitHub credentials"
echo "   → (Use Personal Access Token as password)"
echo ""
echo "3️⃣  Deploy to Vercel:"
echo "   → Go to: https://vercel.com"
echo "   → Sign in with GitHub"
echo "   → Import '$repo_name' repository"
echo "   → Click 'Deploy'"
echo ""
echo "=============================================="
echo ""
echo "📚 For detailed instructions, see:"
echo "   → GITHUB_VERCEL_DEPLOYMENT.md"
echo ""
echo "Need a Personal Access Token?"
echo "   → https://github.com/settings/tokens"
echo "   → Generate new token (classic)"
echo "   → Select 'repo' scope"
echo ""
echo "🦅 Developed by Godmisoft | Heber Mayormita"
echo "=============================================="
