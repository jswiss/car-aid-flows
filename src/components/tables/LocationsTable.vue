<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-one-quarter">
        <div class="field is-horizontal">
          <div class="field-label">
            <label for="currency" class="label">
              Select a currency to display
            </label>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <label class="radio">
                    <input type="radio" value="FCFA" name="currency" @click="symbol = 'FCFA'">
                    XAF
                  </label>
                  <label class="radio">
                    <input type="radio" value="€" name="currency" @click="symbol = '€'">
                    EUR
                  </label>
                  <label class="radio">
                    <input type="radio" value="$" name="currency" @click="symbol = '$'">
                    USD
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="table">
      <v-client-table
        :data="tableData"
        :columns="columns"
        :options="options"
      >
        <template slot="Montant du projet en devise" scope="props">
          <div>
            <p>{{symbol}} {{ props.row['Montant du projet en devise'] * rate | currency }}</p>
          </div>
        </template>
        <template slot="Décaissements 2017 en devise" scope="props">
          <div>
            <p>{{symbol}} {{ props.row['Décaissements 2017 en devise'] * rate | currency }}</p>
          </div>
        </template>
        <template slot="Prévision de décaissements 2017-2019 USD" scope="props">
          <div>
            <p>{{symbol}} {{ props.row['Prévision de décaissements 2017-2019 USD'] * rate | currency }}</p>
          </div>
        </template>
      </v-client-table>
    </div>
  </div>
</template>

<script>
  export default {
  	// props: {
  	// 	name: 'carTable',
  	// },
  	data() {
  		return {
  			name: 'carTable',
  			tableData: this.$store.getters.tableData,
  			columns: this.$store.getters.tableColumns,
  			symbol: '$',
  			rate: 1,
  			options: {
  				filterable: [
  					'Nom du projet',
  					'Pilier',
  					'Composante',
  					'Secteur principal',
  					'Bailleurs',
  					"Partenaires d'exécution",
  				],
  				saveState: true,
  				sortable: [
  					'Nom du projet',
  					'Date de début',
  					'Date de clôture',
  					'Pilier',
  					'Composante',
  					'Secteur principal',
  					'Montant du projet en devise',
  					'Décaissements 2017 en devise',
  					'Prévision de décaissements 2017-2019 USD',
  				],
  				storage: 'local',
  				highlightMatches: true,
  			},
  		};
  	},
  	computed: {
  		convertToXAF() {},
  		convertToEUR() {},
  		convertToUSD() {},
  	},
  };
</script>

<style scoped>

</style>

