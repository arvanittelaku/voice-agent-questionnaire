# 📊 Google Sheets Setup Guide

This guide will walk you through setting up Google Sheets API for your Voice Agent and Chatbot questionnaires.

---

## 🎯 Overview

The forms will submit data directly to your Google Sheets via the Google Sheets API. You'll need:

1. A Google Sheet with proper columns
2. A Google Cloud Project with Sheets API enabled
3. A Service Account with credentials

---

## 📋 Step 1: Create Your Google Sheet

### For Voice Agent Sheet

1. **Create a new Google Sheet** or open your existing one
2. **Create a sheet tab named** `Voice Agent` (or update `api/submit-voice-agent.js` line 67 if different)
3. **Add these column headers in Row 1** (columns A-AA):

```
Timestamp | Purpose | ProblemToSolve | SuccessCriteria | CallType | ExpectedCallVolume | PeakTimes | InboundMethod | InboundOtherSpecify | OutboundType | OutboundOtherSpecify | ConversationComplexity | HasScript | PrimaryLanguag | AdditionalLanguage | VoicePreference | TonePreference | ToneOtherDescribe | ConversationStyle | InfoToCollect | InfoToProvide | AgentActions | OtherActionsSpecify | SystemAccessNeeded | SystemAccessDetails | UseCustomerHistory | KnowledgeBaseNeeded
```

**Copy this for easy paste:**

```
Timestamp	Purpose	ProblemToSolve	SuccessCriteria	CallType	ExpectedCallVolume	PeakTimes	InboundMethod	InboundOtherSpecify	OutboundType	OutboundOtherSpecify	ConversationComplexity	HasScript	PrimaryLanguag	AdditionalLanguage	VoicePreference	TonePreference	ToneOtherDescribe	ConversationStyle	InfoToCollect	InfoToProvide	AgentActions	OtherActionsSpecify	SystemAccessNeeded	SystemAccessDetails	UseCustomerHistory	KnowledgeBaseNeeded
```

### For Chatbot Sheet

1. **Create a sheet tab named** `Chatbot` (or update `api/submit-chatbot.js` line 74 if different)
2. **Add these column headers in Row 1** (columns A-AH):

```
Timestamp | Main Purpose | Platform | Conversation Volume | Primary Audience | Conversation Complexity | Has Script | Languages | Tone | Conversation Style | Information to Collect | Information to Provide | Actions | System Access | User History | Knowledge Base | Handle Unknown | Escalate to Human | When to Escalate | Handoff Method | Visual Style | Widget Features | Bot Avatar | Existing Platform | Hosting | Tech Preferences | Regulations | Conversation Recording | Data Privacy | Timeline | Budget | Testing Approach | Success Metrics | Analytics Needed
```

**Copy this for easy paste:**

```
Timestamp	Main Purpose	Platform	Conversation Volume	Primary Audience	Conversation Complexity	Has Script	Languages	Tone	Conversation Style	Information to Collect	Information to Provide	Actions	System Access	User History	Knowledge Base	Handle Unknown	Escalate to Human	When to Escalate	Handoff Method	Visual Style	Widget Features	Bot Avatar	Existing Platform	Hosting	Tech Preferences	Regulations	Conversation Recording	Data Privacy	Timeline	Budget	Testing Approach	Success Metrics	Analytics Needed
```

---

## 🔧 Step 2: Create Google Cloud Project & Enable API

1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Create a new project** (or select existing)

   - Click "Select a project" → "New Project"
   - Name it (e.g., "AI Agent Forms")
   - Click "Create"

3. **Enable Google Sheets API**:
   - Go to: https://console.cloud.google.com/apis/library/sheets.googleapis.com
   - Click **"Enable"**

---

## 🔑 Step 3: Create Service Account

1. **Navigate to Service Accounts**:

   - Go to: https://console.cloud.google.com/iam-admin/serviceaccounts
   - Select your project

2. **Create Service Account**:

   - Click **"+ CREATE SERVICE ACCOUNT"**
   - **Service account name**: `vercel-sheets-api` (or any name)
   - **Service account ID**: Will auto-generate
   - Click **"CREATE AND CONTINUE"**

3. **Grant Permissions** (optional, can skip):

   - Click **"CONTINUE"** (no role needed for this use case)

4. **Create Key**:
   - Click **"DONE"**
   - Find your new service account in the list
   - Click the **3 dots (⋮)** → **"Manage keys"**
   - Click **"ADD KEY"** → **"Create new key"**
   - Select **JSON**
   - Click **"CREATE"**
   - A JSON file will download automatically ✅

---

## 🔐 Step 4: Share Google Sheet with Service Account

1. **Open the downloaded JSON file** from Step 3
2. **Find the `client_email`** field (looks like: `vercel-sheets-api@your-project.iam.gserviceaccount.com`)
3. **Go back to your Google Sheet**
4. **Click "Share"** (top right)
5. **Paste the service account email**
6. **Set permission to "Editor"**
7. **Click "Send"** ✅

---

## 📝 Step 5: Get Your Google Sheet ID

1. **Open your Google Sheet**
2. **Look at the URL**, it looks like:
   ```
   https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j/edit
                                          ^^^^^^^^^^^^^^^^^^^^
                                          This is your Sheet ID
   ```
3. **Copy the Sheet ID** (the part between `/d/` and `/edit`)

---

## ⚙️ Step 6: Configure Environment Variables in Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. **Go to your Vercel project**: https://vercel.com/dashboard
2. **Click your project** → **Settings** → **Environment Variables**
3. **Add these two variables**:

| Name                 | Value                                                                       |
| -------------------- | --------------------------------------------------------------------------- |
| `GOOGLE_SHEET_ID`    | Your Sheet ID from Step 5                                                   |
| `GOOGLE_CREDENTIALS` | **Entire contents of the downloaded JSON file** (copy-paste the whole JSON) |

4. **Click "Save"** for each

### Option B: Via Vercel CLI

```bash
# From your project directory
vercel env add GOOGLE_SHEET_ID
# Paste your Sheet ID

vercel env add GOOGLE_CREDENTIALS
# Paste entire JSON file contents
```

---

## 🚀 Step 7: Deploy to Vercel

### First Time Deployment

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

Follow the prompts:

- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No (first time)
- **Project name?** → Accept default or customize
- **Directory?** → `./` (default)
- **Override settings?** → No

### Redeploy After Changes

```bash
vercel --prod
```

---

## ✅ Step 8: Test Your Forms

1. **Visit your deployed URL** (Vercel will show it after deployment)
2. **Fill out a test form**
3. **Check your Google Sheet** - you should see a new row! 🎉

---

## 🐛 Troubleshooting

### Error: "Failed to submit form"

**Check:**

1. ✅ Service account email is shared with the sheet (with Editor access)
2. ✅ `GOOGLE_SHEET_ID` is correct (from the URL)
3. ✅ `GOOGLE_CREDENTIALS` contains the **entire JSON file** (including `{` and `}`)
4. ✅ Sheet tab names match exactly: `Voice Agent` and `Chatbot`

### Error: "Requested entity was not found"

**Fix:** Sheet tab name doesn't match. Update the API files:

- `api/submit-voice-agent.js` line 67: `range: 'Voice Agent!A:AA'`
- `api/submit-chatbot.js` line 74: `range: 'Chatbot!A:AH'`

### Error: "The caller does not have permission"

**Fix:** Service account not shared. Go back to Step 4.

### Columns don't match

**Fix:** Update the column order in Step 1, or update the `row` array in the API files to match your sheet columns.

---

## 📚 Additional Notes

### Security Best Practices

- ✅ Never commit the JSON credentials file to Git
- ✅ Use environment variables only
- ✅ Keep your service account email private
- ✅ Limit sheet sharing to only the service account

### Viewing Logs

Check Vercel deployment logs:

```bash
vercel logs
```

Or view in dashboard: **Project → Deployments → [Latest] → Runtime Logs**

---

## 🎉 You're Done!

Your forms are now connected to Google Sheets and ready to collect client information!

**Live URLs:**

- Voice Agent Form: `https://your-project.vercel.app/voice-agent-questionnaire.html`
- Chatbot Form: `https://your-project.vercel.app/chatbot-questionnaire.html`

---

## 📞 Need Help?

If you encounter issues:

1. Check the **Troubleshooting** section above
2. Review Vercel logs: `vercel logs`
3. Verify all environment variables are set correctly
4. Ensure sheet permissions are correct
