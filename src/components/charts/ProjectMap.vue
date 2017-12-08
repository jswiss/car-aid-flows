<template>
  <div>
    <div id="container"></div>
    </div>
  </div>
</template>

<script>
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

  			const dataSet = anychart.data.set([this.mapData]);

  			const series = map.choropleth(dataSet);

  			// set geoIdField to 'id', this field contains in geo data meta properties
  			series.geoIdField('id');

  			// set map color settings
  			series.colorScale(anychart.scales.linearColor('#deebf7', '#3182bd'));
  			series.hovered().fill('#addd8e');

  			// set geo data, you can find this map in our geo maps collection
  			// https://www.anychart.com/download/cdn/
  			map.geoData(anychart.maps['central_african_republic']);

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



