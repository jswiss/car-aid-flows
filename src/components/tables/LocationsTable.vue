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
  	props: ['name'],
  	data() {
  		return {
  			// name: 'carTable',
  			tableData: this.$store.state.tableData,
  			columns: [this.$store.state.tableColumns],
  			symbol: '$',
  			options: {
  				filterable: true,
  				saveState: true,
  				sortable: true,
  				storage: 'local',
  				highlightMatches: true,
  			},
  		};
  	},
  	methods: {
  		changeSymbol() {},
  	},
  	created() {
  		// this.$store.dispatch('LOAD_TABLE');
  	},
  };
</script>

<style scoped>

</style>

