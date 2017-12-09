<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script type="module">
	import carMap from '../../../node_modules/anychart/dist/geodata/countries/central_african_republic/central_african_republic.json';

	export default {
		name: 'ProjectMap',
		data() {
			return {
				mapData: [
					{ id: 'CF.BG', name: 'Bangui', value: 93 },
					{ id: 'CF.MP', name: "Ombella-M'Poko", value: 37 },
					{ id: 'CF.LB', name: 'Lobaye', value: 26 },
					{ id: 'CF.NM', name: 'Nana-Mambéré', value: 29 },
					{ id: 'CF.HS', name: 'Mambéré-Kadéï', value: 30 },
					{ id: 'CF.SE', name: 'Sangha-Mbaéré', value: 22 },
					{ id: 'CF.AC', name: 'Ouham', value: 33 },
					{ id: 'CF.OP', name: 'Ouham-Pendé', value: 29 },
					{ id: 'CF.UK', name: 'Ouaka', value: 35 },
					{ id: 'CF.KB', name: 'Nana-Grébizi', value: 26 },
					{ id: 'CF.BB', name: 'Bamingui-Bangoran', value: 34 },
					{ id: 'CF.VK', name: 'Vakaga', value: 29 },
					{ id: 'CF.HK', name: 'Haute-Kotto', value: 25 },
					{ id: 'CF.BK', name: 'Basse-Kotto', value: 20 },
					{ id: 'CF.MB', name: 'Mbomou', value: 22 },
					{ id: 'CF.HM', name: 'Haut-Mbomou', value: 18 },
					{ id: 'CF.KG', name: 'Kémo', value: 26 },
				],
			};
		},
		methods: {
			loadMap() {
				const map = anychart.choropleth();
				const dataSet = anychart.data.set(this.mapData);
				const series = map.choropleth(dataSet);
				// set geoIdField to 'id', this field contains in geo data meta properties
				series.geoIdField('id');

				// set tooltip
				series.tooltip().format(e => {
					return 'Projets: ' + e.getData('value');
				});

				// set title
				map.title('Nombre de projets par préfecture');

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



