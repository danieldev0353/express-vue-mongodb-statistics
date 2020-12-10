<template>
  <div id="site-wrapper">
    <div id="bbc-banner">
      <img src="@/assets/BBC_logo.png" alt="" id="bbc-logo">
    </div>
    <div id="background"></div>
    <header id="site-header">
      <div id="logo-container">
        <img src="@/assets/BBC_logo_white.png" alt="">
        <h1>Historical Figures</h1>
      </div>
      <div class="search-container">
        <input type="text" class="search-box" v-model="searchTerm" placeholder="Search...">
        <i class="material-icons mdc-button__icon">search</i>
      </div>
    </header>
    <interactive-map v-if="!figureDetail" :historicalFigures="filteredFigures"></interactive-map>
    <figure-detail :figure="figureDetail" v-if="figureDetail"></figure-detail>
    <figures-list :historicalFigures="filteredFigures"></figures-list>
    <footer id="site-footer">
      <div class="footer-logo-container">
        <img src="@/assets/BBC_logo_white.png" alt="">
      </div>
      <div id="footer-content">
        <hr>
        <p>INV3 - Callum Asplen, Lucinda Davies, Kirsty Gordon, and Dana Varahi</p>
      </div>
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
    categories: [],
    searchTerm: ""
    }
  },

  mounted(){
    this.fetchFigures(),

    eventBus.$on('show-figure', (figure) => {
      window.scrollTo(0,0)
      return this.figureDetail = figure
      })
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
  'interactive-map': interactiveMap,
  'figures-filter-search': figuresFilterSearch,

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

#bbc-banner {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(196, 196, 196, 0.851);
}

#bbc-logo {
  position: relative;
  height: 60%;
  margin-left: 8%;
}

#site-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-bottom: -0.8%;
  padding: 0px 8%;
}

#background {
  position: absolute;
  background: rgb(229,100,15);
  background: linear-gradient(172deg, rgba(229,100,15,1) 28%, rgba(242,178,7,1) 78%, rgba(255,222,0,1) 100%);
  padding: 10px;
  width: 100%;
  height: 400px;
  z-index: -1;
}

#logo-container {
  display: flex;
  align-items: center;
  height: 100px;
}

#logo-container > img {
  height: 40%;
  margin-right: 20px;
}

.search-container {
  background-color: white;
  margin: auto 0px;
  height: 40px;
  width: 30%;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  align-items: center;
}

.search-box {
  font-family: "ReithBold";
  font-size: 1.1em;
  border: none;
  display: inline-flex;
  height: 100%;
  background-color: transparent;
  width: 100%
}

#site-footer {
  padding: 3% 5%;
  background-color: rgb(58, 56, 57);
  display: flex;
  color: white;
}

.footer-logo-container {
  width: 200px;
  margin-right: 4%;
}

.footer-logo-container > img {
  width: 100%;
}

#footer-content {
  width: 100%;
}

h1{
  font-family: "ReithBold";
  color: white;
}


</style>