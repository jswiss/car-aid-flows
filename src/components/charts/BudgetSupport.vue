<template>
  <div>
    <div id="container"></div>
    <div class="disclaimer">
      <p class="disclaimer-text">
        *Sous réserve de la décision du conseil d’administration du FMI prévu le 15/12
        <br>
        **L'appui budgétaire prévu pour 2017 n'a pas encore été versé car les conditions n'ont pas été remplies à temps
      </p>
    </div>
  </div>
</template>

<script>
  export default {
  	name: 'BudgetSupport',
  	data() {
  		return {
  			budgetSupport: this.$store.state.budgetSupport,
  		};
  	},
  	methods: {
  		loadChart() {
  			const chartData = anychart.data.set(this.budgetSupport);
  			// map the data
  			const seriesData_1 = chartData.mapAs({ x: [0], value: [1] });
  			const seriesData_2 = chartData.mapAs({ x: [0], value: [2] });

  			// create the chart
  			const chart = anychart.column();

  			// create the first series, set the data and name
  			const series1 = chart.column(seriesData_1);
  			series1.name('2016');
  			series1.fill('#45B9EA', 0.8);
  			series1.stroke(7, '#45B9EA');

  			// create the second series, set the data and name
  			const series2 = chart.column(seriesData_2);
  			series2.name('2017');
  			series2.fill('#00D1B2', 0.8);
  			series2.stroke(7, '#00D1B2');

  			// set the padding between columns
  			chart.barsPadding(-0.1);

  			// set the padding between column groups
  			chart.barGroupsPadding(2);

  			// set the chart title
  			chart.title('Appui budgétaire 2016 et 2017 (USD)');

  			// format the tooltip
  			chart.tooltip().format('{%SeriesName}: ${%Value}{groupsSeparator:\\,}');

  			// set the titles of the axes
  			const xAxis = chart.xAxis();
  			xAxis.title('Fonds');
  			const yAxis = chart.yAxis();
  			yAxis.title('USD');

  			const yLabels = chart.yAxis(0).labels();
  			yLabels.format('${%Value}{groupsSeparator:\\,}');

  			// set the container id
  			chart.container('container');

  			// initiate drawing the chart
  			chart.draw();
  		},
  	},
  	mounted() {
  		this.loadChart();
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

