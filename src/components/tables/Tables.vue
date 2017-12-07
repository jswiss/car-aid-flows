<!-- tables -->
<template lang="html">
  <div id="topmost" class="container is-fluid">
    <aid-table></aid-table>
  </div>
</template>
<script type="text/javascript">
	import AidTable from './AidTable';

	export default {
		name: 'tables',
		components: {
			AidTable,
		},
		beforeCreate() {
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
