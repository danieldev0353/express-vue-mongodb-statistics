<template>
    <div id="map-container">
        <div id="map-wrap" style="height: 100%">
            <l-map :zoom=2 :center="[25, 25]">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <l-marker v-for="figure in historicalFigures" :key="figure._id" :lat-lng="[figure.markerLat, figure.markerLng]" v-on:click=handleClick(figure)>
                    <l-icon class="map-icon"
                            :icon-size= "[55, 60]"
                            :icon-url="require(`@/assets/${figure.avatarPath}`)"></l-icon>
                    <l-tooltip class="tooltip">{{figure.name}}</l-tooltip>
                </l-marker>
                <!-- Thomas Edison
                <l-marker :lat-lng="[40.3, -74.2]"/>
                Cleopatra
                <l-marker :lat-lng="[31, 29]"/>
                Winston Churchill
                <l-marker :lat-lng="[52, -1]"/>
                Frida Kahlo
                <l-marker :lat-lng="[19.2, -99.8]"/>
                Henry Ford
                <l-marker :lat-lng="[42, -83]"/>
                Henry VIII
                <l-marker :lat-lng="[51, 0.8]"/>
                Anne Frank
                <l-marker :lat-lng="[50, 8.4]"/>
                James Cook
                <l-marker :lat-lng="[-30, 190]"/>
                Rosa Parks
                <l-marker :lat-lng="[32, -86]"/>
                Joan of Arc
                <l-marker :lat-lng="[45, 1]"/>
                Mohandas Gandhi
                <l-marker :lat-lng="[28.65, 77.2]"/> -->
            </l-map>
        </div>
    </div>
</template>

<script>
import { L, icon} from 'leaflet';
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from 'vue2-leaflet';

import { eventBus } from '../main.js'

export default {
    name: "interactive-map",
    props: ["historicalFigures"],
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
        LTooltip
    },
    methods: {
        handleClick(figure){
            eventBus.$emit('show-figure', figure)

        }
    }

}
</script>

<style scoped>
#map-container {
    height: 500px;
    margin: 10px 5%;
    padding: 1% 1% 0px 1%;
    background-color: white;
}

.map-icon {
    width: 80px;
}

.tooltip {
    font-family: "ReithBold";
    font-size: 1.6em;
    color: rgb(229,100,15);
    margin: 0px 10px;
}
</style>