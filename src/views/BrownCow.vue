<template>
  <!-- ฟอร์มลงทะเบียนวัวสีน้ำตาล -->
  <form @submit.prevent="submitForm">
    <label for="cowId">รหัสวัว:</label>
    <input id="cowId" v-model="cowId" type="number" min="10000000" max="99999999" required />

    <label for="farmId">รหัสฟาร์ม:</label>
    <input id="farmId" v-model="farmId" type="number" min="1" max="9" required />

    <label for="motherCowId">รหัสวัวตัวแม่ หรือแม่วัวนั่นเอง:</label>
    <input
      id="motherCowId"
      v-model="motherCowId"
      type="number"
      min="10000000"
      max="99999999"
      required
    />

    <button type="submit">ลงทะเบียน</button>
  </form>
</template>

<script setup>
import { useBrownCow } from '../controller/useBrownCowHooks.js'

// เป็นการเรียกใช้ Hook(Controller) สำหรับลงทะเบียนวัวน้ำตาล
const { cowId, farmId, motherCowId, submitForm } = useBrownCow()
</script>
