<!-- tables -->
<template lang="html">
  <div id="topmost" class="container is-fluid">
    <aid-table></aid-table>
  </div>
</template>
<script type="text/javascript">
  import AidTable from './AidTable';
  // import store from '../../store';

  export default {
  	name: 'tables',
  	components: {
  		AidTable,
  	},
  	// beforeRouteEnter: (to, from, next) => {
  	// 	store.dispatch('LOAD_TABLE');
  	// 	store.dispatch('LOAD_TABLE');
  	// 	next();
  	// },
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
