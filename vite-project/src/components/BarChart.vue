<template>
<div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import {ref, watch} from 'vue'

const chartData = ref(null)

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: ref(null)
  }),
  async mounted () {
    this.loaded = false
    chartData.value = ref([])
    
  const response = await fetch ('https://data.cityofnewyork.us/resource/5t4n-d72c.json')
  const yay = Array.from(await response.json())
  chartData.value = yay

console.log(chartData)
    try {
      this.chartData = chartData

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>