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
  			],
  			options: {
  				// templates: {
  				// 	price(h, row) {
  				// 		const vm = this;
  				// 		return vm.currency(row.price);
  				// 	},
  				// },
  			},
  		};
  	},
  	// methods: {
  	// 	currency(val) {
  	// 		val
  	// 			.toString()
  	// 			.replace(/,/g, '')
  	// 			.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  	// 	},
  	// },
  };
</script>
