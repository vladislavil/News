<template lang="pug">
  section.home
     header.home__header
        Header
     section.home__slider
        Slider
     section.home__content
        .container
         a(id="auth" @click="login") Войти
         div(v-if="auth") {{postsList}}
            div(v-if="auth") {{photos}}
         .home__wrapper
            section.home__posts
              posts
            section.home__sidebar
              .home__sidebar-wrapper(:class="{fixed: isFixed}")
                 popular
                 login
     //section.home__login
       .container


</template>

<script>
   import './index.sass';
   import axios from "axios";
   import Login from "../components/login/login";
   import Header from "../components/header/header";
   import Slider from "../components/slider/slider";
   import Popular from "../components/popular/popular";
   import Posts from "../components/posts/posts";
   import {mapGetters} from "vuex";

   export default {
      
      components: { Header, Slider, Popular, Login, Posts},
      data() {
         return {
            isFixed: false
         }
      },
      mounted() {
         this.getItems();
      },
      computed: {
         ...mapGetters('user', {
            auth: 'getAuthorize'
         }),
         ...mapGetters('posts', {
            postsList: 'postsText',
            photos: 'postsPhotos'
         }),
      },
      methods: {
         login() {
            this.$store.dispatch('user/loginUser');
         },
         getItems() {
            this.$store.dispatch('posts/getPosts');
         }
      }
   }
</script>
