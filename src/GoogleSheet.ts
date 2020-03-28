import { google } from 'googleapis'
import fs from 'fs'

let _auth: any = null

export function getAuth (): any {
  if (!_auth) {
    const credentials = JSON.parse(fs.readFileSync('./credentials.json', { encoding: 'utf8' }))
    const token = JSON.parse(fs.readFileSync('./token.json', { encoding: 'utf8' }))
    const { client_secret: clientSecret, client_id: clientId, redirect_uris: redirectUris } = credentials.web
    const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUris[0])
    oAuth2Client.setCredentials(token)
    _auth = oAuth2Client
  }
  return _auth
}

export function getGoogleSheets () {
  return google.sheets({ version: 'v4', auth: getAuth() })
}
