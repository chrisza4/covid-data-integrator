import * as dotenv from 'dotenv'
dotenv.config()

export default {
  MEDICAL_NEED_SPREASHEET_ID: process.env.MEDICAL_NEED_SPREASHEET_ID,
  HOSPITAL_NEED_SPREADSHEET_ID: process.env.HOSPITAL_NEED_SPREADSHEET_ID,
  TARGET_PATH_1: process.env.TARGET_PATH_1,
  TARGET_PATH_2: process.env.TARGET_PATH_2,

  // Web Server config
  PORT: process.env.PORT
}
