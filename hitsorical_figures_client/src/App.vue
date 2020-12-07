<template>
  <div id="site-wrapper">
    <header>
      <div id="logo-container">
        <h1>Historical Figures</h1>
        <!-- <figures-filter-search :historicalFigures="historicalFigures" /> -->
        <input type="text" v-model="searchTerm" placeholder="Search...">
      </div>
      <input type="text">
    </header>
    <interactive-map v-if="!figureDetail"></interactive-map>
    <figure-detail :figure="figureDetail" v-if="figureDetail"></figure-detail>
    <figures-list :historicalFigures="filteredFigures"></figures-list>
    <!-- <figures-list :historicalFigures="historicalFigures" ></figures-list> -->
    <footer></footer>
  </div>
</template>

<script>
import figuresList from './components/figuresList'
import figureDetail from './components/figureDetail'
import interactiveMap from './components/interactiveMap'
import FiguresService from './services/FiguresServices.js'
import figuresFilterSearch from './components/figuresFilterSearch'

import { eventBus } from './main.js'

export default {
  name: 'app',
  data(){
  return {
    historicalFigures: [],
    figureDetail: null,
    favourites: [],
    searchTerm: ""
    }
  },

  mounted(){
    this.fetchFigures(),

    eventBus.$on('show-figure', (figure) => this.figureDetail = figure)
    eventBus.$on('close-detail', () => this.figureDetail = null)
    eventBus.$on('figure-selected'), (figure) => {
      this.figure = figure
    }
  },

  computed:{
    filteredFigures(){
      return this.historicalFigures.filter((figure) => figure.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }
  },

  components: {
  'figures-list': figuresList,
  'figure-detail': figureDetail,
  'interactive-map': interactiveMap,
  'figures-filter-search': figuresFilterSearch
  },
  methods: {
    fetchFigures(){
      FiguresService.getFigures()
      .then(data => this.historicalFigures = data)
    }
  }
}
</script>

<style lang="css" scoped>

</style>