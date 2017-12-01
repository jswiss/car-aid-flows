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
          <template slot="price" scope="props">
            <div>
              <p>{{symbol}} {{ props.row.price | currency }}</p>
            </div>
          </template>
      </v-client-table>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
  	data() {
  		return {
  			columns: ['id', 'name', 'price'],
  			symbol: 'FCFA',
  			tableData: [
  				{ id: 1, name: 'John', price: 3333 },
  				{ id: 2, name: 'Jane', price: 4444 },
  				{ id: 3, name: 'Susan', price: 400 },
  				{ id: 4, name: 'Chris', price: 60 },
  				{ id: 5, name: 'Dan', price: 5555555 },
  				{ id: 1, name: 'John', price: 3333 },
  				{ id: 2, name: 'Jane', price: 4444 },
  				{ id: 3, name: 'Susan', price: 400 },
  				{ id: 4, name: 'Chris', price: 60 },
  				{ id: 5, name: 'Dan', price: 5555555 },
  				{ id: 1, name: 'John', price: 3333 },
  				{ id: 2, name: 'Jane', price: 4444 },
  				{ id: 3, name: 'Susan', price: 400 },
  				{ id: 4, name: 'Chris', price: 60 },
  				{ id: 5, name: 'Dan', price: 5555555 },
  				{ id: 1, name: 'John', price: 3333 },
  				{ id: 2, name: 'Jane', price: 4444 },
  				{ id: 3, name: 'Susan', price: 400 },
  				{ id: 4, name: 'Chris', price: 60 },
  				{ id: 5, name: 'Dan', price: 5555555 },
  				{ id: 1, name: 'John', price: 3333 },
  				{ id: 2, name: 'Jane', price: 4444 },
  				{ id: 3, name: 'Susan', price: 400 },
  				{ id: 4, name: 'Chris', price: 60 },
  				{ id: 5, name: 'Dan', price: 5555555 },
  			],
  			options: {
  				filterable: ['name'],
  				saveState: true,
  				sortable: true,
  				storage: 'local',
  				highlightMatches: true,
  			},
  		};
  	},
  	computed: {
  		...mapGetters(['eurObj', 'xafObj', 'usdObj']),
  	},
  	methods: {
  		changeSymbol() {},
  	},
  };
</script>

<style scoped>

</style>

