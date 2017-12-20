<template>
  <div>
		<div class="columns is-mobile">
			<div class="column">
				<div id="container"></div>
				<div class="body">
          <br>
          <br>

					<p class="text">
						Le taux de décaissement a été calculé en divisant le total des décaissements pour 2017  par la valeur totale du portefeuille de projets actifs et clôturés (mais qui étaient encore actifs au début 2017 et ont décaissé pendant l’année). Avec 26% pour le pilier 1, 19% pour le pilier 2 et 7% pour le pilier 3, ces taux semblent bas (tableau 5), mais en l’absence d’une information sur la durée moyenne des projets , il est difficile de comparer ce taux de décaissement entre piliers. 
					</p>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	export default {
		name: 'DisbursementRate',
		methods: {
			disbursementRate() {
				// create data set on our data
				const dataSet = anychart.data.set(this.$store.state.disbursementRate);
				// map data for the first series, take x from the zero column and value from the first column of data set
				const seriesData_1 = dataSet.mapAs({
					x: 0,
					value: 1,
				});
				// map data for the second series, take x from the zero column and value from the second column of data set
				const seriesData_2 = dataSet.mapAs({
					x: 0,
					value: 2,
				});

				const chart = anychart.bar();

				// create bar chart
				// turn on chart animation
				// chart.animation(true);
				chart.padding([10, 40, 5, 20]);
				// set chart title text settings
				chart.title('Taux de décaissement par pilier');
				// set scale minimum
				chart.yScale().minimum(0);
				// force chart to stack values by Y scale.
				chart.yScale().stackMode('value');
				chart
					.yAxis()
					.labels()
					.format('$ {%Value}{groupsSeparator:\\,}')
					.rotation(-35);
				// set titles for axises
				chart.xAxis().title('Piliers');
				// chart.yAxis().title('Revenue in Dollars');
				// helper function to setup label settings for all series
				const setupSeries = function(series, name) {
					series.name(name);
					series.stroke('3 #fff 1');
					series.hovered().stroke('3 #fff 1');
				};

				// create first series with mapped data
				const series1 = chart.bar(seriesData_1);
				setupSeries(series1, 'Portefeuille projets actifs et clôturés ');
				series1.fill('#dc3f22', 0.8);
				// create second series with mapped data
				const series2 = chart.bar(seriesData_2);
				setupSeries(series2, 'Décaissements en $US');
				// configure visual settings
				series2.fill('#F8CF47');
				// turn on legend
				chart
					.legend()
					.enabled(true)
					.fontSize(13)
					.padding([0, 0, 20, 0]);
				// chart.interactivity().hoverMode('by-x');
				// chart
				// 	.tooltip()
				// 	.valuePrefix('$')
				//   .displayMode('union');
				chart
					.tooltip()
					.format(
						'${%value}{groupsSeparator:\\,} \n Taux de décaissement {%yPercentOfCategory}{decimalsCount:2}%'
					);
				// .displayMode('separated');
				// set container id for the chart
				chart.container('container');

				// add summed labels
				series1.labels().enabled(true);
				series1.labels().format('TOTAL: ${%CategoryYSum}{groupsSeparator:\\,}');

				// initiate chart drawing
				chart.draw();
			},
		},
		mounted() {
			this.disbursementRate();
		},
	};
</script>

<style scoped>
	html,
	body,
	#container {
		width: 95%;
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