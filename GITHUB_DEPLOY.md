# 🚀 GitHub + Vercel Deployment Guide

This guide shows you how to deploy your AI Agent forms to Vercel using GitHub (recommended method).

---

## 📁 What's in This Directory?

This is a **clean deployment package** containing only the files needed for Vercel:

```
ai-agent-forms-deploy/
├── api/                          # Backend API functions
│   ├── submit-voice-agent.js     # Voice Agent form handler
│   └── submit-chatbot.js         # Chatbot form handler
├── public/                       # Frontend files
│   ├── index.html                # Landing page
│   ├── voice-agent-questionnaire.html
│   └── chatbot-questionnaire.html
├── package.json                  # Node.js dependencies
├── vercel.json                   # Vercel configuration
├── .gitignore                    # Git ignore rules
├── env.example                   # Environment variables template
├── README.md                     # Project overview
├── GOOGLE_SHEETS_SETUP.md        # Complete setup guide
├── DEPLOYMENT_GUIDE.md           # Deployment instructions
├── PROJECT_SUMMARY.md            # Technical details
├── NEXT_STEPS.md                 # What to do next
├── CHANGES_SUMMARY.md            # What changed
└── GITHUB_DEPLOY.md              # This file
```

---

## 🎯 Deployment Method: GitHub → Vercel (Recommended)

**Why this method?**

- ✅ Automatic deployments on every push
- ✅ Easy to update (just push to GitHub)
- ✅ Preview deployments for testing
- ✅ Version control with Git
- ✅ Rollback capability

---

## 📋 Prerequisites

Before starting, make sure you have:

- [ ] GitHub account ([sign up free](https://github.com/signup))
- [ ] Vercel account ([sign up free](https://vercel.com/signup))
- [ ] Git installed on your computer
- [ ] Completed Google Sheets setup (see `GOOGLE_SHEETS_SETUP.md`)

---

## 🚀 Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com/new

2. **Create new repository**:

   - **Repository name**: `ai-agent-forms` (or your choice)
   - **Description**: "Voice Agent and Chatbot discovery questionnaires"
   - **Visibility**: Private or Public (your choice)
   - ⚠️ **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click **"Create repository"**

3. **Copy the repository URL** (you'll need it in Step 2)
   - Example: `https://github.com/your-username/ai-agent-forms.git`

---

### Step 2: Push to GitHub

Open your terminal in the `ai-agent-forms-deploy` directory and run:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: AI Agent discovery forms"

# Add GitHub remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**✅ Your code is now on GitHub!**

---

### Step 3: Connect Vercel to GitHub

1. **Go to Vercel**: https://vercel.com/login

2. **Login with GitHub** (recommended)

   - Click "Continue with GitHub"
   - Authorize Vercel if prompted

3. **Import Project**:

   - Click **"Add New..."** → **"Project"**
   - Select **"Import Git Repository"**
   - Find your `ai-agent-forms` repository
   - Click **"Import"**

4. **Configure Project**:
   - **Framework Preset**: Leave as "Other" (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - Click **"Deploy"**

**⏳ Vercel will start deploying... (takes 1-2 minutes)**

---

### Step 4: Add Environment Variables

⚠️ **Important: The deployment will fail without these!**

1. **While deployment is running**, click **"Environment Variables"** tab

   OR

   After deployment, go to: **Project Settings** → **Environment Variables**

2. **Add these two variables**:

   **Variable 1:**

   ```
   Name: GOOGLE_SHEET_ID
   Value: [Your Google Sheet ID from GOOGLE_SHEETS_SETUP.md]
   ```

   **Variable 2:**

   ```
   Name: GOOGLE_CREDENTIALS
   Value: [Entire JSON file contents from service account]
   ```

3. **Important:** Make sure to select **"Production"**, **"Preview"**, and **"Development"** for both variables

4. **Click "Save"** for each variable

---

### Step 5: Redeploy

After adding environment variables:

1. Go to **Deployments** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete

**✅ Your forms are now live!**

---

## 🌐 Your Live URLs

After deployment, Vercel will provide you with URLs like:

```
Production URL (main branch):
https://ai-agent-forms.vercel.app

Forms:
https://ai-agent-forms.vercel.app/voice-agent-questionnaire.html
https://ai-agent-forms.vercel.app/chatbot-questionnaire.html
```

---

## 🔄 Updating Your Forms

### When you make changes:

```bash
# Make your changes to files
# Then commit and push:

git add .
git commit -m "Description of changes"
git push
```

**✨ Vercel will automatically deploy your changes!**

---

## 📊 Test Your Deployment

1. **Visit your form URL**
2. **Fill out and submit a test form**
3. **Check your Google Sheet** - you should see a new row!

---

## 🐛 Troubleshooting

### Forms not submitting?

**Check Vercel Logs:**

1. Go to Vercel Dashboard → Your Project
2. Click **Deployments** → Latest deployment
3. Click **"Runtime Logs"**
4. Look for errors

**Common Issues:**

| Error                                 | Fix                                                 |
| ------------------------------------- | --------------------------------------------------- |
| "Failed to submit form"               | Check environment variables are set                 |
| "The caller does not have permission" | Share Google Sheet with service account             |
| "Requested entity was not found"      | Verify sheet tab names: `Voice Agent` and `Chatbot` |
| "Invalid credentials"                 | Check `GOOGLE_CREDENTIALS` contains complete JSON   |

---

## 🔒 Security Checklist

Before pushing to GitHub, verify:

- ✅ `.gitignore` is present (prevents sensitive files from being uploaded)
- ✅ No `.env` files in the directory
- ✅ No service account JSON files in the directory
- ✅ Only `env.example` is included (not actual credentials)

**The `.gitignore` file ensures:**

- ❌ `node_modules/` won't be uploaded
- ❌ `.env` files won't be uploaded
- ❌ `.json` credential files won't be uploaded
- ✅ Only necessary code is pushed to GitHub

---

## 🎨 Custom Domain (Optional)

Want to use your own domain instead of `.vercel.app`?

1. Go to: **Project Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain (e.g., `forms.yourdomain.com`)
4. Follow DNS configuration instructions
5. Done! 🎉

---

## 💡 Pro Tips

### Automatic Deployments

- Every push to `main` branch → Production deployment
- Pull requests → Preview deployments (test before merging)

### Environment Variables

- Different values for Production vs Preview environments
- Update anytime in Vercel Dashboard
- Changes require redeploy to take effect

### Rollback

If something breaks:

1. Go to **Deployments**
2. Find a working deployment
3. Click **"..."** → **"Promote to Production"**

---

## 📚 Next Steps

1. ✅ **Test your forms** - Submit test data
2. ✅ **Verify Google Sheets** - Check data appears correctly
3. ✅ **Share URLs** - Send to clients/team
4. ✅ **Monitor submissions** - Check your Google Sheet regularly
5. ✅ **Customize forms** - Edit HTML files and push changes

---

## 📞 Quick Links

**Your Project:**

- GitHub Repository: `https://github.com/YOUR-USERNAME/ai-agent-forms`
- Vercel Dashboard: https://vercel.com/dashboard
- Live Site: `https://your-project.vercel.app`

**Documentation:**

- Setup Guide: `GOOGLE_SHEETS_SETUP.md`
- Technical Details: `PROJECT_SUMMARY.md`
- Next Steps: `NEXT_STEPS.md`

**External Resources:**

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Guides](https://guides.github.com/)
- [Google Sheets API](https://developers.google.com/sheets/api)

---

## 🎉 You're Done!

Your AI Agent discovery forms are now:

- ✅ Hosted on Vercel
- ✅ Version controlled with Git
- ✅ Automatically deployed from GitHub
- ✅ Connected to Google Sheets
- ✅ Ready for clients!

**Happy deploying! 🚀**
