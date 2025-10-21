# 📋 Project Summary: AI Agent Discovery Questionnaires

## 🎯 Overview

This project provides **two client discovery forms** for AI agent implementation:

1. **Voice Agent Questionnaire** - For voice-based AI assistants
2. **Chatbot Questionnaire** - For text-based chatbots

Both forms submit data directly to **Google Sheets** via API, hosted on **Vercel** for free.

---

## 📁 Project Structure

```
├── public/
│   ├── voice-agent-questionnaire.html  # Voice Agent form (client-facing)
│   ├── chatbot-questionnaire.html      # Chatbot form (client-facing)
│   └── index.html                      # Landing page
├── api/
│   ├── submit-voice-agent.js           # Serverless function for Voice Agent
│   └── submit-chatbot.js               # Serverless function for Chatbot
├── package.json                        # Dependencies (googleapis)
├── vercel.json                         # Vercel deployment configuration
├── GOOGLE_SHEETS_SETUP.md             # Complete setup instructions
├── DEPLOYMENT_GUIDE.md                # Quick deployment guide
└── README.md                          # Project documentation
```

---

## 🔧 Technology Stack

| Component          | Technology                            |
| ------------------ | ------------------------------------- |
| **Frontend**       | HTML5, CSS3, JavaScript (vanilla)     |
| **Backend**        | Node.js Serverless Functions (Vercel) |
| **Database**       | Google Sheets (via Google Sheets API) |
| **Hosting**        | Vercel (free tier)                    |
| **API**            | Google Sheets API v4                  |
| **Authentication** | Service Account (JSON credentials)    |

---

## 📊 Form Fields

### Voice Agent Form (27 fields)

Captures information about:

- **Purpose & Goals**: Main objective, problems to solve, success criteria
- **Call Details**: Inbound/outbound, volume, peak times
- **Conversation Design**: Complexity, script availability, language
- **Voice & Tone**: Voice preference, tone, conversation style
- **Functionality**: Info collection, actions, system integrations
- **Data Access**: System access, customer history, knowledge base

### Chatbot Form (33 fields)

Captures information about:

- **Purpose & Context**: Main purpose, platform, audience
- **Volume & Scope**: Conversation volume, complexity
- **Conversation Design**: Script, languages, tone, style
- **Functionality**: Info collection, actions, integrations
- **Escalation**: Unknown handling, human handoff rules
- **Design**: Visual style, widget features, avatar
- **Technical**: Platform, hosting, tech preferences
- **Compliance**: Regulations, privacy, data recording
- **Project Details**: Timeline, budget, testing, metrics

---

## 🔄 Data Flow

```
User fills form
      ↓
JavaScript collects data
      ↓
POST request to /api/submit-[type]
      ↓
Vercel Serverless Function
      ↓
Google Sheets API authentication
      ↓
Data appended to Google Sheet
      ↓
Success/Error message shown to user
```

---

## 🌐 Live URLs (After Deployment)

```
Landing Page:
https://your-project.vercel.app/

Voice Agent Form:
https://your-project.vercel.app/voice-agent-questionnaire.html

Chatbot Form:
https://your-project.vercel.app/chatbot-questionnaire.html
```

---

## ⚙️ Environment Variables Required

| Variable             | Description          | Where to Get           |
| -------------------- | -------------------- | ---------------------- |
| `GOOGLE_SHEET_ID`    | Your Google Sheet ID | From Google Sheets URL |
| `GOOGLE_CREDENTIALS` | Service Account JSON | Google Cloud Console   |

**Set these in Vercel:**

- Dashboard → Project → Settings → Environment Variables

---

## 🚀 Deployment Steps (Quick)

1. **Setup Google Sheets** (See `GOOGLE_SHEETS_SETUP.md`)

   - Create sheets with proper columns
   - Enable Google Sheets API
   - Create service account
   - Download JSON credentials
   - Share sheet with service account

2. **Deploy to Vercel** (See `DEPLOYMENT_GUIDE.md`)

   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

3. **Configure Environment Variables**

   - Add `GOOGLE_SHEET_ID` and `GOOGLE_CREDENTIALS` in Vercel

4. **Redeploy**

   ```bash
   vercel --prod
   ```

5. **Test!**
   - Submit test forms
   - Verify data appears in Google Sheets

---

## 📱 Features

✅ **Professional Design**: Clean, modern UI with responsive layout  
✅ **Client-Friendly**: Clear questions, helpful placeholders  
✅ **Validation**: Required fields, proper input types  
✅ **Real-Time Feedback**: Success/error messages  
✅ **Google Sheets Integration**: Automatic data collection  
✅ **Serverless**: No server management needed  
✅ **Free Hosting**: Vercel free tier  
✅ **HTTPS**: Secure by default  
✅ **No Database Setup**: Uses Google Sheets as database  
✅ **Easy Updates**: Just redeploy with `vercel --prod`

---

## 🎨 Customization

### Change Form Questions

Edit HTML files in `public/`:

- `voice-agent-questionnaire.html`
- `chatbot-questionnaire.html`

### Change Data Mapping

Edit API files in `api/`:

- `submit-voice-agent.js` (line 34-62: `row` array)
- `submit-chatbot.js` (line 34-69: `row` array)

### Change Styling

Modify CSS in the `<style>` tags of each HTML file.

### Change Sheet Names

Update the `range` parameter in API files:

- `api/submit-voice-agent.js` line 67
- `api/submit-chatbot.js` line 74

---

## 🔒 Security

- ✅ Service account credentials stored securely in Vercel environment variables
- ✅ No credentials in code or Git
- ✅ CORS headers configured
- ✅ HTTPS by default (Vercel)
- ✅ Input sanitization via Google Sheets API
- ✅ Limited sheet access (service account only)

---

## 📊 Data Structure

### Voice Agent Sheet Columns (27)

```
A: Timestamp
B: Purpose
C: ProblemToSolve
D: SuccessCriteria
E: CallType
F: ExpectedCallVolume
G: PeakTimes
H: InboundMethod
I: InboundOtherSpecify
J: OutboundType
K: OutboundOtherSpecify
L: ConversationComplexity
M: HasScript
N: PrimaryLanguag
O: AdditionalLanguage
P: VoicePreference
Q: TonePreference
R: ToneOtherDescribe
S: ConversationStyle
T: InfoToCollect
U: InfoToProvide
V: AgentActions
W: OtherActionsSpecify
X: SystemAccessNeeded
Y: SystemAccessDetails
Z: UseCustomerHistory
AA: KnowledgeBaseNeeded
```

### Chatbot Sheet Columns (34)

```
A: Timestamp
B: Main Purpose
C: Platform
D: Conversation Volume
E: Primary Audience
F: Conversation Complexity
G: Has Script
H: Languages
I: Tone
J: Conversation Style
K: Information to Collect
L: Information to Provide
M: Actions
N: System Access
O: User History
P: Knowledge Base
Q: Handle Unknown
R: Escalate to Human
S: When to Escalate
T: Handoff Method
U: Visual Style
V: Widget Features
W: Bot Avatar
X: Existing Platform
Y: Hosting
Z: Tech Preferences
AA: Regulations
AB: Conversation Recording
AC: Data Privacy
AD: Timeline
AE: Budget
AF: Testing Approach
AG: Success Metrics
AH: Analytics Needed
```

---

## 🐛 Troubleshooting

See `GOOGLE_SHEETS_SETUP.md` for detailed troubleshooting.

**Quick checks:**

1. ✅ Environment variables set in Vercel?
2. ✅ Service account shared with sheet (Editor access)?
3. ✅ Sheet ID correct?
4. ✅ Sheet tab names match API code?
5. ✅ Column headers match exactly?

---

## 📈 Future Enhancements

Possible improvements:

- [ ] Add email notifications on submission
- [ ] Create admin dashboard to view submissions
- [ ] Add file upload capability
- [ ] Implement multi-step forms
- [ ] Add progress indicators
- [ ] Create PDF export of responses
- [ ] Add form analytics
- [ ] Implement conditional questions
- [ ] Add multi-language support
- [ ] Create mobile app version

---

## 📞 Support

**Documentation:**

- `GOOGLE_SHEETS_SETUP.md` - Complete setup guide
- `DEPLOYMENT_GUIDE.md` - Quick deployment steps
- `README.md` - General project information

**Resources:**

- [Vercel Documentation](https://vercel.com/docs)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Node.js Documentation](https://nodejs.org/docs)

---

## 📝 License & Usage

This project is designed for client discovery in AI agent implementations. Feel free to:

- ✅ Customize forms for your needs
- ✅ Add/remove questions
- ✅ Change styling and branding
- ✅ Use for commercial projects
- ✅ Share with team members

---

## 🎉 Credits

**Built with:**

- HTML5 & CSS3
- Vanilla JavaScript
- Node.js
- Google Sheets API
- Vercel Platform

**Created for:**
AI Agent client discovery and requirements gathering

---

**Version:** 1.0.0  
**Last Updated:** October 2025  
**Status:** ✅ Production Ready
