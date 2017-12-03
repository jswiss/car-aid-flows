 <!--tree2017 component-->
<template v-cloak>
  <div id="treemap-=content" class="columns is-mobile">
    <div class="column">
      <div id="container" style="width: 100%; height: 500px;"></div>
    </div>
  </div>
</template>

<script type='module'>
	import '../../../node_modules/anychart/dist/js/anychart-base.min.js';
	import '../../../node_modules/anychart/dist/js/anychart-treemap.min.js';

	anychart.licenseKey('80outrage-432962df-89451e8b');

	export default {
		name: 'TreeMap',
		data() {
			return {
				tree2017: '',
				cleaned: '',
			};
		},

		methods: {
			treeMap() {
				const colorScheme = [
					'#45B9EA',
					'#262261',
					'#716558',
					'#594A41',
					'#594A41',
				];
				const colorShades = [
					'#45B9EA',
					'#6ac7ee',
					'#8fd5f2',
					'#b4e3f6',
					'#d9f1fa',
					'#ecf8fc',
				];
				const colorRange = ['#262261', '#45B9EA'];
				// const year2017 = anychart.data.tree(tree2017, anychart.enums.TreeFillingMethod.AS_TREE);

				// const chart = anychart.treeMap(year2017);
				chart
					.headers()
					.format(
						'{%name} :: Project disbursements: ${%value}{groupsSeparator:\\,}'
					);
				chart.headers().fontSize(15);
				chart.headers().fontWeight('bold');
				chart.labels().format('{%name}');
				chart.labels().textWrap('byWord');
				chart.labels().fontSize(10.5);
				chart.labels().fontWeight(900);
				chart.tooltip().titleFormat('{%name}');
				chart.tooltip().format('${%Value}{groupsSeparator:\\,}');
				chart.hintOpacity(0.7);

				chart.listen('pointClick', e => {
					// eslint-disable-next-line
					console.log(e.point.get('name'));
					const new_value = e.point.get('url');
					if (new_value) {
						window.open(new_value, '_blank');
					}
				});

				chart.maxDepth(1);
				chart.colorRange(true);
				chart.colorScale(
					anychart.scales.ordinalColor([
						{ less: 500000, color: colorShades[5] },
						{ from: 500000, to: 1000000, color: colorShades[4] },
						{ from: 1000000, to: 5000000, color: colorShades[3] },
						{ from: 5000000, to: 10000000, color: colorShades[2] },
						{ from: 10000000, to: 20000000, color: colorShades[1] },
						{ greater: 20000000, color: colorShades[0] },
					])
				);
				chart.container('container');
				chart.draw();
			},
		},

		computed: {
			filtered() {
				return this.raw.map(k => {
					return {
						name: k['Nom du projet'],
						pillar: k['Pilier'],
						component: k['Composante'],
						primarySector: k['Secteur principal'],
						totalUSD: k['Montant du projet USD'],
						usd2017: k['Décaissements 2017 USD'],
						projectedUSD2017: k['Prévision de décaissements 2017 USD'],
						projectedUSD2018: k['Prévision de décaissements 2018 USD'],
						projectedUSD2019: k['Prévision de décaissements 2019 USD'],
					};
				});
			},
		},
	};
</script>

<style scoped>
	[v-cloak] > * {
		display: none;
	}
	[v-cloak]::before {
		content: 'loading…';
	}
	.buttons {
		float: left;
		margin-top: 8px;
		margin-bottom: 4px;
		color: #6a6d68;
		font-family: 'BentonSans';
		font-size: 14px;
		line-height: 21px;
	}
	.columns {
		margin-bottom: 0px;
		padding-left: 10px;
	}
	label {
		font-size: 18px;
	}
</style>
