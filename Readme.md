# Covid-data-integrator

Simple ETL System extracting data from Google Sheets.

At this stage, this codebase is meant to provide a sample code.

## Prerequiste

1. Node.js
2. NPM or Yarn (yarn recommended)
3. Google API Credentials, store in `credentials.json`

## Getting started

1. Install dependencies using `yarn` or `npm install`
2. Get Environment variable need from the team
3. Set Target Path in .env file TARGET_PATH
4. Fetch oAuth token using `node ./fetchToken.js`
5. Build JS from Typescript using `yarn build` or `yarn tsc:watch`
6. run `node ./dist/extract/google-form-1.js`
7. Look at the result in file put at step 3 (TARGET_PATH)
