import Vue from 'vue'
import Router from 'vue-router'

// my components
import Home from './projectAssignment/Home.vue'
import Product from './projectAssignment/ParentProduct.vue'
import Cart from './projectAssignment/ParentCart.vue'


export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/product",
    name: "product",
    component: Product
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  }
]