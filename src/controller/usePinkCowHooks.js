import { ref } from 'vue'
import { registerCow, farms, getFarmDetails } from '../model/model.js'

export function usePinkCow() {
  const cowId = ref('')
  const farmId = ref('')
  const ownerFirstName = ref('')
  const ownerLastName = ref('')

  const isLowerCase = (str) => /^[a-z]+$/.test(str) // เป็นการเช็คว่าเป็นตัวพิมพ์เล็กแล้วหรือยัง

  const submitForm = () => {
    if (!isLowerCase(ownerFirstName.value) || !isLowerCase(ownerLastName.value)) {
      alert('ชื่อเจ้าของและนามสกุลเจ้าของต้องเป็นตัวอักษรภาษาอังกฤษพิมพ์เล็กเท่านั้น')
      return
    }

    try {
      // ไปเรียกใช้ function ที่ import มาจาก model
      registerCow(farmId.value, {
        color: 'pink',
        cowId: cowId.value,
        ownerFirstName: ownerFirstName.value,
        ownerLastName: ownerLastName.value
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
    ownerFirstName,
    ownerLastName,
    submitForm
  }
}
