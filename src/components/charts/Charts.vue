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
      <budget-support v-if="['BudgetSupport'].indexOf($route.name) > -1"></budget-support>
      <disbursement-rate v-if="['DisbursementRate'].indexOf($route.name) > -1"></disbursement-rate>
      <project-map v-if="['ProjectMap'].indexOf($route.name) > -1"></project-map>
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
	import BudgetSupport from './BudgetSupport';
	import DisbursementRate from './DisbursementRate';
	import ProjectMap from './ProjectMap';

	export default {
		name: 'Charts',
		components: {
			ChartsTabs,
			PillarCountChart,
			PillarsComponents2017,
			TreeMap2017,
			TreeMap2018,
			TreeMap2019,
			DisbursementRate,
			BudgetSupport,
			ProjectMap,
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
