<template lang="pug">
  section.home
     header.home__header
        Header
     section.home__slider
        Slider
     section.home__content
        .container
         a(id="auth" @click="login") Войти
         .home__wrapper
            transition(name="fade")
               section.home__posts
                  posts( :items='postsList' :photo='photos')
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
      created() {
         this.getItems();
      },
      computed: {
         ...mapGetters('user', {
            auth: 'getAuthorize'
         }),
         ...mapGetters('posts', {
            postsList: 'postsText',
            photos: 'postsPhoto'
            //id: 'postsID'
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
<style lang="sass">

.fade-enter

.fade-enter-active
   animation: pulse 3s

.fade-enter-to

.fade-live

.fade-live-active
   

.fade-live-to

@-webkit-keyframes pulse
  from
    transform: scale3d(1, 1, 1)
  50% 
    transform: scale3d(1.05, 1.05, 1.05)
  to
    transform: scale3d(1, 1, 1)

@keyframes pulse 
  from 
    transform: scale3d(1, 1, 1)
  50% 
    transform: scale3d(1.05, 1.05, 1.05)
  to 
    transform: scale3d(1, 1, 1)
.pulse
  animation-name: pulse
</style>