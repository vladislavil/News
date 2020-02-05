
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');

import Vue from "vue";
import App from "./components/App";
import VueRouter from "vue-router";
import router from "./router";
import Swiper from "vue-awesome-swiper";

import {store} from "../store/user";



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
VK.init({
    apiId: 7261107
});

Vue.use(VueRouter, Swiper);

Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
});

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store: store
});
