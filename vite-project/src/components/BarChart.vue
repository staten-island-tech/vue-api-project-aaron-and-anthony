<template>
    <Bar v-if="loaded" 
    :chart-data="chartData" 
    :chart-options="chartOptions"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    
    />
</template>

<script>
const BASE_URL = 'https://data.cityofnewyork.us/resource/ykvb-493p.json'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
 
  async mounted () {
    this.loaded = false

    try {
      const response = await fetch(BASE_URL)
      const arrays = await response.json();
      this.chartdata = arrays
      
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  } ,
  props:{
    chartId:{
      type:String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
  },
  data: () => {
    return {
      chartdata: {
        labels: ['year', 'borough', 'neighborhood', 'sex', 'race'],
        datasets: [{
          label: 'aids',
          data: []}]
        },
        chartOptions: {
          responsive: true,
        },
        newChartArray: [],
        loaded: false
      }
    }
  }
</script>