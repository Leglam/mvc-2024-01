const allCows = {} // เก็บค่าวัวที่สมัคร

export const farms = {} // เก็บข้อมูลของสีและจำนวนวัวในฟาร์มนั้นๆ

// ฟังก์ชันสำหรับ register วัว
export function registerCow(farmId, cow) {
  if (!farms[farmId]) {
    farms[farmId] = { white: 0, brown: 0, pink: 0, cows: {} }
  }

  // Check ว่ารหัสวัวตัวนี้เคยลงทะเบียนไปแล้วหรือไม่
  if (allCows[cow.cowId]) {
    throw new Error('รหัสวัวนี้ได้ถูกลงทะเบียนไว้แล้ว')
  }

  // ตรวจสอบว่ารหัสของแม่วัวที่ระบุมีอยู่ในระบบหรือไม่
  if (cow.motherCowId && !allCows[cow.motherCowId]) {
    throw new Error('แม่วัวที่ระบุไม่พบในระบบ')
  }

  // ตรวจสอบสีของวัวและเพิ่มข้อมูลวัวในฟาร์มที่เลือก
  if (cow.color === 'white' && farms[farmId].brown === 0 && farms[farmId].pink === 0) {
    farms[farmId].white += 1
  } else if (cow.color === 'brown' && farms[farmId].white === 0 && farms[farmId].pink === 0) {
    farms[farmId].brown += 1
  } else if (cow.color === 'pink' && farms[farmId].white === 0 && farms[farmId].brown === 0) {
    farms[farmId].pink += 1
  } else {
    throw new Error('ฟาร์มนี้ไม่สามารถรับวัวสีนี้ได้')
  }

  farms[farmId].cows[cow.cowId] = cow
  allCows[cow.cowId] = cow
}

export function getFarmDetails(farmId) {
  if (!farms[farmId]) {
    throw new Error('ฟาร์มไม่พบ')
  }
  return farms[farmId]
}
