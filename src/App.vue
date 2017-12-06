<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  	name: 'app',
  	create() {
  		this.$store.commit('INITIALISE_STORE');
  	},
  };
</script>

<style>

</style>
