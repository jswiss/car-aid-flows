<template>
	<div id="treemap-content" class="columns is-mobile">
    <div class="column">
      <div id="container" style="width: 100%; height: 500px;"></div>
    </div>
  </div>
</template>

<script>
	// import '../../../node_modules/anychart/dist/js/anychart-base.min.js';
	// import '../../../node_modules/anychart/dist/js/anychart-treemap.min.js';

	// anychart.licenseKey('80outrage-432962df-89451e8b');

	export default {
		name: 'TreeMap2018',
		data() {
			return {
				treemap: this.$store.getters.tree2018,
			};
		},
		methods: {
			drawTreeMap2018() {
				const colorShades = this.$store.state.colorShades2018;
				const colorRange = this.$store.state.colorRange2018;
				const treeMapChart = anychart.data.tree(
					this.treemap
					// anychart.enums.TreeFillingMethod.AS_TREE
				);
				const chart = anychart.treeMap(treeMapChart);
				chart
					.headers()
					.format(
						'{%name} :: Décaissements planifiés par projet: ${%value}{groupsSeparator:\\,}'
					);

				chart.headers().fontSize(15);
				chart.headers().fontWeight('bold');
				chart.labels().format('{%name}');
				chart.labels().fontSize(11);
				chart.labels().fontWeight(900);
				chart.labels().fontColor('White');
				// chart.labels().textWrap('byWord');
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
		mounted() {
			this.drawTreeMap2018();
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