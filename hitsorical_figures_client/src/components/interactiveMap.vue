<template>
    <div id="map-container">
        <div id="map-wrap" style="height: 100%">
            <l-map :zoom=2 :center="[40, 10]">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <l-marker v-for="figure in historicalFigures" :key="figure._id" :lat-lng="[figure.markerLat, figure.markerLng]">
                    <l-icon></l-icon>
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
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';

export default {
    name: "interactive-map",
    props: ["historicalFigures"],
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon
    }

}
</script>

<style scoped>
#map-container {
    height: 500px;
    margin: 10px 5%;
}
</style>