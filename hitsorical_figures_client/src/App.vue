<template>
  <div>
    <h1>Historical Figures</h1>
    <figures-list :historicalFigures="historicalFigures" />
  </div>
</template>

<script>
import figuresList from './components/figuresList'
export default {
  name: 'app',
  data(){
  return {
    historicalFigures: [],
    favourites: []
    }
  },

  mounted(){

  },

  components: {
  'figures-list': figuresList
  },

  methods: {

  }
}
</script>

<style lang="css" scoped>

</style>