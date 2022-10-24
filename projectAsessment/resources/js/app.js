// const app = new Vue({
//     el: '#app',
//     router
// });




/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))



// bismillah

// this is home page
Vue.component('home-component', require('./projectAssignment/Home.vue').default);

// this is parent component
Vue.component('parent-product', require('./projectAssignment/ParentProduct.vue').default);
Vue.component('parent-cart', require('./projectAssignment/ParentCart.vue').default);

// this is child component
Vue.component('list-component', require('./projectAssignment/ChildProduct.vue').default);
Vue.component('cart-component', require('./projectAssignment/ChildCart.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
// });


import store from './store'
require('./bootstrap');


import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes'

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});


const app = new Vue({
    el: '#app',
    store,
    router
});
