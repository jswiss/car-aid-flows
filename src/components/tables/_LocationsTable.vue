<template>
  <div class="container">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="filter-bar control is-grouped">
            <div class="field">
              <label for="" class="label">Sélectionnez un lieu</label>
              <p class="control">
                <span class="select">
                  <select 
                    class="select"
                    type="text"
                    v-model="searchQuery"
                    value="search"
                  >
                    <option value="">tous les endroits</option>
                    <option value="baminguiBangoran">Bamingui-Bangoran</option>
                    <option value="bangui">Bangui</option>
                    <option value="basseKotto">Basse-Kotto</option>
                    <option value="hauteKotto">Haute-Kotto</option>
                    <option value="hautMbomou">Haut-Mbomou</option>
                    <option value="kemo">Kemo</option>
                    <option value="lobaye">Lobaye</option>
                    <option value="nanaGrebizi">Nana-Grébizi</option>
                    <option value="nanaMambere">Nana-Mambéré</option>
                    <option value="mambereKadei">Mambéré-Kadéï</option>
                    <option value="mbomou">Mbomou</option>
                    <option value="ombellaMPoko">Ombella-M'Poko</option>
                    <option value="ouham">Ouham</option>
                    <option value="ouhamPende">Ouham-Pendé</option>
                    <option value="sanghaMambere">Sangha-Mbaéré</option>
                    <option value="vakaga">Vakaga</option>
                  </select>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="level-right">
        <a class="button is-primary exportCSV" 
        v-on:click="exportCSV"
        >
        <span class="icon">
          <i class="fa fa-table"></i>
        </span>
        <span>table d'exportation</span>
        </a>
      </div>
    </nav>
    <div class="scrollable">
      <data-table class="table is-bordered is-striped is-narrow"
        :data="locationTable"
        :columns-to-display="columnsToDisplay"
        :display-names="displayNames"
        :filter-key="searchQuery"
        :child-hideable="true"
        :child-init-hide="true"
      >
        <template slot="Project Title" scope="props">
          <a v-bind:href="`http://somaliaaidflows.so/projects/${props.entry['name']}`"><p class="url">{{ props.entry['name'] }}</p></a>
        </template>
        <template slot="Start Date" scope="props">
          <p>{{ props.entry['startDate'] || 'n/a' }}</p>
        </template>
        <template slot="End Date" scope="props">
          <p>{{ props.entry['endDate'] || 'n/a' }}</p>
        </template>
        <template slot="totalUSD" scope="props">
          <p>${{ props.entry.totalUSD | currency }}</p>
        </template>
        <template slot="child" scope="props">
          <b>Project Description: </b>{{ props.entry['objective'] || 'n/a' }}
          <br>
          <br>
          <b>Funders: </b>{{ props.entry['donors'] || 'n/a' }}
          <br>
          <br>
          <b>Implementers: </b>{{ props.entry['implementers'] || 'n/a' }}
          <br>
          <br>
          <b>Ministry: </b>{{ props.entry['ministry'] || 'n/a' }}
        </template>
      </data-table>
      {{ locationTable }}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import jsonexport from 'jsonexport';
  import DataTable from './v-data-table.vue';
  import { locationTable } from '../../utils/store';

  export default {
  	name: 'LocationsTable',
  	components: {
  		DataTable,
  	},
  	data() {
  		return {
  			locationTable,
  			locations: '',
  			gridColumns: [
  				'location',
  				'locationValue',
  				'name',
  				'objectives',
  				'implementers',
  				'donors',
  				'ministry',
  				'startDate',
  				'endDate',
  				'pillar',
  				'component',
  				'primarySector',
  				'totalUSD',
  				'usd2017',
  				'projectedUSD2017',
  				'projectedUSD2018',
  				'projectedUSD2019',
  			],
  			columnsToDisplay: ['name', 'startDate', 'endDate', 'totalUSD'],
  			searchQuery: '',
  			displayNames: {
  				name: 'Project Name',
  				startDate: 'Start Date',
  				endDate: 'End Date',
  				totalUSD: 'Total USD',
  			},
  		};
  	},
  	methods: {
  		exportCSV() {
  			jsonexport(locationTable, (err, csv) => {
  				if (err) return console.log(err);
  				(function downloadCSV(args) {
  					if (csv === null) return;
  					const filename = 'endroits.csv';
  					if (!csv.match(/^data:text\/csv/i)) {
  						csv = 'data:text/csv;charset=utf-8,' + csv;
  					}
  					const data = encodeURI(csv);
  					let link = document.createElement('a');
  					link.setAttribute('href', data);
  					link.setAttribute('download', filename);
  					link.click();
  				})();
  			});
  		},
  	},
  };
</script>

<style scoped>
  .scrollable {
  	position: relative;
  	overflow: auto;
  }
  .level {
  	margin-top: 2%;
  	margin-bottom: 0%;
  }
  input {
  	width: 300px;
  }
</style>
