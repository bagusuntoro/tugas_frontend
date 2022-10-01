<template>
  <div>
    <h2>Keranjang Belanja</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Action</th>
      </tr>

      <tr v-for="(item, index) in cartproduct" :key="index">
        <td v-if="item.qty>0">{{ item.name }}</td>
        <td v-if="item.qty>0">{{ item.qty }}</td>
        <td v-if="item.qty>0">{{ 'Rp.'+item.price*item.qty }}</td>
        <td v-if="item.qty>0"><button type="button" @click="deleteProduct(index)">Delete</button></td>
      </tr>
      <tr>
        <td colspan="2" class="bold">Total</td>
        <td colspan="2">{{ 'Rp.'+(cartproduct[0].total+cartproduct[1].total+cartproduct[2].total)}}</td>
      </tr>
    </table>
    <button type="button" class="checkout" @click="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  props:{
    cartproduct:{
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods:{
    deleteProduct(index){
      this.$emit("emitDelete", index);
    },
    checkout(){
      alert ('total bayar : ' + (this.cartproduct[0].total+this.cartproduct[1].total+this.cartproduct[2].total));
    }
  }

}
</script>

<style scoped>
  table{
    border-collapse: collapse;
    width: 100%;
  }

  th, td{
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  button{
    padding: 10px;
    border-radius: 15px;
    background-color: #e64242;
    color: white;
    cursor:pointer;
  }

  div{
    margin: 20px;
  }

  .bold{
    font-weight: bold;
  }

  .checkout{
    margin-top:10px;
    background-color: #57a836;
    color: white;
  }
</style>