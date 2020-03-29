type HospitalNeeds = {
  HospitalName: string, //ชื่ิอโรงพยาบาล
  Zone: string, //ภาค
  //จำนวนคนไข้้
  PatientNumber: {
    number: string, //จำนวนคนไข้
    waite_result: string, //จำนวนคนไข้ที่รอผล COVID
    coma: string //คนไข้โคม่า
  },
  //Alcohol
  Alcohol: {
    need: string, //จำนวนที่ต้องการเพิ่ม
    urgent: number, //ความเร่งด่วน
    donated: number, //ได้รับบริจาคแล้ว
  },
  //Face Shield
  FaceShield: {
    need: string, //จำนวนที่ต้องการเพิ่ม
    urgent: number, //ความเร่งด่วน
    donated: number, //ได้รับบริจาคแล้ว
  },
  //Goggles
  Goggles: {
    need: string, //จำนวนที่ต้องการเพิ่ม
    urgent: number, //ความเร่งด่วน
    donated: number, //ได้รับบริจาคแล้ว
  },
  //Surgical Masks
  SurgicalMasks: {
    need: string, //จำนวนที่ต้องการเพิ่ม
    urgent: number, //ความเร่งด่วน
    donated: number, //ได้รับบริจาคแล้ว
  },
  //Cover all /ชุดหมี/ PPE
  CoverAll: {
    need: string, //จำนวนที่ต้องการเพิ่ม
    urgent: number, //ความเร่งด่วน
    donated: number, //ได้รับบริจาคแล้ว
  },
  //N 95
  N95: {
    need: string, //จำนวนที่ต้องการเพิ่ม
    urgent: number, //ความเร่งด่วน
    donated: number, //ได้รับบริจาคแล้ว
  },

  //เสื้อกาวน์กันน้ำ
  Shirt: {
    need: string, //จำนวนที่ต้องการเพิ่ม
    urgent: number, //ความเร่งด่วน
    donated: number, //ได้รับบริจาคแล้ว
  },

  //Hood
  Hood: {
    need: string, //จำนวนที่ต้องการเพิ่ม
    urgent: number, //ความเร่งด่วน
    donated: number, //ได้รับบริจาคแล้ว
  },
  //Leg Cover
  LegCover: {
    need: string, //จำนวนที่ต้องการเพิ่ม
    urgent: number, //ความเร่งด่วน
    donated: number, //ได้รับบริจาคแล้ว
  },
  //ตู้อะคิลิคสอดท่อช่วยหายใจ
  AcrylicCabinet: {
    need: string, //จำนวนที่ต้องการเพิ่ม
    urgent: number, //ความเร่งด่วน
    donated: number, //ได้รับบริจาคแล้ว
  },
  //กล่อง UV
  UVBox: {
    need: string, //จำนวนที่ต้องการเพิ่ม
    urgent: number, //ความเร่งด่วน
    donated: number, //ได้รับบริจาคแล้ว
  },
  //อื่นๆ โปรดระบุ
  Other: {
    comment: string, //หมายเหตุ
    need: string, //จำนวนที่ต้องการเพิ่ม
    urgent: number, //ความเร่งด่วน
    donated: number, //ได้รับบริจาคแล้ว
  },
  //ข้อมูลจาก
  from: string //ข้อมูลจาก

}
