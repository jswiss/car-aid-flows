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
            <input type="radio" name="question" value="2017" @click="year = 2017, setTreeYear">
            2017 Project-level Disbursements
          </label>
          <label class="radio">
            <input type="radio" name="question" value="2018" @click="year = 2018, setTreeYear">
            2018 Project-level Disbursements
          </label>
          <label class="radio">
            <input type="radio" name="question" value="2019" @click="year = 2019, setTreeYear">
            2019 Project-level Disbursements
          </label>
        </p>
        <tree-map-2017 v-if="tree2017"></tree-map-2017>
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
  import store from '../store';
  console.log(store.state.tree2018);
  export default {
  	name: 'home',
  	components: {
  		HomeText,
  		TreeTabs,
  		TreeMap2017,
  	},
  	data() {
  		return {
  			year: '2017',
  			tree2017: true,
  		};
  	},
  	computed: {
  		setTreeYear() {
  			this.$store.commit('SET_TREEMAP_YEAR', this.year);
  			this.$store.dispatch('LOAD_TREEMAP');
  		},
  		setTree() {},
  	},
  	created() {
  		this.$store.dispatch('LOAD_CLEAN_TREE');
  	},
  	beforeMount() {
  		this.$store.dispatch('LOAD_TREES');
  	},
  	mounted() {
  		this.$store.dispatch('LOAD_TREEMAP');
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