<!-- PillarsComponents2017 -->
<template lang="html">
  <div>
    <div class="columns is-mobile">
      <div class="column" id="container"></div>
			<a id="back" @click="backButton" :class="{display: isDisplay}" class="button is-pulled-right">Retour aux piliers</a>
    </div>
  </div>
</template>

<script type="text/javascript">
	export default {
		name: 'PillarsComponents2017',
		data() {
			return {
				isDisplay: true,
			};
		},
		methods: {
			backButton() {
				this.isDisplay = !this.isDisplay;
				chart.getSeries(0).data(this.$store.state.pillarComponentChart);
			},
			pillarComponent2017() {
				const vm = this;
				const chart = anychart.column(this.$store.state.pillarComponentChart);
				// chart.animate(true);
				chart.title('Décaissements par piliers et composantes en 2017 ');
				chart.tooltip().format('${%Value}{groupsSeparator:\\,}');
				// tune interactivity selection mode
				chart.interactivity().selectionMode('none');

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
						vm.backButton();
					} else {
						// otherwise assign this series the initial
						// dataset and return to the initial state
						chart.getSeries(0).data(this.$store.state.pillarComponentChart);
						vm.backButton();
					}
				});

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
				// chart.xAxis().title('Nombre de projets');
				chart.yAxis().title('FCFA');

				// set container id for the chart
				chart.container('container');

				// initiate chart drawing
				chart.draw();
			},
		},
		mounted() {
			this.pillarComponent2017();
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
		background: #7bc0f7;
		border: 1px solid #64b5f6;
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


