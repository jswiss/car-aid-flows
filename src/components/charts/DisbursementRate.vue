<template>
  <div>
		<div class="columns is-mobile">
			<div class="column">
				<div id="container"></div>
				<div class="body">
					<p class="text">
						Le taux de décaissement a été calculé en divisant le total des décaissements pour 2017  par la valeur totale du portefeuille de projets actifs et clôturés (mais qui étaient encore actifs au début 2017 et ont décaissé pendant l’année). Avec 26% pour le pilier 1, 19% pour le pilier 2 et 7% pour le pilier 3, ces taux semblent bas (tableau 5), mais en l’absence d’une information sur la durée moyenne des projets , il est difficile de comparer ce taux de décaissement entre piliers. 
					</p>
				</div>
			</div>
		</div>
  </div>
</template>

<script type="text/javascript">
	export default {
		name: 'DisbursementRate',
		methods: {
			disbursementRate() {
				// set data

				const chartData = this.$store.state.disbursementRate;
				anychart.data.set(chartData);

				// set data series
				const seriesData_1 = chartData.mapAs({
					x: 0,
					value: 1,
				});
				const seriesData_2 = chartData.mapAs({
					x: 0,
					value: 2,
				});
				const seriesData_3 = chartData.mapAs({
					x: 0,
					value: 3,
				});

				// set chart type
				const chart = anychart.bar();

				// enable the percent stacking mode
				chart.yScale().stackMode('value');

				const series1 = chart.bar(seriesData_1);
				const series2 = chart.bar(seriesData_2);
				const series3 = chart.bar(seriesData_3);

				// configure tooltip
				chart.tooltip().format('${%Value}{groupsSeparator:\\,}');

				// configure y-axis label
				chart
					.yAxis()
					.labels()
					.format('{%Value}');

				// set chart title
				chart.title('Taux de décaissement par pilier');

				// set container id for the chart
				chart.container('container');
				// initiate chart drawing
				chart.draw();
			},
			mounted() {
				this.disbursementRate();
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

