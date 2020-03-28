# Covid-data-integrator

Simple ETL System extracting data from Google Sheets.

At this stage, this codebase is meant to provide a sample code.

## Prerequiste

1. [Node.js](https://nodejs.org/en/)
2. NPM or [Yarn](https://yarnpkg.com/) (Yarn recommended).
3. Google API Credentials, store in `credentials.json`. More information at [QuickStart](https://developers.google.com/sheets/api/quickstart/nodejs) step 1.

## Getting started

1. Install dependencies using `yarn` or `npm install`
2. Get Environment variable need from the team
3. Set Target Path in .env file TARGET_PATH
4. Build JS from Typescript using `yarn build` or `yarn tsc:watch`
5. Fetch oAuth token using `node ./fetchToken.js` and do steps as in these screenshots

![1](/resources/fetch-token-1.png)

![2](/resources/fetch-token-2.png)

6. run `node ./dist/extract/google-form-1.js`
7. Look at the result in file put at step 3 (TARGET_PATH)

## Note 
For ==> .evn
MEDICAL_NEED_SPREASHEET_ID=changeme

TARGET_PATH_1=/yourpath/data1.json --> for sheet "อาสาดุสิต"

TARGET_PATH_2=/yourpath/data2.json --> for sheet "หาชุดหมีให้พี่หมอ"
