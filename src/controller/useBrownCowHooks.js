import { ref } from 'vue'
import { registerCow, farms, getFarmDetails } from '../model/model.js'

export function useBrownCow() {
  const cowId = ref('')
  const farmId = ref('')
  const motherCowId = ref('')

  const submitForm = () => {
    try {
      // ไปเรียกใช้ function ที่ import มาจาก model
      registerCow(farmId.value, {
        color: 'brown',
        cowId: cowId.value,
        motherCowId: motherCowId.value
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
    motherCowId,
    submitForm
  }
}
