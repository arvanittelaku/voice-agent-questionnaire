# AI Agent Discovery Questionnaires

Professional discovery questionnaires for Voice Agent and Chatbot implementation projects, with Vercel hosting and Google Sheets integration.

## 🚀 Features

- ✅ Two comprehensive questionnaires (Voice Agent & Chatbot)
- ✅ Professional UI with modern design
- ✅ Automatic submission to Google Sheets
- ✅ Hosted on Vercel (free tier)
- ✅ Mobile-responsive design
- ✅ Real-time form validation
- ✅ Success/error messaging
- ✅ No database setup required

## 📋 What's Included

1. **Voice Agent Questionnaire** - 30 questions covering:

   - Call types (inbound/outbound)
   - Conversation design
   - Technical requirements
   - Integration needs
   - Budget & timeline

2. **Chatbot Questionnaire** - 35 questions covering:
   - Platform deployment
   - UI/UX preferences
   - Features & functionality
   - Integration requirements
   - Analytics & reporting

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+ installed
- Google account (for Google Sheets)
- Google Cloud account (free tier)
- Vercel account ([sign up free](https://vercel.com))

### Setup Instructions

**📖 For detailed step-by-step instructions, see:**

- **[GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md)** - Complete Google Sheets API setup
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Quick deployment to Vercel
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Full project overview

### Quick Setup (5 steps)

1. **Create Google Sheet** with proper column headers
2. **Enable Google Sheets API** in Google Cloud Console
3. **Create Service Account** and download JSON credentials
4. **Share Sheet** with service account email (Editor access)
5. **Deploy to Vercel** with environment variables

### Deployment (3 commands)

```bash
# Install dependencies
npm install

# Login to Vercel
vercel login

# Deploy
vercel
```

Then configure environment variables in Vercel Dashboard:

- `GOOGLE_SHEET_ID` - Your Google Sheet ID
- `GOOGLE_CREDENTIALS` - Service account JSON credentials

**See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for complete instructions.**

## 📂 Project Structure

```
.
├── api/
│   ├── submit-chatbot.js      # Chatbot API endpoint
│   └── submit-voice-agent.js  # Voice Agent API endpoint
├── public/
│   ├── index.html             # Landing page
│   ├── chatbot-questionnaire.html
│   ├── voice-agent-questionnaire.html
│   └── js/
│       └── form-handler.js    # Form submission logic
├── package.json
├── vercel.json
├── env.example                # Environment variables template
└── README.md
```

## 🔧 Customization

### Change Form Fields

Edit the HTML files in `public/`:

- `public/voice-agent-questionnaire.html`
- `public/chatbot-questionnaire.html`

### Change Sheet Column Mapping

Update the API endpoints in `api/`:

```javascript
// In api/submit-voice-agent.js or api/submit-chatbot.js
const row = [
  new Date().toISOString(),
  formData.fieldName || "",
  // Add more fields to match your sheet columns
];
```

### Change Styling

Edit the `<style>` section in the HTML files to customize colors, fonts, etc.

## 🌐 URLs

After deployment, your URLs will be:

- Landing page: `https://your-project.vercel.app`
- Voice Agent form: `https://your-project.vercel.app/voice-agent-questionnaire.html`
- Chatbot form: `https://your-project.vercel.app/chatbot-questionnaire.html`

## 🐛 Troubleshooting

### Forms not submitting?

1. ✅ Check environment variables are set in Vercel
2. ✅ Verify service account is shared with the sheet (Editor access)
3. ✅ Confirm `GOOGLE_SHEET_ID` is correct
4. ✅ Check browser console for errors (F12)

### Google Sheets API errors?

1. ✅ Sheet tab names match: `Voice Agent` and `Chatbot`
2. ✅ Service account has Editor access
3. ✅ Credentials JSON is complete in environment variable
4. ✅ Google Sheets API is enabled in Cloud Console

**See [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md) for detailed troubleshooting.**

## 📊 Viewing Submissions

1. **Open your Google Sheet**
2. **Check the tabs**: `Voice Agent` and `Chatbot`
3. **View submissions** with automatic timestamps
4. **Export to CSV** or use Google Sheets integrations

## 🔒 Security

- ✅ Service account credentials stored as environment variables (never in code)
- ✅ CORS headers configured in API endpoints
- ✅ HTTPS by default (Vercel)
- ✅ Limited sheet access (service account only)
- ✅ Input sanitization via Google Sheets API

## 📱 Mobile Support

Both forms are fully responsive and work on:

- Desktop browsers
- Tablets
- Mobile phones

## 📈 Next Steps

- Add email notifications when forms are submitted
- Create a dashboard to view submissions
- Add analytics tracking
- Implement form validation rules
- Add file upload capability
- Create PDF download of submitted forms

## 💡 Tips

- Test forms in incognito/private mode to ensure they work for new users
- Share direct links to specific questionnaires with clients
- Monitor your Google Sheet for new submissions
- Use Google Sheets features (pivot tables, charts) to analyze data
- Set up Google Sheets notifications for new submissions

## 🤝 Support & Documentation

**Project Documentation:**

- **[GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md)** - Complete Google Sheets setup guide
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Step-by-step deployment instructions
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Full project overview and architecture

**External Resources:**

- [Vercel Documentation](https://vercel.com/docs)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Node.js Documentation](https://nodejs.org/docs)

## 📄 License

This project is for internal use. Customize as needed for your business.

---

**Built with ❤️ for AI Agent implementations**
