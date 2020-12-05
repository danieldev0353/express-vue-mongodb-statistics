<template>
    <div>
      <figure-detail v-for="(figure, index) in historicalFigures"  :key="index" :figure="figure"/>
    </div>
</template>

<script>
import figureDetail from './figureDetail'

export default {
    name: "figure-list",
    props: ["historicalFigures"],
    components: {
        'figure-detail' : figureDetail
    }
}
</script>

<style lang="css" scoped>

</style>