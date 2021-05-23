/**
 * @author Ahmed Serag
 * @date 2021-05-23
 * @description POC for accessing local spreadsheet.
 * @filename index.js
 */
const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./client_secret.json');

console.log(process.env.GOOGLE_DOCUMENT_ID);

async function accessSpreadsheet() {
  const doc = new GoogleSpreadsheet.GoogleSpreadsheet(process.env.GOOGLE_DOCUMENT_ID);
  // gain access to google sheet
  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  });
  // load spreadsheet info
  await doc.loadInfo();
  // get access to the first sheet in the document
  const sheet = doc.sheetsByIndex[0];

  console.log(`Sheet title ${sheet.title}`);

}


accessSpreadsheet();