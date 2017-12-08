<template>
  <div>
    <div id="container"></div>
    <div class="body">
      <p class="text">
        Les ressources considérées comme mobilisées correspondent au montant du portefeuille de projets (projets actifs, prêts et en attente de mise en vigueur, en préparation dont le financement est assuré) par rapport aux projections de besoins pour les trois premières années du RCPCA <sup>1</sup>. Tout en donnant des indications générales très utiles, cette méthode génère une série d’imprécisions<sup>2</sup> qu’il faut garder à l’esprit avant de tirer des conclusions trop définitives par rapport à l’affectation des montants par pilier et par secteurs.
      </p>
      <br>
      <p>
        Le taux de mobilisation des ressources par rapport aux projections des besoins du RCPCA, sur la période 2017-2019, est assez bon (tableau 6). Il se monte de manière globale à 105% ; 62% pour le pilier 1 ; 113% pour le pilier 2 ; et 124% pour le pilier 3. 
      </p>
      <br>
      <p>
        Indépendamment des questions de méthodes évoquées ci-dessus, qui font que le montant effectivement mobilisé dans des projets actifs ou en préparation reste sujet à caution, il est important de mentionner l’ordre de grandeur suivant : (i) les montants décaissés en 2017 se montent environ à 240 millions de $US (sur 9-11 mois environ), et (ii) les montants restant à dépenser pour fin 2017, 2018 et 2019 se montent à environ 1,430 milliard de dollars, soit six fois plus. Plus que de mobiliser davantage de ressources pour couvrir tous les besoins, le défi est donc bien avant tout d’arriver à décaisser ces montants rapidement dans le cadre de programmes et projets efficaces, qui adressent bien les priorités du RCPCA. 
      </p>
    </div>
    <br>
    <div class="disclaimer">
      <p class="disclaimer-text">
        <sup>1</sup>Il a été décidé de retenir la première phase du RCPCA (2017-2019), et pas les cinq ans du RCPCA, car une majorité de bailleurs avaient fait des annonces sur 3 ans, ou 4 ans au maximum, lors de la Conférence de Bruxelles.
        <br>
        <sup>2</sup>Ces imprécisions proviennent avant tout de la transmission partielle des données par certains partenaires. Certaines données manquantes empêchent de faire les calculs nécessaires. Il s’agit de :
        <br>
        <div class="indent disclaimer-text">
          <strong>(i)</strong>	Montant restant à décaisser non renseigné. Ceci pose un problème majeur pour les projets qui étaient déjà en cours avant 2017, puisqu’il est impossible de savoir quelle part restait effectivement à dépenser au début 2017. Le fait de comptabiliser l’intégralité du montant surestime donc le financement disponible. A titre d’hypothèse, il est cependant possible d’estimer que cette surestimation est compensée par les projets en développement non annoncés.
          <br>
          <strong>(ii)</strong>	Prévisions de décaissements non renseignées. Certains projets sont prévus pour une durée supérieure à trois ans. Les montants ne seront donc pas déboursés en intégralité sur la période 2017-2019. A nouveau, cela conduit à surestimer les montants disponibles pour 2017-2019. Ceci est particulièrement le cas pour les projets du pilier 3 qui ont généralement une durée de plusieurs années.
        </div>
      </p>
    </div>
  </div>
  
</template>

<script>
  export default {
  	name: 'NeedsCoverage',
  	data() {
  		return {
  			needsCoverage: this.$store.state.needsCoverage,
  		};
  	},
  	methods: {
  		loadChart() {
  			// set data
  			const chartData = anychart.data.set(this.needsCoverage);

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
  	height: 100%;
  	margin: 0;
  	padding: 0;
  }
  .indent {
  	padding-left: 2em;
  }
  .disclaimer-text {
  	margin-left: 10%;
  	font-style: italic;
  	font-size: 12px;
  	color: gray;
  }
</style>

