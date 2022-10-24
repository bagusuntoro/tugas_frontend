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

      <tr v-for="(item, index) in listproduct" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.desc }} </td>
        <td>{{ item.stock }} </td>
        <td>{{ 'Rp.'+item.price }}</td>
        <td>
          <button type="button" @click="addProduct(index)" v-if="item.stock>0">Add to cart</button>
        </td>
      </tr>
    </table>

    <!-- <router-link to="/">Back</router-link> -->
  </div>
</template>

<script>
export default {
  props:{
    listproduct:{
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods:{
    addProduct(index){
      this.$emit("emitAdd", index);
    },
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
    padding: 5px 10px;
    border-radius: 10px;
    background-color: lightblue;
    cursor:pointer;
  }

  div{
    margin:20px;
  }
</style>