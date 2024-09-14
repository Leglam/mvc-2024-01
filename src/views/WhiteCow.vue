<template>
  <!-- ฟอร์มลงทะเบียนวัวสีขาว -->
  <form @submit.prevent="submitForm">
    <label for="cowId">รหัสวัว:</label>
    <input id="cowId" v-model="cowId" type="number" min="10000000" max="99999999" required />

    <label for="farmId">รหัสฟาร์ม:</label>
    <input id="farmId" v-model="farmId" type="number" min="1" max="9" required />

    <label for="ageYears">อายุ (ปี):</label>
    <input id="ageYears" v-model.number="ageYears" type="number" min="0" max="10" required />

    <label for="ageMonths">อายุ (เดือน):</label>
    <input id="ageMonths" v-model.number="ageMonths" type="number" min="0" max="11" required />

    <button type="submit">ลงทะเบียน</button>
  </form>
</template>

<script setup>
import { useWhiteCow } from '../controller/useWhiteCowHooks.js'

// เป็นการเรียกใช้ Hook(Controller) สำหรับลงทะเบียนวัวขาว ที่เป็นนักมวย?
const { cowId, farmId, ageYears, ageMonths, submitForm } = useWhiteCow()
</script>
