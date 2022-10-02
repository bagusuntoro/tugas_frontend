<template>
  <button type="button" @click="btnAdd(index)">Add to cart</button>
</template>

<script>
export default {
  methods:{
    btnAdd(index){
      this.$emit('emitBtnAdd', index)
    }
  }
}
</script>

<style>

</style>