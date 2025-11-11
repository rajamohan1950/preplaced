#!/bin/bash
# Script to push Preplaced.com to GitHub

echo "🚀 Pushing Preplaced.com to GitHub..."
echo ""

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Remote 'origin' already exists"
    git remote -v
else
    echo "❌ No remote repository configured"
    echo ""
    echo "Please provide your GitHub repository URL:"
    echo "Example: https://github.com/username/preplaced.git"
    echo ""
    read -p "Enter GitHub repository URL: " REPO_URL
    
    if [ -z "$REPO_URL" ]; then
        echo "❌ No URL provided. Exiting."
        exit 1
    fi
    
    echo ""
    echo "Adding remote repository..."
    git remote add origin "$REPO_URL"
fi

echo ""
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Next steps for Vercel deployment:"
    echo "1. Go to https://vercel.com"
    echo "2. Sign up/Login with GitHub"
    echo "3. Click 'New Project'"
    echo "4. Import your repository"
    echo "5. Click 'Deploy' - Done! 🎉"
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "- GitHub repository exists"
    echo "- You have push access"
    echo "- Repository URL is correct"
fi

