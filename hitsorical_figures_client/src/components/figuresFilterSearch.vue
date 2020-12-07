<template>
  <form v-on:submit.prevent>
      <input type="text" v-model="search" placeholder="search for historical figure..." v-on:keyup="searchForFigure">
  </form>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'figures-filter-search',
    data(){
        return {
            "search": "",
            "selectedFigure": {},
        }
    },
    props: [ "historicalFigures"],
    methods: {
        searchForFigure(){
    
            let foundFigure = this.historicalFigures.find((figure) =>{
                return figure.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1                
            })
            this.selectedFigure = foundFigure
            console.log()
            eventBus.$emit('show-figure', this.selectedFigure)
        },

        handleSelect(){
            console.log(this.selectedFigure)
            this.search =""
            eventBus.$emit('show-figure', this.selectedFigure)
        }
    }
}
</script>

<style>

</style>