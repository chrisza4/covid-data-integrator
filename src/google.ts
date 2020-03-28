import { google } from 'googleapis'
import fs from 'fs'

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

export function getAuth (): any {
  if (!_auth) {
    const token = JSON.parse(fs.readFileSync('./token.json', { encoding: 'utf8' }))
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
