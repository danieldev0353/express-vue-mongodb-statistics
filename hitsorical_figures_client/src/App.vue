<template>
  <div id="site-wrapper">
    <header>
      <div id="logo-container">
        <h1>Historical Figures</h1>
      </div>
      <input type="text">
    </header>
    <interactive-map></interactive-map>
    <figure-detail></figure-detail>
    <figures-list :historicalFigures="historicalFigures" ></figures-list>
    <footer></footer>
  </div>
</template>

<script>
import figuresList from './components/figuresList'
import figureDetail from './components/figureDetail'
import interactiveMap from './components/interactiveMap'
import FiguresService from './services/FiguresServices.js'

import { eventBus } from './main.js'

export default {
  name: 'app',
  data(){
  return {
    historicalFigures: [],
    figureDetail: null,
    favourites: []
    }
  },

  mounted(){

  },

  components: {
  'figures-list': figuresList,
  'figure-detail': figureDetail,
  'interactive-map': interactiveMap
  },
  methods: {
    fetchFigures(){
      FiguresService.getFigures()
      .then(historicalFigures)
    }
  
  }
}
</script>

<style lang="css" scoped>

</style>