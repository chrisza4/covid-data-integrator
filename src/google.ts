import { google } from 'googleapis'
import fs from 'fs'
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

let _auth: any = null

type GoogleCredentials = {
  clientSecret: string,
  clientId: string,
  redirectUris: string[]
}

export function loadCredentials (): GoogleCredentials {
  const rawCredentials = JSON.parse(fs.readFileSync('./credentials.json', { encoding: 'utf8' }))
  const credentials = rawCredentials.web || rawCredentials.installed
  if (!credentials) {
    throw new Error('Invalid google credentials')
  }
  return {
    clientSecret: credentials.client_secret,
    clientId: credentials.client_id,
    redirectUris: credentials.redirect_uris
  }
}

export function getAuthUrl () {
  return getAuth().generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  })
}

export async function saveToken (code: string) {
  const oAuth2Client = getAuth()
  const token = await oAuth2Client.getToken(code)
  fs.writeFileSync('./token.json', JSON.stringify(token))
}

export function getToken () {
  return JSON.parse(fs.readFileSync('./token.json', { encoding: 'utf8' }))
}

export function getAuth (): any {
  if (!_auth) {
    const token = getToken()
    const { clientId, clientSecret, redirectUris } = loadCredentials()
    const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUris[0])
    oAuth2Client.setCredentials(token)
    _auth = oAuth2Client
  }
  return _auth
}

export function getGoogleSheets () {
  return google.sheets({ version: 'v4', auth: getAuth() })
}

export async function getWholeGoogleSheetData (spreadSheetId: string, sheetIndex: number) {
  const googleSheets = getGoogleSheets()
  const spreadsheet = await googleSheets.spreadsheets.get({
    spreadsheetId: spreadSheetId
  })
  const sheets = spreadsheet.data.sheets
  if (!sheets) {
    console.log('Sheets not exists')
    return
  }
  const sheetTitle = sheets[sheetIndex].properties?.title
  const sheetData = await googleSheets.spreadsheets.values.get({
    spreadsheetId: spreadSheetId,
    range: sheetTitle
  })
  return sheetData.data.values
}
