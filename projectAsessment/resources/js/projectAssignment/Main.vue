<template>
  <div>
    <list-component :listproduct="product" @emitAdd="addProduct"/>
    <cart-component :cartproduct="product" @emitDelete="deleteProduct"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      product:[
        {
          name: "Indomie Goreng Rendang",
          desc: "Masakan instan terenak di dunia",
          stock: 10,
          price: 3900,
          total: 0,
          qty:0
        },
        {
          name: "Mie Gelas Rendang",
          desc: "Masakan instan khusus anak kos",
          stock: 10,
          price: 1500,
          total: 0,
          qty:0
        },
        {
          name: "Bakmi mewah",
          desc: "Anak kost jangan nyoba-nyoba yah...",
          stock: 10,
          price: 10000,
          total: 0,
          qty:0
        }
      ]
      // harga:[total]
    }
  },
  mounted(){

  },

  methods:{
    addProduct(index){
      // this.$emit('emitClickProduct', index)
      // this.product[index].status=true;
      this.product[index].qty++;
      this.product[index].stock--;
      this.product[index].total=this.product[index].price*this.product[index].qty;
    },
    deleteProduct(index){
      this.product[index].stock+=this.product[index].qty;
      this.product[index].qty=0;
      this.product[index].total=this.product[index].price*this.product[index].qty;
    },
    checkout(){
      alert(product[0].total+product[1].total+product[2].total);
    }
  }
}
</script>

<style>
  
</style>