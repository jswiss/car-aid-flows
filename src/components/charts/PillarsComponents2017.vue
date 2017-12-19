<!-- PillarsComponents2017 -->
<template lang="html">
  <div>
    <div class="columns is-mobile">
			<div class="column">
				<div class="column" id="container"></div>
				<div class="body">
          <br>
          <br>
					<p class="text">
						Les décaissements sur l’année 2017  se montent de manière globale à plus de 138 milliards de FCFA, ou plus de 240 millions de $US (tableau 2). 33,475 milliards de FFCA (58,218 millions $US), ou 24% du total ont été décaissés sur le pilier 1 ; 86,808 milliards de FCFA (150,970 millions $US), ou 63% du total ont été décaissés sur le pilier 2 (dont plus de 63 milliards de FCFA, ou plus de 107 millions de $US sont forme d’appui budgétaire – voir section ci-dessous – ce qui représente 45% des décaissements totaux de l’aide extérieure) ; et 17,815 milliards de FFCA (30,983 millions $US), ou 13% du total ont été décaissés sur le pilier 3. 
						<br>
						<br>
						Sur les 340 projets identifiés, 24 étaient en préparation ou prêt et en attente de mise en vigueur (et n’ont donc pas pu décaisser). Sur les 316 projets restants, 133 seulement ont décaissé en 2017 (dont 62 sur 123 pour le pilier 1 ; 47 sur 147 pour le pilier 2 ; et 24 sur 46 pour le pilier 3). A noter cependant que les informations de décaissement n’ont pas été transmises par certains bailleurs.
 
					</p>
				</div>
			</div>
			<!-- <a id="back" ref="backButton"  class="button is-pulled-right">Retour aux piliers</a> -->
    </div>
  </div>
</template>

<script type="text/javascript">
	export default {
		name: 'PillarsComponents2017',
		data() {
			return {
				isDisplay: true,
				chartData: this.$store.state.pillarComponentChart,
			};
		},
		methods: {
			backButton(chart) {
				this.isDisplay = !this.isDisplay;
				chart.getSeries(0).data(this.chartData);
			},
			pillarComponent2017() {
				const data = this.$store.state.pillarComponentChart;
				const chart = anychart.column();
				const series = chart.column(data);

				// configure visual settings
				series.fill('#4B9537', 0.8);
				series.stroke('#4B9537', 0.8);

				// enable labels for a series
				series.labels(true);
				series.selected().labels(true);

				// enable labels for a series
				series.labels().format('${%Value}{groupsSeparator:\\,}');
				series
					.selected()
					.labels()
					.format('');

				// background border color
				series
					.labels()
					.background()
					.stroke('#000000');
				series
					.selected()
					.labels()
					.background()
					.stroke('#000000');

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
					} else {
						// otherwise assign this series the initial
						// dataset and return to the initial state
						chart.getSeries(0).data(data);
					}
				});

				chart
					.xAxis()
					.labels()
					.rotation(-40);

				// set scale minimum
				chart.yScale().minimum(0);

				// set yAxis labels formatter
				chart
					.yAxis()
					.labels()
					.format('${%Value}{groupsSeparator:\\,}');

				// tooltips position and interactivity settings
				chart.tooltip().positionMode('point');
				chart.interactivity().hoverMode('by-x');

				// axes titles
				// chart.xAxis().title('Nombre de projets');
				chart.yAxis().title('FCFA');

				// set container id for the chart
				chart.container('container').draw();
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


