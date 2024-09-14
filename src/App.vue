<template>
  <div>
    <h1>ระบบลงทะเบียนวัว</h1>
    <!-- ปุ่มสำหรับแสดงฟอร์มลงทะเบียนวัว -->
    <button @click="showView('white')">ลงทะเบียนวัวสีขาว</button>
    <button @click="showView('brown')">ลงทะเบียนวัวสีน้ำตาล</button>
    <button @click="showView('pink')">ลงทะเบียนวัวสีชมพู</button>

    <!-- แสดงฟอร์มที่เลือก -->
    <component :is="currentView" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import WhiteCow from './views/WhiteCow.vue';
import BrownCow from './views/BrownCow.vue';
import PinkCow from './views/PinkCow.vue';

const currentView = ref(null);

// ฟังก์ชันเพื่อเปลี่ยนฟอร์มที่จะแสดงตามสีของวัวที่เลือก
const showView = (color) => {
  if (color === 'white') currentView.value = WhiteCow;
  else if (color === 'brown') currentView.value = BrownCow;
  else if (color === 'pink') currentView.value = PinkCow;
};
</script>