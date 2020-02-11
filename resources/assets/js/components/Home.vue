<template lang="pug">
  section.home
      header.home__header
        Header
      section.home__slider
        Slider( :items='items' )
      section.home__content
        .container
            a(id="auth" @click="login" v-if='!auth' ) Войти
            div( v-if='auth')
               div 
                  img(:src="img")
                  div {{ user }}
            .home__wrapper
               transition( name="fade" )
                  section.home__posts
                     posts( :items='items' @modal="isModal($event)")
               section.home__sidebar
                  .home__sidebar-wrapper
                     popular
                     login
      post-page(v-if="showModal" @close="showModal = !showModal")
         div(slot="header") {{ items[i].text }}
         img(slot="body" :src="items[i].photo")
      preloader(v-if="!load")

</template>

<script>
   import './index.sass';
   import axios from "axios";
   import Login from "../components/login/login";
   import Header from "../components/header/header";
   import Slider from "../components/slider/slider";
   import Popular from "../components/popular/popular";
   import Posts from "../components/posts/posts";
   import postPage from "../components/postFull/postFull";
   import Preloader from "../components/preloader/Preloader";


   import {mapGetters} from "vuex";

   export default {
      
      components: { Header, Slider, Popular, Login, Posts, postPage, Preloader},
      data() {
         return {
            showModal: false,
            i: null
         }
      },
      mounted() {
         window.onload = () => {
            this.$store.commit('posts/windowLoad');
         }
      },
      computed: {
         ...mapGetters('user', {
            auth: 'getAuthorize',
            user: 'getUser',
            img: 'photo',
            tock: 'getTocken'
         }),
         ...mapGetters('posts', {
            items: 'posts',
            load: 'isLoad'
         }),
         LogIn() {
            if(this.auth === true) {
               sessionStorage.setItem("tocket", this.tock);
            }
         }
      },
      methods: {
         login() {
            this.$store.dispatch('user/loginUser');
         },
         isModal(data) {
            this.showModal = data.show;
            this.i = data.index
         }
      }
   }
</script>
<style lang="sass" scoped>

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
// .pulse
//   animation-name: pulse
</style>