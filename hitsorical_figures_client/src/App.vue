<template>
  <div id="site-wrapper">
    <header id="site-header">
      <div id="logo-container">
        <h1>Historical Figures</h1>
      </div>
      <input type="text" class="search-box" placeholder="Search...">
    </header>
    <interactive-map v-if="!figureDetail"></interactive-map>
    <figure-detail :figure="figureDetail" v-if="figureDetail"></figure-detail>
    <figures-list :historicalFigures="historicalFigures" ></figures-list>
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
    favourites: []
    }
  },

  mounted(){
    this.fetchFigures(),

    eventBus.$on('show-figure', (figure) => this.figureDetail = figure)
    eventBus.$on('close-detail', () => this.figureDetail = null)
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