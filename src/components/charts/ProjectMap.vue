<template>
  <div>
    <div id="container"></div>
    </div>
  </div>
</template>

<script type="module">
	import carMap from '../../../node_modules/anychart/dist/geodata/countries/central_african_republic/central_african_republic.json';

	export default {
		name: 'ProjectMap',
		data() {
			return {
				mapData: this.$store.getters.getMap,
			};
		},
		methods: {
			loadMap() {
				const map = anychart.choropleth();
				const dataSet = anychart.data.set(this.mapData);
				const series = map.choropleth(dataSet);
				// set geoIdField to 'id', this field contains in geo data meta properties
				series.geoIdField('id');

				// set map color settings
				series.colorScale(
					anychart.scales.ordinalColor([
						{ less: 20, color: '#536da4' },
						{ from: 20, to: 25, color: '#3a5897' },
						{ from: 26, to: 30, color: '#22438a' },
						{ from: 31, to: 35, color: '#0a2f7e' },
						{ from: 36, to: 40, color: '#082564' },
						{ greater: 40, color: '#061c4b' },
					])
				);
				series.hovered().fill('#addd8e');
				// set geo data, you can find this map in our geo maps collection
				// https://www.anychart.com/download/cdn/
				map.geoData(carMap);
				//set map container id (div)
				map.container('container');
				//initiate map drawing
				map.draw();
			},
		},
		mounted() {
			this.loadMap();
		},
	};
</script>

<style scoped>
	html,
	body,
	#container {
		width: 100%;
		height: 500px;
		margin: 0;
		padding: 0;
	}
</style>



