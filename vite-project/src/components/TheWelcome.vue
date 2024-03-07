<template>
  <div class="card">
    <h1>{{ Destination.year }}</h1>
    <h2>{{ Destination.neighborhood }}</h2>
    <h3>{{ Destination.sex }}</h3>
    <h4>{{ Destination.race }}</h4>
  </div>
</template>
    
  
  <script setup>
  const props = defineProps({
    Destination: Object,
  });
  
  </script>
  
  <style scoped>
  
  </style>