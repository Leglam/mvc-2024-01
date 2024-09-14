import { ref } from 'vue'
import { registerCow, farms, getFarmDetails } from '../model/model.js'

export function useWhiteCow() {
  const cowId = ref('')
  const farmId = ref('')
  const ageYears = ref(0)
  const ageMonths = ref(0)

  // Validate age fields
  const validateAge = (years, months) => {
    if (years < 0 || years > 10) {
      throw new Error('ปีต้องระหว่าง 0 ถึง 10 ปี')
    }
    if (months < 0 || months > 11) {
      throw new Error('เดือนต้องระหว่าง 0 ถึง 11 เดือน')
    }
  }

  const submitForm = () => {
    try {
      // รับเอาอายุเข้ามาแล้วไปเรียกเช็คใน function validateAge
      validateAge(ageYears.value, ageMonths.value)

      // ไปเรียกใช้ function ที่ import มาจาก model
      registerCow(farmId.value, {
        color: 'white',
        cowId: cowId.value,
        age: { years: ageYears.value, months: ageMonths.value }
      })

      // สร้างข้อความแจ้งเตือนสำหรับรายละเอียดของทุกฟาร์ม
      const farmDetailsList = Object.keys(farms)
        .map((farmId) => {
          const details = getFarmDetails(farmId)
          return `ฟาร์ม ${farmId}: วัวสีขาว ${details.white} ตัว, วัวสีน้ำตาล ${details.brown} ตัว, วัวสีชมพู ${details.pink} ตัว`
        })
        .join('\n')

      // เป็นการแสดงข้อความบนหน้าจอ
      alert(`ลงทะเบียนสำเร็จ\n${farmDetailsList}`)
    } catch (error) {
      alert(error.message)
    }
  }

  return {
    cowId,
    farmId,
    ageYears,
    ageMonths,
    submitForm
  }
}
