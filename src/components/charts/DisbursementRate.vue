<template>
  <div>
    <div id="container"></div>
    <div class="body">
      <p class="text">
        Le taux de décaissement a été calculé en divisant le total des décaissements pour 2017  par la valeur totale du portefeuille de projets actifs et clôturés (mais qui étaient encore actifs au début 2017 et ont décaissé pendant l’année). Avec 26% pour le pilier 1, 19% pour le pilier 2 et 7% pour le pilier 3, ces taux semblent bas (tableau 5), mais en l’absence d’une information sur la durée moyenne des projets , il est difficile de comparer ce taux de décaissement entre piliers. 
      </p>
    </div>
  </div>
</template>

<script>
  export default {
  	name: 'DisbursementRate',
  	data() {
  		return {
  			disbursement: this.$store.getters.disbursementRate,
  		};
  	},
  	methods: {
  		loadChart() {
  			chart = anychart.bar();

  			chart.animation(true);

  			chart.padding([10, 40, 5, 20]);

  			chart.title('Top 10 Cosmetic Products by Revenue');

  			// create area series with passed data
  			var series = chart.bar([
  				['Eyeshadows', '249980'],
  				['Eyeliner', '213210'],
  				['Eyebrow pencil', '170670'],
  				['Nail polish', '143760'],
  				['Lipstick', '128000'],
  				['Lip gloss', '110430'],
  				['Mascara', '102610'],
  				['Foundation', '94190'],
  				['Rouge', '80540'],
  				['Powder', '53540'],
  			]);

  			// set tooltip settings
  			series
  				.tooltip()
  				.position('right')
  				.anchor('left-center')
  				.offsetX(5)
  				.offsetY(0)
  				.titleFormat('{%X}')
  				.format('${%Value}');

  			// set yAxis labels formatter
  			chart
  				.yAxis()
  				.labels()
  				.format('{%Value}{groupsSeparator: }');

  			// set titles for axises
  			chart.xAxis().title('Products by Revenue');
  			chart.yAxis().title('Revenue in Dollars');
  			chart.interactivity().hoverMode('by-x');
  			chart.tooltip().positionMode('point');
  			// set scale minimum
  			chart.yScale().minimum(0);

  			// set container id for the chart
  			chart.container('container');
  			// initiate chart drawing
  			chart.draw();

  			// set data
  			// const chartData = anychart.data.set(this.disbursement);

  			// // set data series
  			// const seriesData_1 = chartData.mapAs({
  			// 	x: 0,
  			// 	value: 1,
  			// });
  			// const seriesData_2 = chartData.mapAs({
  			// 	x: 0,
  			// 	value: 2,
  			// });
  			// const seriesData_3 = chartData.mapAs({
  			// 	x: 0,
  			// 	value: 3,
  			// });

  			// // set chart type
  			// const chart = anychart.bar();

  			// // enable the percent stacking mode
  			// chart.yScale().stackMode('value');

  			// const series1 = chart.bar(seriesData_1);
  			// const series2 = chart.bar(seriesData_2);
  			// const series3 = chart.bar(seriesData_3);

  			// // configure tooltip
  			// chart.tooltip().format('${%Value}{groupsSeparator:\\,}');

  			// // configure y-axis label
  			// chart
  			// 	.yAxis()
  			// 	.labels()
  			// 	.format('{%Value}');

  			// // set chart title
  			// chart.title('Taux de décaissement par pilier');

  			// // set container id for the chart
  			// chart.container('container');
  			// // initiate chart drawing
  			// chart.draw();
  		},
  		mounted() {
  			this.loadChart();
  		},
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
  .disclaimer-text {
  	margin-left: 10%;
  	font-style: italic;
  	font-size: 12px;
  	color: gray;
  }
</style>

