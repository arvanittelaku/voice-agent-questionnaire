const { google } = require('googleapis');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse Google credentials from environment variable
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    
    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const formData = req.body;

    // Prepare row data matching Google Sheets columns exactly
    const row = [
      new Date().toISOString(), // Timestamp
      formData.Purpose || '',
      formData.ProblemToSolve || '',
      formData.SuccessCriteria || '',
      formData.CallType || '',
      formData.ExpectedCallVolume || '',
      formData.PeakTimes || '',
      formData.InboundMethod || '',
      formData.InboundOtherSpecify || '',
      formData.OutboundType || '',
      formData.OutboundOtherSpecify || '',
      formData.ConversationComplexity || '',
      formData.HasScript || '',
      formData.PrimaryLanguage || '', // Note: Form uses PrimaryLanguage, sheet expects PrimaryLanguag
      formData.AdditionalLanguage || '',
      formData.VoicePreference || '',
      formData.TonePreference || '',
      formData.ToneOtherDescribe || '',
      formData.ConversationStyle || '',
      formData.InfoToCollect || '',
      formData.InfoToProvide || '',
      formData.AgentActions || '',
      formData.OtherActionsSpecify || '',
      formData.SystemAccessNeeded || '',
      formData.SystemAccessDetails || '',
      formData.UseCustomerHistory || '',
      formData.KnowledgeBaseNeeded || ''
    ];

    // Append row to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID_VOICE || process.env.GOOGLE_SHEET_ID,
      range: 'A:AA', // Write to first sheet
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [row],
      },
    });

    res.status(200).json({ 
      success: true, 
      message: 'Voice Agent questionnaire submitted successfully!' 
    });
    
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    res.status(500).json({ 
      error: 'Failed to submit form', 
      details: error.message 
    });
  }
};

