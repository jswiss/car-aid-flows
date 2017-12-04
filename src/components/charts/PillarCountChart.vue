<!-- PillarCountChart -->
<template lang="html">
  <div>
    <div class="columns is-mobile">
      <div class="column" id="container"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
	export default {
		name: 'pillarCountChart',
		mounted() {
			this.pillarChart();
		},
		methods: {
			pillarChart() {
				const chart = anychart.column();
				// chart.animate(true);
				chart.title('Nombre de projets par piliers et composantes');
				const series = chart.column(this.$store.state.pillarCountChart);
				// set series tooltip settings
				series.tooltip().titleFormat('{%X}');

				series
					.tooltip()
					.position('center-top')
					.anchor('center-bottom')
					.offsetX(0)
					.offsetY(5)
					.format('${%Value}{groupsSeparator: }');

				// set scale minimum
				chart.yScale().minimum(0);

				// set yAxis labels formatter
				chart
					.yAxis()
					.labels()
					.format('${%Value}{groupsSeparator: }');

				// tooltips position and interactivity settings
				chart.tooltip().positionMode('point');
				chart.interactivity().hoverMode('by-x');

				// axes titles
				chart.xAxis().title('Product');
				chart.yAxis().title('Revenue');

				// set container id for the chart
				chart.container('container');

				// initiate chart drawing
				chart.draw();
			},
		},
	};
</script> 

<style scoped>
	html,
	body,
	#container {
		width: 100%;
		height: 600px;
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