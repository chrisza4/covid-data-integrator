import { getWholeGoogleSheetData } from '../google'
import Config from '../config'
import fs from 'fs'

async function extract (): Promise<MedicalEquipmentNeeds[]> {
  const spreadSheetId = Config.MEDICAL_NEED_SPREASHEET_ID
  if (!spreadSheetId) {
    throw Error('Please set environment variable MEDICAL_NEED_SPREASHEET_ID')
  }
  const data = await getWholeGoogleSheetData(spreadSheetId, 0)
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
  const path = Config.TARGET_PATH_1
  if (!path) {
    console.log('Please specify target path in .env with name TARGET_PATH_1')
    return
  }
  const data = await extract()
  console.log('Rows = ', data.length)
  fs.writeFileSync(path, JSON.stringify(data, null, 2), { encoding: 'utf8' })
}

run().then(() => console.log('Done'))
