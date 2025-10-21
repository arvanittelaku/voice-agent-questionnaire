# ⚡ Quick Start - GitHub to Vercel

This directory is **ready to deploy** to Vercel via GitHub! 🚀

---

## 📁 What's Included

All necessary files for deployment:

- ✅ API functions (`api/`)
- ✅ Frontend forms (`public/`)
- ✅ Configuration files (`package.json`, `vercel.json`)
- ✅ Documentation (all `.md` files)
- ✅ `.gitignore` (protects sensitive files)

**No unnecessary files** - only what Vercel needs!

---

## 🚀 Deploy in 3 Steps

### Step 1: Push to GitHub (5 minutes)

```bash
# Open terminal in this directory (ai-agent-forms-deploy)
cd ai-agent-forms-deploy

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: AI Agent forms"

# Create GitHub repo at: https://github.com/new
# Then add remote (replace with YOUR repo URL):
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Import to Vercel (2 minutes)

1. Go to: https://vercel.com/new
2. Click **"Import Git Repository"**
3. Select your GitHub repository
4. Click **"Import"**
5. Click **"Deploy"** (it will fail without env variables - that's OK!)

### Step 3: Add Environment Variables (3 minutes)

1. In Vercel project → **Settings** → **Environment Variables**
2. Add these two:

```
GOOGLE_SHEET_ID = [Your Sheet ID]
GOOGLE_CREDENTIALS = [Entire JSON from service account]
```

3. Click **Deployments** → **Redeploy**

**✅ Done! Your forms are live!**

---

## 📚 Detailed Guides

- **First time?** Read `GITHUB_DEPLOY.md` for step-by-step instructions
- **Google Sheets setup:** See `GOOGLE_SHEETS_SETUP.md`
- **Technical details:** Check `PROJECT_SUMMARY.md`

---

## 🔗 After Deployment

Your forms will be at:

```
https://your-project.vercel.app/voice-agent-questionnaire.html
https://your-project.vercel.app/chatbot-questionnaire.html
```

Test them and check your Google Sheet for data!

---

**Need help? Read `GITHUB_DEPLOY.md` for complete instructions.** 🎉
