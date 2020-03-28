import { google } from 'googleapis'
import fs from 'fs'

let _auth: any = null
export function getAuth (): any {
  if (!_auth) {
    const credentials = JSON.parse(fs.readFileSync('./credentials.json', { encoding: 'utf8' }))
    const token = JSON.parse(fs.readFileSync('./token.json', { encoding: 'utf8' }))
    // eslint-disable-next-line camelcase
    const { client_secret, client_id, redirect_uris } = credentials.web
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0])
    oAuth2Client.setCredentials(token)
    _auth = oAuth2Client
  }
  return _auth
}

export function getSheets () {
  return google.sheets({ version: 'v4', auth: getAuth() })
}
