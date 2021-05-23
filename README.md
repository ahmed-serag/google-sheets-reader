# google-sheets-reader

Node script to read private google sheet

## Pre-requisites

- [node v9.4.0 or higher](http://nodejs.org/)

- Create a google console project 

- Enable google sheets API on the project from this [link](https://console.developers.google.com/apis/api/sheets.googleapis.com/overview)

- Enable google Drive API from this [link](https://console.developers.google.com/apis/api/drive.googleapis/overview)

- Create a service account to access the google sheets from this [link](https://console.cloud.google.com/iam-admin/serviceaccounts)

- Download client_secret json file for the created service account and add it to the root dir with name `client_secret.json` to access the sheet

- Give the service account access to the sheet using the auto-created mail(from the downloaded json file)

- Replace values in `example.env` with the correct values

## development

Development requires installation of Javascript library modules using the [Node Package manager](https://www.npmjs.com/).

The following command is run from the project's root directory.

```bash
  npm install
```

Then just run `npm start` to run the script.