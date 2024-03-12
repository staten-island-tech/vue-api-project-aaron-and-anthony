<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
const BASE_URL = 'https://data.cityofnewyork.us/resource/ykvb-493p.json'

async function getData(BASE_URL) {
    const response = await fetch(BASE_URL)
    const data = await response.json();
    let y = Array.from(data)
    console.log(y)
    return{y}
}
console.log(getData(BASE_URL));
const x = getData(BASE_URL);

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ x.year ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>