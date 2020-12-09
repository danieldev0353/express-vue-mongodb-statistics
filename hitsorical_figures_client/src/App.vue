<template>
  <div id="site-wrapper">
    <header id="site-header">
      <div id="logo-container">
        <h1>Historical Figures</h1>
      </div>
      <input type="text" class="search-box" v-model="searchTerm" placeholder="Search...">
      <p>{{categories}}</p>
    </header>
    <interactive-map v-if="!figureDetail" :historicalFigures="filteredFigures"></interactive-map>
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


import { eventBus } from './main.js'

export default {
  name: 'app',
  data(){
  return {
    historicalFigures: [],
    figureDetail: null,
    categories: [],
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
  },

    figureCategories(){
      for (const figure in this.historicalFigures){
        if(!this.categories.includes(figure.category))
        this.categories.push(figure.category)
      }
      return this.categories
    }
 },
  components: {
  'figures-list': figuresList,
  'figure-detail': figureDetail,
  'interactive-map': interactiveMap
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
@font-face {
  font-family: "Reith";
  src: local("Reith"),
   url(./fonts/BBCReithSans_Rg.ttf) format("truetype");
}
@font-face {
  font-family: "ReithBold";
  src: local("Reith"),
   url(./fonts/BBCReithSans_Bd.ttf) format("truetype");
}

body {
  margin: 0px;
  font-family: "Reith"
}

#site-header {
  display: flex;
  flex-direction: row;
  background: rgb(229,100,15);
  background: linear-gradient(172deg, rgba(229,100,15,1) 28%, rgba(242,178,7,1) 78%, rgba(255,222,0,1) 100%);
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

h1{
  font-family: ReithBold;
  color: white;
}

</style>