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
            <input type="radio" name="question" value="2016" v-on:click="tree = 2016, tree2017 = false">
            2016 Project-level Disbursements
          </label>
          <label class="radio">
            <input type="radio" name="question" value="2015" v-on:click="tree = 2015, tree2017 = false">
            2015 Project-level Disbursements
          </label>
        </p>
        <tree-map-2015 v-if="tree === 2015"></tree-map-2015>
        <tree-map-2016 v-if="tree === 2016"></tree-map-2016>
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
  import axios from 'axios';
  import HomeText from './HomeText';
  import TreeTabs from './treemap/TreeTabs';
  import TreeMap2015 from './treemap/TreeMap2015';
  import TreeMap2016 from './treemap/TreeMap2016';
  import TreeMap2017 from './treemap/TreeMap2017';
  // import { reduceObj } from '../utils/helpers';

  export default {
  	name: 'home',
  	components: {
  		HomeText,
  		TreeTabs,
  		TreeMap2015,
  		TreeMap2016,
  		TreeMap2017,
  	},
  	data() {
  		return {
  			tree: '',
  			tree2017: true,
  			raw: '',
  			newData: {},
  		};
  	},
  	beforeCreate() {
  		axios
  			.get('https://api.myjson.com/bins/16qbu7')
  			.then(res => {
  				this.$store.commit('SET_RAW_DATA', res.data);
  			})
  			.catch(err => console.log(err));
  	},
  	created() {
  		this.raw = this.$store.state.raw;
  	},
  	mounted() {
  		this.newData = this.raw.map(d => {
  			return {
  				'Nom du projet': d['Nom du projet'],
  				'Date de début': d['Date de début'],
  				'Date de clôture': d['Date de clôture'],
  				Pilier: d['Pilier'],
  				Composante: d['Composante'],
  				'Secteur principal': d['Secteur principal'],
  				'Décaissements 2017 USD': d['Décaissements 2017 USD'],
  				'Décaissements 2018 USD': d['Décaissements 2018 USD'],
  				'Décaissements 2019 USD': d['Décaissements 2019 USD'],
  			};
  		});
  		console.log(this.newData);
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
