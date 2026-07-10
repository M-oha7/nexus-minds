// Google Sheets Integration for Nexus Minds Feedback
// This sends feedback data to a Google Sheet via Google Apps Script Web App

export async function sendFeedbackToGoogleSheets(feedbackData) {
  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
  
  if (!scriptUrl) {
    console.log('Google Sheets URL not configured. Feedback saved locally only.');
    return { success: false, reason: 'no_url' };
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    });

    // Since mode is 'no-cors', we can't read the response
    // We assume success if no error was thrown
    return { success: true };
  } catch (error) {
    console.error('Error sending feedback to Google Sheets:', error);
    return { success: false, reason: 'network_error', error: error.message };
  }
}

// Feedback data structure:
// {
//   timestamp: string,
//   mindType: string,
//   feedback: 'accurate' | 'inaccurate',
//   reason?: string,
//   language: 'en' | 'ar',
//   userAgent: string
// }
