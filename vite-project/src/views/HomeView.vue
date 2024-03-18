<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>

import {ref, onMounted } from 'vue'
const stats = ref('')
const BASE_URL = 'https://data.cityofnewyork.us/resource/ykvb-493p.json'

async function getData() {
    let response = await fetch(BASE_URL)
    let data = await response.json();
    console.log(data)
}
getData()


import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false

    try {
      const { userlist } = await fetch(BASE_URL)
      this.chartdata = userlist.borough

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
// https://stackabuse.com/count-number-of-element-occurrences-in-javascript-array/
</script>

<style lang="scss" scoped>

</style>