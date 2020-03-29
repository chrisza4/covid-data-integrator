import { getGoogleSheets } from '../google'
import * as dotenv from 'dotenv'
import fs from 'fs'
dotenv.config()

async function getWholeSheetData() {
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

async function extract(): Promise<HospitalNeeds[]> {
  const data = await getWholeSheetData()
  if (!data) {
    return []
  }
  const result: HospitalNeeds[] = []
  const startIndex = 2 // Sheet start at row 3
  for (let rowIndex = startIndex; true; rowIndex++) {
    const thisRow = data[rowIndex]
    if (!thisRow || !thisRow[0]) {
      break
    }
    result.push({
      HospitalName: thisRow[0], //ชื่ิอโรงพยาบาล
      Zone: thisRow[1], //ภาค
      //จำนวนคนไข้้
      PatientNumber: {
        number: thisRow[2], //จำนวนคนไข้
        waite_result: thisRow[3], //จำนวนคนไข้ที่รอผล COVID
        coma: thisRow[4] //คนไข้โคม่า
      },
      //Alcohol
      Alcohol: {
        need: thisRow[5], //จำนวนที่ต้องการเพิ่ม
        urgent: thisRow[6], //ความเร่งด่วน
        donated: thisRow[7], //ได้รับบริจาคแล้ว
      },
      //Face Shield
      FaceShield: {
        need: thisRow[8], //จำนวนที่ต้องการเพิ่ม
        urgent: thisRow[9], //ความเร่งด่วน
        donated: thisRow[10], //ได้รับบริจาคแล้ว
      },
      //Goggles
      Goggles: {
        need: thisRow[11], //จำนวนที่ต้องการเพิ่ม
        urgent: thisRow[12], //ความเร่งด่วน
        donated: thisRow[13], //ได้รับบริจาคแล้ว
      },
      //Surgical Masks
      SurgicalMasks: {
        need: thisRow[14], //จำนวนที่ต้องการเพิ่ม
        urgent: thisRow[15], //ความเร่งด่วน
        donated: thisRow[16], //ได้รับบริจาคแล้ว
      },
      //Cover all /ชุดหมี/ PPE
      CoverAll: {
        need: thisRow[17], //จำนวนที่ต้องการเพิ่ม
        urgent: thisRow[18], //ความเร่งด่วน
        donated: thisRow[19], //ได้รับบริจาคแล้ว
      },
      //N 95
      N95: {
        need: thisRow[20], //จำนวนที่ต้องการเพิ่ม
        urgent: thisRow[21], //ความเร่งด่วน
        donated: thisRow[22], //ได้รับบริจาคแล้ว
      },
    
      //เสื้อกาวน์กันน้ำ
      Shirt: {
        need: thisRow[23], //จำนวนที่ต้องการเพิ่ม
        urgent: thisRow[24], //ความเร่งด่วน
        donated: thisRow[25], //ได้รับบริจาคแล้ว
      },
    
      //Hood
      Hood: {
        need: thisRow[26], //จำนวนที่ต้องการเพิ่ม
        urgent: thisRow[27], //ความเร่งด่วน
        donated: thisRow[28], //ได้รับบริจาคแล้ว
      },
      //Leg Cover
      LegCover: {
        need: thisRow[29], //จำนวนที่ต้องการเพิ่ม
        urgent: thisRow[30], //ความเร่งด่วน
        donated: thisRow[31], //ได้รับบริจาคแล้ว
      },
      //ตู้อะคิลิคสอดท่อช่วยหายใจ
      AcrylicCabinet: {
        need: thisRow[32], //จำนวนที่ต้องการเพิ่ม
        urgent: thisRow[33], //ความเร่งด่วน
        donated: thisRow[34], //ได้รับบริจาคแล้ว
      },
      //กล่อง UV
      UVBox: {
        need: thisRow[35], //จำนวนที่ต้องการเพิ่ม
        urgent: thisRow[36], //ความเร่งด่วน
        donated: thisRow[37], //ได้รับบริจาคแล้ว
      },
      //อื่นๆ โปรดระบุ
      Other: {
        comment: thisRow[38], //หมายเหตุ
        need: thisRow[39], //จำนวนที่ต้องการเพิ่ม
        urgent: thisRow[40], //ความเร่งด่วน
        donated: thisRow[41], //ได้รับบริจาคแล้ว
      },
      //ข้อมูลจาก
      from: thisRow[42] //ข้อมูลจาก

    })
  }
  return result
}

export async function run() {
  const path = process.env.TARGET_PATH_2
  if (!path) {
    console.log('Please specify target path in .env with name TARGET_PATH_2')
    return
  }
  const data = await extract()
  console.log('Rows = ', data.length)
  fs.writeFileSync(path, JSON.stringify(data, null, 2), { encoding: 'utf8' })
}

run().then(() => console.log('Done'))
