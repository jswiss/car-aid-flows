<!-- tables -->
<template lang="html">
  <div id="topmost" class="container is-fluid">
    <tables-tabs></tables-tabs>
    <project-table v-if="['ProjectTable'].indexOf($route.name) > -1"></project-table>
    <donor-table v-if="['DonorTable'].indexOf($route.name) > -1"></donor-table>
    <locations-table v-if="['LocationsTable'].indexOf($route.name) > -1"></locations-table>
    <funds-table v-if="['FundsTable'].indexOf($route.name) > -1"></funds-table>
  </div>
</template>
<script type="text/javascript">
  import TablesTabs from './TablesTabs';
  import LocationsTable from './LocationsTable';

  export default {
  	name: 'tables',
  	components: {
  		TablesTabs,
  		LocationsTable,
  	},
  	created() {
  		this.$store.dispatch('LOAD_TABLE');
  		this.$store.dispatch('LOAD_COLUMNS');
  	},
  };
</script>

<style scoped>
  .nav-item {
  	margin: 6px 30px 6px 30px;
  }
  #topmost {
  	margin-top: 25px;
  }
</style>
