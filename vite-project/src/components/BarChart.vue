<template>
  <Bar v-if="loaded" :chart-data="chartData" :chart-options="chartOptions" :chart-id="chartId"
    :dataset-id-key="datasetIdKey" />
</template>

<script>
const BASE_URL = 'https://data.cityofnewyork.us/resource/5t4n-d72c.json'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { ref } from 'vue'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',

  mounted: function () {
    this.fetchData()

  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
  },
  methods: {
    fetchData: async function () {
      try {
        const response = await fetch(BASE_URL)
        const arrays = await response.json();
        this.chartData = arrays
        console.log(arrays)
        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    },
  },
  data() {
    return {
      chartdata: {
        labels: ['year', 'area', 'homeless-estimates'],
        datasets: [{
          label: 'homeless',
          data: ref([])
        }]
      },
      chartOptions: {
        responsive: true,
      },
      newChartArray: ref([]),
      loaded: false
    }
  }
}
</script>