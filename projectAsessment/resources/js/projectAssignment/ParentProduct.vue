<template>
  <div>

    <!-- from child product -->
    <list-component :listproduct="listProduct" @emitAdd="addProduct" />

    <!-- button back -->
    <router-link to="/">
          <button class="back">Back</button>
    </router-link>

  </div>
</template>

<script>
import{mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      // product:[
      //   {
      //     name: "Indomie Goreng Rendang",
      //     desc: "Masakan instan terenak di dunia",
      //     stock: 10,
      //     price: 3900,
      //     total: 0,
      //     qty:0
      //   },
      //   {
      //     name: "Mie Gelas Rendang",
      //     desc: "Masakan instan khusus anak kos",
      //     stock: 10,
      //     price: 1500,
      //     total: 0,
      //     qty:0
      //   },
      //   {
      //     name: "Bakmi mewah",
      //     desc: "Anak kost jangan nyoba-nyoba yah...",
      //     stock: 10,
      //     price: 10000,
      //     total: 0,
      //     qty:0
      //   }
      // ]
    }
  },
  computed:{
    ...mapGetters({
      listProduct:'getData'
    })
  },
  methods: {
    addProduct(index) {
      // this.product[index].qty++;
      // this.product[index].stock--;
      // this.product[index].total = this.product[index].price * this.product[index].qty;

      this.$store.dispatch('addProduct', index);
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
button{
  padding: 5px 10px;
  margin: 10px 4px 0 15px;
  border-radius: 10px;
}

button.back{
  background-color: lightsalmon;
}
</style>'ij. j'