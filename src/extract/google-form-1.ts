import { getGoogleSheets } from '../GoogleSheet'
import * as dotenv from 'dotenv'
import fs from 'fs'
dotenv.config()

async function getWholeSheetData () {
  const sheetId = process.env.MEDICAL_NEED_SPREASHEET_ID
  const googleSheets = getGoogleSheets()
  const spreadsheet = await googleSheets.spreadsheets.get({
    spreadsheetId: sheetId
  })
  const sheets = spreadsheet.data.sheets
  if (!sheets) {
    console.log('Sheets not exists')
    return
  }
  const sheetTitle = sheets[0].properties?.title
  const sheetData = await googleSheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: sheetTitle
  })
  return sheetData.data.values
}

async function extract (): Promise<MedicalEquipmentNeeds[]> {
  const data = await getWholeSheetData()
  if (!data) {
    return []
  }
  const result: MedicalEquipmentNeeds[] = []
  const startIndex = 2 // Sheet start at row 3
  for (let rowIndex = startIndex; true; rowIndex++) {
    const thisRow = data[rowIndex]
    if (!thisRow || !thisRow[0]) {
      break
    }
    result.push({
      timestamp: thisRow[0],
      ownerName: thisRow[1],
      phone: thisRow[2],
      department: thisRow[3],
      shippingAddress: thisRow[4],
      needPPE: thisRow[5],
      needSMask: thisRow[6],
      needN95: thisRow[7],
      needFaceShield: thisRow[8],
      needOther: thisRow[9],
      urgency: thisRow[10],
      organization: thisRow[11],
      lineOrFacebookName: thisRow[12],
      part: thisRow[13],
      state: thisRow[14],
      city: thisRow[15],
      remark: thisRow[16]
    })
  }
  return result
}

export async function run () {
  const s = await extract()
  fs.writeFileSync('/tmp/data.json', JSON.stringify(s, null, 2), { encoding: 'utf8' })
}

run().then(() => console.log('Done'))
