<template>
    <div id="list-wrapper">
        <header>
            <h2>Explore...</h2>
            <div id="sort-options">

            </div>
        </header>
        <figure-thumbnail v-for="(figure, index) in historicalFigures" :key="index" :figure="figure"/>
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

</style>