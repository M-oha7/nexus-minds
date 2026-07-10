# Google Sheets Setup for Nexus Minds Feedback

This guide will help you set up Google Sheets to collect user feedback from the Nexus Minds app.

## Step 1: Create a Google Sheet

1. Go to https://sheets.google.com
2. Create a new blank spreadsheet
3. Name it "Nexus Minds Feedback" (or any name you prefer)
4. In the first row, add these headers:
   - Timestamp
   - Mind Type
   - Feedback
   - Reason
   - Language
   - User Agent

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  try {
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.mindType,
      data.feedback,
      data.reason || '',
      data.language,
      data.userAgent
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script (Ctrl+S or Cmd+S)
4. Name it "Feedback Handler"

## Step 3: Deploy as Web App

1. Click the blue **Deploy** button (top right)
2. Select **New deployment**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **Web app**
5. Fill in:
   - **Description**: "Nexus Minds Feedback API"
   - **Execute as**: "Me" (your email)
   - **Who has access**: "Anyone" (important!)
6. Click **Deploy**
7. Copy the **Web app URL** (it starts with https://script.google.com/...)

## Step 4: Add URL to Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Key**: `VITE_GOOGLE_SCRIPT_URL`
   - **Value**: (paste the Web app URL you copied)
4. Click **Save**
5. Redeploy your project

## Step 5: Add URL to Local Development (Optional)

If you want to test locally:

1. Create a `.env` file in the project root
2. Add: `VITE_GOOGLE_SCRIPT_URL=your_web_app_url_here`
3. Restart your dev server

## Testing

1. Complete the test in the app
2. On the results page, click "Yes, this feels accurate" or "No, this doesn't describe me"
3. Check your Google Sheet - a new row should appear

## Troubleshooting

**No data appearing in Google Sheet:**
- Make sure the Web app is deployed with "Anyone" access
- Check the URL is correct in Vercel environment variables
- Redeploy your Vercel project after adding the variable

**CORS errors:**
- The script uses `mode: 'no-cors'` to avoid CORS issues
- This means we can't read the response, but the data should still be sent

**Script execution errors:**
- Check the Google Apps Script logs (View → Logs)
- Make sure the sheet has the correct headers in row 1
