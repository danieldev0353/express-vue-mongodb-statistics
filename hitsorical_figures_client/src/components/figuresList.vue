<template>
    <div id="list-wrapper">
        <header>
            <h2>Explore...</h2>
            <div id="sort-options">

            </div>
        </header>
        <div id="figure-grid">
            <figure-thumbnail class="thumbnail" v-for="(figure, index) in historicalFigures" :key="index" :figure="figure"/>
        </div>
    </div>
</template>

<script>
import figureDetail from './figureDetail'
import figureThumbnail from './figureThumbnail'

export default {
    name: "figure-list",
    props: ["historicalFigures"],
    components: {
        'figure-detail' : figureDetail,
        'figure-thumbnail' : figureThumbnail
    }
}
</script>

<style lang="css" scoped>
  #list-wrapper {
    margin: 0px 8%;
  }
  #figure-grid {
      display: flex;
      flex-flow: row wrap;
      justify-content: left;
    }

  .thumbnail {
    width: 250px;
    margin: 0 auto 30px auto;
  }
</style>