<!--home page-->
<template>
  <div id="topmost" class="columns is-gapless is-mobile">  
    <div class="column is-3">
      <home-text></home-text>
    </div>
    <div class="column">
      <!--<tree-tabs></tree-tabs>-->
      <div class="field">
        <div class="disclaimer">
          <p class="disclaimer-text">
            * Projects under a certain value, relative to the largest project within each subsector, are not shown in this chart. To see all projects, please visit the <router-link to="/tables/projects">projects table</router-link>.
          </p>
        </div>
        <div>
          <p id="support">Developed with the support of the World Bank and United Nations.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import HomeText from './HomeText';

  export default {
  	name: 'home',
  	components: {
  		HomeText,
  	},
  	mounted() {
  		this.$store.dispatch('LOAD_RAW');
  	},
  };
</script>

<style scoped>
  .disclaimer-text {
  	margin-left: 2%;
  	font-style: italic;
  	font-size: 12px;
  	color: gray;
  }
  #topmost {
  	margin-top: 25px;
  }
  .control {
  	margin-left: 20px;
  }
  .field {
  	margin: 1%;
  }
  #support {
  	text-align: center;
  	margin: 2%;
  	font-size: 11px;
  	color: gray;
  }
</style>