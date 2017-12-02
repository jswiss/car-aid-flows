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
                    <input type="radio" value="FCFA" name="currency" @click="convertToXAF">
                    XAF
                  </label>
                  <label class="radio">
                    <input type="radio" value="€" name="currency" @click="convertToEUR">
                    EUR
                  </label>
                  <label class="radio">
                    <input type="radio" value="$" name="currency" @click="convertToUSD">
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
            <p>{{symbol}} {{ props.row['Montant du projet en devise'] | currency }}</p>
          </div>
        </template>
        <template slot="Décaissements 2017 en devise" scope="props">
          <div>
            <p>{{symbol}} {{ props.row['Décaissements 2017 en devise'] | currency }}</p>
          </div>
        </template>
        <template slot="Prévision de décaissements 2017-2019 USD" scope="props">
          <div>
            <p>{{symbol}} {{ props.row['Prévision de décaissements 2017-2019 USD'] | currency }}</p>
          </div>
        </template>
      </v-client-table>
    </div>
  </div>
</template>

<script>
  export default {
  	data() {
  		return {
  			name: 'carTable',
  			tableData: this.$store.getters.tableData,
  			currencyData: [],
  			columns: this.$store.getters.tableColumns,
  			symbol: '$',
  			xafRate: 575,
  			usdRate: 1,
  			eurRate: 1.1408,
  			options: {
  				filterable: [
  					'Nom du projet',
  					'Pilier',
  					'Composante',
  					'Secteur principal',
  					'Bailleurs',
  					"Partenaires d'exécution",
  				],
  				dateColumns: ['Date de début', 'Date de clôture'],
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
  	methods: {
  		convertToXAF() {
  			this.symbol = 'FCFA';
  			this.tableData = this.$store.getters.xafTableData;
  		},
  		convertToEUR() {
  			this.symbol = '€';
  			this.tableData = this.$store.getters.eurTableData;
  		},
  		convertToUSD() {
  			this.symbol = '$';
  			this.tableData = this.$store.getters.tableData;
  		},
  	},
  	mounted() {
  		this.$store.dispatch('LOAD_EUR');
  		this.$store.dispatch('LOAD_XAF');
  	},
  };
</script>

<style scoped>
  label.label,
  div.control {
  	text-align: center;
  }
</style>

