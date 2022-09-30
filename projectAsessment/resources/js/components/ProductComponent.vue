<template>
  <div>
    <h2>Semua Product</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Stock</th>
        <th>Price</th>
        <th>Action</th>
      </tr>

      <tr v-for="(item, index) in product" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.desc }}</td>
        <td>{{ item.stock }}</td>
        <td>{{ item.price }}</td>
        <td><button type="button" @click="addProduct">Add to cart</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      product:[
        {
          name: "Indomie Goreng Rendang",
          desc: "Masakan instan terenak di dunia",
          stock: 10,
          price: 0
        },
        {
          name: "Mie Gelas Rendang",
          desc: "Masakan instan khusus anak kos",
          stock: 10,
          price: 0
        },
        {
          name: "Bakmi mewah",
          desc: "Anak kost jangan nyoba-nyoba yah...",
          stock: 10,
          price: 0
        }
      ]
    }
  },
  mounted(){
    console.log('Component mounted.')
  },

  methods:{
    addProduct(){
      this.$emit('emitSubmit', this.product)
      this.product[stock]=1;
    }
  }
}
</script>

<style>
table, th, td{
  border: 1px solid black;
  border-collapse: collapse;
  padding: 20px;
}

button{
  padding: 10px;
  border-radius: 15px;
  background-color: #4f76f5;
}

div{
  margin-left: 10px;
}
</style>