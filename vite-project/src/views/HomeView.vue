<template>
  <div class="bar1">
    <TheWelcomething
    v-for="(destination,index) in arraydata"
    :key="index"
    :Destination="destination"
    /> 
  </div>
</template>

<script>
import TheWelcomething from '../components/TheWelcome.vue';

    const BASE_URL = 'https://data.cityofnewyork.us/resource/ykvb-493p.json'

async function getData(BASE_URL) {
    const response = await fetch(BASE_URL)
    const data = await response.json();
    console.log(data)
}
const arraydata = getData(BASE_URL);

</script>

<style lang="scss" scoped>

</style>