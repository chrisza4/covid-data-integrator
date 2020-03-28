type MedicalEquipmentNeeds = {
  timestamp: string,
  ownerName: string,
  phone: string,
  organization: string,
  department: string,
  shippingAddress: string,
  needPPE: number,
  needSMask: number,
  needN95: number,
  needFaceShield: number,
  needOther: string,
  urgency: string,
  lineOrFacebookName: string,
  part: 'South'| 'Central' | 'East' | 'NorthEast' | 'West' | 'North'
  state: string,
  city: string,
  remark: string
}
