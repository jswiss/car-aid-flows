 <!--home page-->
<template>
  <div id="topmost" class="columns is-gapless is-mobile">  
    <div class="column is-3">
      <home-text></home-text>
    </div>
    <div class="column">
      <!--<tree-tabs></tree-tabs>-->
      <div class="field">
        <p class="control" id="radios">
          <label class="radio">
            <input type="radio" name="question" value="2017" v-on:click="tree = 2017, tree2017 = true">
            2017 Project-level Disbursements
          </label>
          <label class="radio">
            <input type="radio" name="question" value="2018" v-on:click="tree = 2018, tree2018 = false">
            2018 Project-level Disbursements
          </label>
          <label class="radio">
            <input type="radio" name="question" value="2019" v-on:click="tree = 2019, tree2019 = false">
            2019 Project-level Disbursements
          </label>
        </p>
        <tree-map-2017 :raw="raw" v-if="tree2017"></tree-map-2017>
        <tree-map-2018 :raw="raw" v-if="tree === 2018"></tree-map-2018>
        <tree-map-2019 :raw="raw" v-if="tree === 2019"></tree-map-2019>
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
  import TreeTabs from './treemap/TreeTabs';
  import TreeMap2017 from './treemap/TreeMap2017';
  import TreeMap2018 from './treemap/TreeMap2018';
  import TreeMap2019 from './treemap/TreeMap2019';

  const raw = require('../assets/data/aidflows.json');

  export default {
  	name: 'home',
  	components: {
  		HomeText,
  		TreeTabs,
  		TreeMap2017,
  		TreeMap2018,
  		TreeMap2019,
  	},
  	data() {
  		return {
  			tree: '',
  			tree2017: true,
  			raw: raw,
  		};
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
