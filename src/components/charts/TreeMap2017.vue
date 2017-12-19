<!--tree2017 component-->
<template v-cloak>
  <div id="treemap-content" class="columns is-mobile">
    <div class="column">
			<div class="has-text-right">
				<p class="text">Faire glisser le curseur pour faire apparaître les montants</p>
			</div>
      <div id="container" style="width: 100%; height: 500px;"></div>
    </div>
  </div>
</template>

<script type='module'>
	export default {
		name: 'TreeMap2017',
		data() {
			return {
				treemap: this.$store.getters.tree2017,
			};
		},
		methods: {
			drawTreeMap2017() {
				const colorShades = this.$store.state.colorShades2017;
				const colorRange = this.$store.state.colorRange2017;
				const treeMapChart = anychart.data.tree(
					this.treemap
					// anychart.enums.TreeFillingMethod.AS_TREE
				);
				const chart = anychart.treeMap(treeMapChart);
				chart
					.headers()
					.format(
						'{%name} :: Décaissements effectifs: ${%value}{groupsSeparator:\\,}'
					);
				chart.headers().fontSize(15);
				chart.headers().fontWeight('bold');
				chart.labels().format('{%name}');
				// chart.labels().textWrap('byWord');
				chart.labels().fontSize(11);
				chart.labels().fontWeight(900);
				chart.labels().fontColor('White');
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
			this.drawTreeMap2017();
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
	.text {
		color: #6a6d68;
		font-style: italic;
	}
</style>