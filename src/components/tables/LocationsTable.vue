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
    {{ tableData }}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
  	data() {
  		return {
  			columns: ['id', 'name', 'price'],
  			symbol: 'FCFA',
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
  		...mapGetters(['tableData']),
  	},
  	methods: {
  		changeSymbol() {},
  	},
  	created() {
  		this.$store.dispatch('LOAD_TABLE');
  	},
  };
</script>

<style scoped>

</style>

