<template>
  <div>
    <h1 class="text-center mt-5">Welcome to my store</h1>
      <div class="tombol">
        <router-link to="/product">
          <button class="product">Product</button>
        </router-link>
        <router-link to="/cart">
          <button class="cart">Cart</button>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tombol{
  display: flex;
  justify-content: center;
}
button{
  padding: 5px;
  min-width: 100px;
  margin: 10px 4px 0 4px;
  border-radius: 10px;
}

button.product{
  background-color: lightblue;
}

button.cart{
  background-color: lightgreen;
}

</style>