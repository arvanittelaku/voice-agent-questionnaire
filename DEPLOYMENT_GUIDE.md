# 🚀 Quick Deployment Guide

**Deploy your Voice Agent and Chatbot forms to Vercel with Google Sheets integration**

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure you have:

- [ ] Google Sheet created with proper columns
- [ ] Google Cloud Project with Sheets API enabled
- [ ] Service Account created with JSON credentials downloaded
- [ ] Google Sheet shared with service account email (Editor access)
- [ ] Google Sheet ID copied
- [ ] Vercel account created (free at vercel.com)

> **📖 Need help with setup?** See `GOOGLE_SHEETS_SETUP.md` for detailed instructions.

---

## 🎯 Quick Deployment (3 Steps)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts in your browser.

### Step 3: Deploy

```bash
vercel
```

**Answer the prompts:**

- Set up and deploy? → **Yes**
- Which scope? → **Your account**
- Link to existing project? → **No** (first time)
- Project name? → **Press Enter** (or customize)
- Directory? → **Press Enter** (uses `./`)
- Override settings? → **No**

✅ **Your site is now live!** Vercel will show you the URL.

---

## ⚙️ Configure Environment Variables

**You MUST add environment variables before the forms will work.**

### Via Vercel Dashboard (Easiest)

1. Go to: https://vercel.com/dashboard
2. Click your project → **Settings** → **Environment Variables**
3. Add these two variables:

#### Variable 1: GOOGLE_SHEET_ID

```
Name: GOOGLE_SHEET_ID
Value: [Your Sheet ID from the Google Sheets URL]
```

#### Variable 2: GOOGLE_CREDENTIALS

```
Name: GOOGLE_CREDENTIALS
Value: [Paste the ENTIRE JSON file contents from Google Cloud]
```

4. Click **"Save"** for each variable
5. **Redeploy** to apply changes:

```bash
vercel --prod
```

### Via Vercel CLI (Alternative)

```bash
# Add Sheet ID
vercel env add GOOGLE_SHEET_ID production
# Paste your Sheet ID when prompted

# Add Google Credentials
vercel env add GOOGLE_CREDENTIALS production
# Paste entire JSON file contents when prompted

# Redeploy
vercel --prod
```

---

## 🧪 Test Your Deployment

1. **Visit your live URL** (shown after deployment)
2. **Test the Voice Agent form**: `https://your-project.vercel.app/voice-agent-questionnaire.html`
3. **Test the Chatbot form**: `https://your-project.vercel.app/chatbot-questionnaire.html`
4. **Fill out a test submission**
5. **Check your Google Sheet** - you should see a new row! 🎉

---

## 🔄 Redeploy After Changes

Whenever you make code changes:

```bash
# For production deployment
vercel --prod

# For preview deployment (test first)
vercel
```

---

## 📊 View Logs

**Check if submissions are working:**

```bash
# View real-time logs
vercel logs --follow

# View logs for specific deployment
vercel logs [deployment-url]
```

**Or via Dashboard:**

- Go to: https://vercel.com/dashboard
- Click your project → **Deployments**
- Click latest deployment → **Runtime Logs**

---

## 🐛 Common Issues & Fixes

### ❌ "Failed to submit form"

**Cause:** Environment variables not set or incorrect.

**Fix:**

1. Verify both `GOOGLE_SHEET_ID` and `GOOGLE_CREDENTIALS` are set in Vercel
2. Redeploy: `vercel --prod`
3. Check logs: `vercel logs`

---

### ❌ "The caller does not have permission"

**Cause:** Service account not shared with the sheet.

**Fix:**

1. Open your Google Sheet
2. Click **"Share"**
3. Add the service account email (from the JSON file: `client_email`)
4. Set permission to **"Editor"**
5. Click **"Send"**

---

### ❌ "Requested entity was not found"

**Cause:** Sheet tab name doesn't match the API code.

**Fix:**

1. Check your sheet tab names (should be `Voice Agent` and `Chatbot`)
2. Or update the API files:
   - `api/submit-voice-agent.js` line 67
   - `api/submit-chatbot.js` line 74

---

### ❌ Data going to wrong columns

**Cause:** Column order in sheet doesn't match the API code.

**Fix:**

1. Use the exact column headers from `GOOGLE_SHEETS_SETUP.md`
2. Or update the `row` array in the API files to match your columns

---

## 🎨 Customize Your Forms

### Change Form Styling

Edit these files:

- `public/voice-agent-questionnaire.html`
- `public/chatbot-questionnaire.html`

Then redeploy: `vercel --prod`

### Change Sheet Column Mapping

Edit these files:

- `api/submit-voice-agent.js` (line 34-62: the `row` array)
- `api/submit-chatbot.js` (line 34-69: the `row` array)

Then redeploy: `vercel --prod`

---

## 🔒 Security Best Practices

- ✅ **Never commit** `.env` or JSON credentials to Git
- ✅ Use Vercel environment variables only
- ✅ Keep service account private
- ✅ Limit sheet sharing to service account only
- ✅ Use HTTPS URLs (Vercel provides this automatically)

---

## 📱 Share Your Forms

Once deployed, share these URLs with clients:

**Voice Agent Form:**

```
https://your-project.vercel.app/voice-agent-questionnaire.html
```

**Chatbot Form:**

```
https://your-project.vercel.app/chatbot-questionnaire.html
```

**Landing Page:**

```
https://your-project.vercel.app/
```

---

## 🎉 You're Live!

Your forms are now:

- ✅ Deployed to Vercel
- ✅ Submitting data to Google Sheets
- ✅ Accessible via HTTPS
- ✅ Ready for clients!

---

## 📚 Additional Resources

- **Full Setup Guide**: `GOOGLE_SHEETS_SETUP.md`
- **Vercel Docs**: https://vercel.com/docs
- **Google Sheets API**: https://developers.google.com/sheets/api
- **Project Structure**: `README.md`

---

## 💡 Pro Tips

1. **Test with preview deployments first**: Use `vercel` (without --prod) to test changes
2. **Use Git for version control**: Commit your changes before deploying
3. **Monitor your quota**: Google Sheets API has rate limits (free tier: 60 requests/min)
4. **Set up custom domain**: In Vercel Dashboard → Domains (optional)
5. **Enable analytics**: Vercel Analytics shows form usage (optional)

---

Need help? Check `GOOGLE_SHEETS_SETUP.md` for detailed troubleshooting! 🚀
