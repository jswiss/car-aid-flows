<!-- dashboard -->
<template lang="html">
  <div id="topmost" class="columns">
    <charts-tabs class="column is-one-quarter"></charts-tabs>
    <div id="chart-content" class="column is-three-quarters">
      <pillar-count-chart v-if="['PillarCountChart'].indexOf($route.name) > -1"></pillar-count-chart>
      <pillars-components-2017 v-if="['PillarsComponents2017'].indexOf($route.name) > -1"></pillars-components-2017>
      <tree-map-2017 v-if="['TreeMap2017'].indexOf($route.name) > -1"></tree-map-2017>
      <tree-map-2018 v-if="['TreeMap2018'].indexOf($route.name) > -1"></tree-map-2018>
      <tree-map-2019 v-if="['TreeMap2019'].indexOf($route.name) > -1"></tree-map-2019>
      <!-- <aid-on-treasury v-if="['AidOnTreasury'].indexOf($route.name) > -1"></aid-on-treasury> -->
    </div>
  </div>
</template>
<script type="text/javascript">
	import ChartsTabs from './ChartsTabs';
	import PillarCountChart from './PillarCountChart';
	import PillarsComponents2017 from './PillarsComponents2017';
	import TreeMap2017 from './TreeMap2017';
	import TreeMap2018 from './TreeMap2018';
	import TreeMap2019 from './TreeMap2019';

	(function(i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		(i[r] =
			i[r] ||
			function() {
				(i[r].q = i[r].q || []).push(arguments);
			}),
			(i[r].l = 1 * new Date());
		(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m);
	})(
		window,
		document,
		'script',
		'https://www.google-analytics.com/analytics.js',
		'ga'
	);

	ga('create', 'UA-99055406-1', 'auto');
	ga('send', 'pageview');

	export default {
		name: 'Charts',
		components: {
			ChartsTabs,
			PillarCountChart,
			PillarsComponents2017,
			TreeMap2017,
			TreeMap2018,
			TreeMap2019,
		},
		created() {
			this.$store.dispatch('LOAD_RAW');
			this.$store.dispatch('LOAD_CLEAN_TREE');
		},
		beforeMount() {
			this.$store.dispatch('LOAD_TREES');
		},
	};
</script> 

<style scoped>
	#topmost {
		margin-top: 25px;
	}
</style>
