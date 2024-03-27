<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
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
      const res = await fetch('https://data.cityofnewyork.us/resource/2rb7-7eqa.json')
      const crimes = await res.json()

      let sort_by_races = {}
      let unique_races = []
      let crime_count_by_race = []

      crimes.forEach((crime)=>{
        let race = crime.suspect_race

        if (race == undefined) race = "REDACTED"

        if (!sort_by_races.hasOwnProperty(race)){
          sort_by_races[race] = [crime]
          unique_races.push(race)
        }else{
          sort_by_races[race].push(crime)
        }

      })
      
      for (let race of unique_races){
        crime_count_by_race.push(sort_by_races[race].length)
      }

      this.chartData = {
        labels: unique_races,
        datasets: [
          {
            label: "Domestic Violence",
            backgroundColor: ['rgb(163,127,229,0.6)', 'rgb(104,171,169, 0.6)', 'rgb(216,158,184,0.6)', 'rgb(44,75,129,0.6)', 'rgb(17,158,154, 0.6)', 'rgb(71,113,174, 0.6)', 'rgb(213,125,175,0.6)', 'rgb(122,126,199, 0.6)'],
            data: crime_count_by_race
          }
        ]
      }

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>
.container{
  height: 90vh;
  width: 70vw;
}
</style>