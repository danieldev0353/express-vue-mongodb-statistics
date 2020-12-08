<template>
  <div id="site-wrapper">
    <header id="site-header">
      <div id="logo-container">
        <h1>Historical Figures</h1>
        <!-- <figures-filter-search :historicalFigures="historicalFigures" /> -->
        <input type="text" v-model="searchTerm" placeholder="Search...">
      </div>
      <input type="text" class="search-box" placeholder="Search...">
    </header>
    <interactive-map v-if="!figureDetail"></interactive-map>
    <figure-detail :figure="figureDetail" v-if="figureDetail"></figure-detail>

    <figures-list :historicalFigures="filteredFigures"></figures-list>

    <footer id="site-footer">
    </footer>

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
      return this.historicalFigures.filter(figure =>this.figuresFilter(figure))
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
    },

    figuresFilter(figure){
      if ( figure.name.toLowerCase().includes( this.searchTerm.toLowerCase()) ) return true 
      if ( figure.category.toLowerCase().includes( this.searchTerm.toLowerCase() ) ) return true 
      if ( figure.bestKnownFor.toLowerCase().includes( this.searchTerm.toLowerCase() ) ) return true 
      if ( figure.biography.toLowerCase().includes( this.searchTerm.toLowerCase() ) ) return true 
      if ( figure.born.date.toLowerCase().includes( this.searchTerm.toLowerCase() ) ) return true
      if ( figure.died.date.toLowerCase().includes( this.searchTerm.toLowerCase() ) ) return true
      if ( figure.born.place.toLowerCase().includes( this.searchTerm.toLowerCase() ) ) return true
      if ( figure.died.place.toLowerCase().includes( this.searchTerm.toLowerCase() ) ) return true
      if ( figure.occupation.toLowerCase().includes( this.searchTerm.toLowerCase() ) ) return true
    
      return false
    }
  }
}
</script>

<style lang="css">
body {
  margin: 0px;
  font-family: 'Noto Sans KR', sans-serif;
}

#site-header {
  display: flex;
  flex-direction: row;
  background-color: rgb(237, 127, 187);
  justify-content: space-between;
  align-content: center;
  padding: 0px 5%;
}

.search-box {
  height: 20px;
  margin: auto 0px;
}

#site-footer {
  padding: 5%;
  background-color: rgb(58, 56, 57);
}

</style>