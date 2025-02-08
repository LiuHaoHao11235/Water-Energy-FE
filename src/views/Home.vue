<template>
  <div class="home">
    <div class="left">
      <Navbar />
    </div>
    <div class="right">
      <WaterTable />
      <EnergyTable />
    </div>
  </div>
</template>
  
  <script setup>
import Navbar from "../components/Navbar.vue";
import WaterTable from "../components/WaterTable.vue";
import EnergyTable from "../components/EnergyTable.vue";
</script>
  
  <style scoped>
</style>