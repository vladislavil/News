<template lang="pug">
  section.home
     header.home__header
        Header
     section.home__slider
        Slider
     section.home__content
        .container
         a(id="auth" @click="login") Войти
         div {{ $store.state.authorize }}
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

   export default {
      
      components: { Header, Slider, Popular, Login, Posts},
      data() {
         return {
            info: '' ,
            isFixed: false
         }
      },
      methods: {
         login() {
            this.$store.dispatch('loginUser');
         }
      }
   }
</script>
