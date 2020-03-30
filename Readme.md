# Covid-data-integrator

Simple ETL System extracting data from Google Sheets.

At this stage, this codebase is meant to provide a sample code.

## Prerequiste

1. [Node.js](https://nodejs.org/en/)
2. NPM or [Yarn](https://yarnpkg.com/) (Yarn recommended).
3. Google API Credentials, store in `credentials.json`. More information at [QuickStart](https://developers.google.com/sheets/api/quickstart/nodejs) step 1.

For development environment, please set Google credential redirect uri at http://localhost:3000/oauth-callback

## Getting started

1. Install dependencies using `yarn` or `npm install`
2. Get Environment variable need from the team
3. Set Target Path in .env file TARGET_PATH
4. Build JS from Typescript using `yarn build` or `yarn tsc:watch`
5. run `yarn dev-web` in another terminal and open http://localhost:3000
6. If you see a message `Please sign in with Google Id before fetching the data`, click on Login with Google
7. Authorize the app to have access to Google Sheet
8. Look at the result in file put at step 3 (TARGET_PATH)

## Note
**Example** .env file

```
MEDICAL_NEED_SPREASHEET_ID=changeme
TARGET_PATH_1=/yourpath/data1.json # --> for sheet "อาสาดุสิต"
TARGET_PATH_2=/yourpath/data2.json # --> for sheet "หาชุดหมีให้พี่หมอ"
```
