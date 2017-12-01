<template>
  <div id="table">
    <v-client-table
      :data="tableData"
      :columns="columns"
      :options="options"
    >
        <template slot="price" scope="props">
          <div>
            <p>{{ props.row.price | currency }}</p>
          </div>
        </template>
    </v-client-table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
  	data() {
  		return {
  			columns: ['id', 'name', 'price'],
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
  };
</script>

<style scoped>

</style>

