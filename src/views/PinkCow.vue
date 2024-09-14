<template>
  <!-- ฟอร์มลงทะเบียนวัวสีชมพู -->
  <form @submit.prevent="submitForm">
    <label for="cowId">รหัสวัว:</label>
    <input id="cowId" v-model="cowId" type="number" min="10000000" max="99999999" required />

    <label for="farmId">รหัสฟาร์ม:</label>
    <input id="farmId" v-model="farmId" type="number" min="1" max="9" required />

    <label for="ownerFirstName">ชื่อเจ้าของ (ชื่อ):</label>
    <input id="ownerFirstName" v-model="ownerFirstName" type="text" maxlength="8" required />

    <label for="ownerLastName">นามสกุลเจ้าของ (นามสกุล):</label>
    <input id="ownerLastName" v-model="ownerLastName" type="text" maxlength="8" required />

    <button type="submit">ลงทะเบียน</button>
  </form>
</template>

<script setup>
import { usePinkCow } from '../controller/usePinkCowHooks.js'

// เป็นการเรียกใช้ Hook(Controller) สำหรับลงทะเบียนวัวชมพู
const { cowId, farmId, ownerFirstName, ownerLastName, submitForm } = usePinkCow()
</script>
