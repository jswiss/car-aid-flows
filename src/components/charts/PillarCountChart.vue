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
		data() {
			return {
				isDisplay: true,
			};
		},
		mounted() {
			this.pillarChart();
		},
		methods: {
			pillarChart() {
				// const vm = this;
				const data = this.$store.state.pillarCountChart;
				const chart = anychart.column();
				const series = chart.column(data);

				// configure visual settings
				series.fill('#0A2F7E', 0.8);
				series.stroke('#0A2F7E', 0.8);

				// enable labels for a series
				series.labels(true);
				series.selected().labels(true);

				// enable labels for a series
				series.labels().format('{%Value} projets');
				series
					.selected()
					.labels()
					.format('{%x}');

				// background border color
				series
					.labels()
					.background()
					.stroke('#663399');
				series
					.selected()
					.labels()
					.background()
					.stroke('Green');

				// font color
				series.labels().fontColor('#000000');
				series
					.selected()
					.labels()
					.fontColor('Green');

				// chart.animate(true);
				chart.title('Nombre de projets par piliers et composantes');
				chart.tooltip().format('{%value} projets');
				// tune interactivity selection mode
				chart.interactivity().selectionMode('none');

				// add chart label, set placement, color and text
				chart.label(0, {
					enabled: false,
					position: 'rightTop',
					anchor: 'rightTop',
					padding: 5,
					offsetX: 5,
					offsetY: 5,
					text: 'Back',
					background: { stroke: '1 black', enabled: true },
				});

				// load initial data on label click
				chart.label(0).listen('click', function() {
					chart.getSeries(0).data(data);
					chart.label(0).enabled(false);
				});

				chart.listen('pointClick', function(e) {
					// check if there is drillDown data available
					if (e.point.get('drillDown')) {
						// if so, assign to the only data series we have
						chart.getSeries(0).data(e.point.get('drillDown'));
					} else {
						// otherwise assign this series the initial
						// dataset and return to the initial state
						chart.getSeries(0).data(data);
					}
				});

				// set scale minimum
				chart.yScale().minimum(0);

				// set yAxis labels formatter
				chart
					.yAxis()
					.labels()
					.format('{%Value}{groupsSeparator: }');

				chart
					.xAxis()
					.labels()
					.rotation(-15);

				// tooltips position and interactivity settings
				chart.tooltip().positionMode('point');
				chart.interactivity().hoverMode('by-x');

				// axes titles
				// chart.xAxis().title('Nombre de projets');
				chart.yAxis().title('Nombre de projets');

				// set container id for the chart
				chart.container('container').draw();
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
	#back {
		cursor: pointer;
		background: #4b9537;
		border: 1px solid #4b9537;
		color: #fff;
		padding: 10px;
		position: absolute;
		top: 15px;
		right: 20px;
		z-index: 100;
	}
	.display {
		display: none;
	}
</style>