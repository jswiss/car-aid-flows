 <!--tree2018 component-->
<template>
  <div id="treemap-=content" class="columns is-mobile">

    <pre>{{ tree2018 }}</pre>
    <div class="column">
      <div id="container" style="width: 100%; height: 500px;"></div>
    </div>
  </div>
</template>

<script type='text/javascript'>
  import '../../../node_modules/anychart/dist/js/anychart-base.min.js';
  import '../../../node_modules/anychart/dist/js/anychart-treemap.min.js';
  import store from '../../store';

  let tree2018 = store.state.tree2018;

  tree2018 = [
  	{
  		name: 2018,
  		children: tree2018.values.map(pillar => {
  			return {
  				name: pillar.key,
  				children: pillar.values.map(component => {
  					return {
  						name: component.key,
  						children: component.values.map(sector => {
  							return {
  								name: sector.key,
  								children: sector.values.map(project => {
  									return {
  										name: project.key,
  										value: project.value,
  										url: `http://localhost:7775/projects/${project.key}`,
  									};
  								}),
  							};
  						}),
  					};
  				}),
  			};
  		}),
  	},
  ];

  export default {
  	name: 'TreeMap2018',
  	data() {
  		return {
  			tree2018: tree2018,
  		};
  	},
  	mounted() {
  		this.treeMap();
  	},
  	watch: {},
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
  			const year2018 = anychart.data.tree(
  				tree2018,
  				anychart.enums.TreeFillingMethod.AS_TREE
  			);

  			const chart = anychart.treeMap(year2018);
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
  };
</script>

<style scoped>
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
