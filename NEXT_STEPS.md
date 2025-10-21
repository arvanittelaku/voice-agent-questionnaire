# 🎯 Next Steps - Google Sheets Deployment

## ✅ What We've Done

I've successfully updated your project to use **Google Sheets** instead of Airtable:

1. ✅ Updated `package.json` - Now uses `googleapis` package
2. ✅ Updated `api/submit-voice-agent.js` - Sends data to Google Sheets
3. ✅ Updated `api/submit-chatbot.js` - Sends data to Google Sheets
4. ✅ Installed dependencies - `googleapis` is ready
5. ✅ Created comprehensive guides:
   - `GOOGLE_SHEETS_SETUP.md` - Complete setup instructions
   - `DEPLOYMENT_GUIDE.md` - Quick deployment guide
   - `PROJECT_SUMMARY.md` - Full project overview
6. ✅ Updated `README.md` - Now reflects Google Sheets integration
7. ✅ Updated `env.example` - Shows required environment variables

---

## 📋 What You Need to Do Now

### Step 1: Set Up Google Sheets (15 minutes)

**Follow `GOOGLE_SHEETS_SETUP.md` for complete instructions. Quick summary:**

1. **Create Google Sheet**

   - Create a new Google Sheet
   - Add two tabs: `Voice Agent` and `Chatbot`
   - Copy column headers from the guide (provided in the setup doc)

2. **Enable Google Sheets API**

   - Go to Google Cloud Console
   - Create or select a project
   - Enable Google Sheets API

3. **Create Service Account**

   - In Google Cloud Console → IAM & Admin → Service Accounts
   - Create new service account
   - Download JSON credentials file

4. **Share Sheet with Service Account**

   - Copy the `client_email` from the JSON file
   - Share your Google Sheet with this email (Editor access)

5. **Get Your Sheet ID**
   - From the Google Sheets URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`

---

### Step 2: Deploy to Vercel (5 minutes)

**Follow `DEPLOYMENT_GUIDE.md` for complete instructions. Quick summary:**

```bash
# 1. Install Vercel CLI (if not already installed)
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel
```

---

### Step 3: Configure Environment Variables (5 minutes)

**In Vercel Dashboard:**

1. Go to: https://vercel.com/dashboard
2. Click your project → **Settings** → **Environment Variables**
3. Add these two variables:

#### Variable 1: GOOGLE_SHEET_ID

```
Name: GOOGLE_SHEET_ID
Value: [Paste your Sheet ID from Step 1]
```

#### Variable 2: GOOGLE_CREDENTIALS

```
Name: GOOGLE_CREDENTIALS
Value: [Paste the ENTIRE contents of your JSON file from Step 1]
```

4. **Redeploy:**

```bash
vercel --prod
```

---

### Step 4: Test Your Forms (2 minutes)

1. Visit your Vercel URL (shown after deployment)
2. Fill out a test form
3. Check your Google Sheet - you should see a new row! 🎉

---

## 📚 Reference Documents

| Document                     | Purpose                                                               |
| ---------------------------- | --------------------------------------------------------------------- |
| **`GOOGLE_SHEETS_SETUP.md`** | Complete Google Sheets API setup with screenshots and troubleshooting |
| **`DEPLOYMENT_GUIDE.md`**    | Quick Vercel deployment instructions                                  |
| **`PROJECT_SUMMARY.md`**     | Full project architecture and technical details                       |
| **`README.md`**              | General project overview and quick start                              |
| **`env.example`**            | Example environment variables                                         |

---

## 🎨 Google Sheet Column Headers

### Voice Agent Tab

**Copy this line and paste into Row 1 of your "Voice Agent" tab:**

```
Timestamp	Purpose	ProblemToSolve	SuccessCriteria	CallType	ExpectedCallVolume	PeakTimes	InboundMethod	InboundOtherSpecify	OutboundType	OutboundOtherSpecify	ConversationComplexity	HasScript	PrimaryLanguag	AdditionalLanguage	VoicePreference	TonePreference	ToneOtherDescribe	ConversationStyle	InfoToCollect	InfoToProvide	AgentActions	OtherActionsSpecify	SystemAccessNeeded	SystemAccessDetails	UseCustomerHistory	KnowledgeBaseNeeded
```

### Chatbot Tab

**Copy this line and paste into Row 1 of your "Chatbot" tab:**

```
Timestamp	Main Purpose	Platform	Conversation Volume	Primary Audience	Conversation Complexity	Has Script	Languages	Tone	Conversation Style	Information to Collect	Information to Provide	Actions	System Access	User History	Knowledge Base	Handle Unknown	Escalate to Human	When to Escalate	Handoff Method	Visual Style	Widget Features	Bot Avatar	Existing Platform	Hosting	Tech Preferences	Regulations	Conversation Recording	Data Privacy	Timeline	Budget	Testing Approach	Success Metrics	Analytics Needed
```

---

## 🚀 Quick Deployment Checklist

- [ ] Google Sheet created with two tabs (`Voice Agent` and `Chatbot`)
- [ ] Column headers added to both tabs (copy-paste from above)
- [ ] Google Cloud Project created
- [ ] Google Sheets API enabled
- [ ] Service Account created
- [ ] JSON credentials downloaded
- [ ] Google Sheet shared with service account email (Editor access)
- [ ] Google Sheet ID copied
- [ ] Vercel account created
- [ ] Project deployed to Vercel: `vercel`
- [ ] Environment variables added in Vercel Dashboard
  - [ ] `GOOGLE_SHEET_ID`
  - [ ] `GOOGLE_CREDENTIALS`
- [ ] Redeployed with: `vercel --prod`
- [ ] Tested both forms
- [ ] Verified data appears in Google Sheet

---

## 🎯 Your Live URLs (After Deployment)

Once deployed, your forms will be available at:

```
Landing Page:
https://your-project.vercel.app/

Voice Agent Form:
https://your-project.vercel.app/voice-agent-questionnaire.html

Chatbot Form:
https://your-project.vercel.app/chatbot-questionnaire.html
```

---

## 💡 Pro Tips

1. **Test in Preview First**: Run `vercel` (without `--prod`) to test before going live
2. **Use Git**: Commit your changes for version control
3. **Monitor Quota**: Google Sheets API free tier = 60 requests/minute (usually enough)
4. **Set Up Notifications**: Use Google Sheets to email you when new rows are added
5. **Analyze Data**: Use Google Sheets pivot tables and charts for insights

---

## 🐛 Common Issues

### "Failed to submit form"

**Fix:** Check environment variables in Vercel Dashboard

### "The caller does not have permission"

**Fix:** Share sheet with service account email (from JSON file)

### "Requested entity was not found"

**Fix:** Verify sheet tab names are exactly `Voice Agent` and `Chatbot`

### Data going to wrong columns

**Fix:** Use the exact column headers provided above (copy-paste)

**See `GOOGLE_SHEETS_SETUP.md` for detailed troubleshooting!**

---

## 📞 Need Help?

1. Read `GOOGLE_SHEETS_SETUP.md` for detailed setup instructions
2. Check `DEPLOYMENT_GUIDE.md` for deployment help
3. View Vercel logs: `vercel logs`
4. Check browser console (F12) for errors

---

## 🎉 You're All Set!

Follow the steps above, and your forms will be live and collecting data in Google Sheets in about **25 minutes**!

**Happy deploying! 🚀**
