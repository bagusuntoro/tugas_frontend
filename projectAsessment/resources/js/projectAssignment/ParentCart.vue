<template>
  <div>
    <!-- from child Cart -->
    <cart-component :cartproduct="listProduct" @emitDelete="deleteProduct" @emitClear="clearProduct"/>


  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      listProduct: 'getData'
    })
  },
  methods: {
    deleteProduct(index) {
      this.$store.dispatch('deleteProduct', index);
    },
    clearProduct(index) {
      this.$store.dispatch('clearProduct', index);
    }
    // getProduct() {
    //   let result = true
    //   this.$store.dispatch('getProduct', result);
    // }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>