# Google Sheets feedback setup

1. Create a Google Sheet.
2. Open Extensions > Apps Script.
3. Paste this code:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents || '{}');

  sheet.appendRow([
    new Date(),
    data.accurate || '',
    data.reason || '',
    data.mindType || '',
    data.language || '',
    JSON.stringify(data.answers || [])
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click Deploy > New deployment.
5. Choose Web app.
6. Set "Who has access" to "Anyone".
7. Copy the Web app URL.
8. Add it in Vercel as:

```txt
VITE_FEEDBACK_ENDPOINT=YOUR_WEB_APP_URL
```

9. Redeploy the project.
