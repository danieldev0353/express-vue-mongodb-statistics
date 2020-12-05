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
    historicalFigures: [ 
      {name: 'person1', age: 5},
      {name: 'person2', age: 6}
      ],
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