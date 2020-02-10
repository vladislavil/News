<template lang="pug">
  section.home
      header.home__header
        Header
      section.home__slider
        Slider( :items='items' )
      section.home__content
        .container
            a(id="auth" @click="login") Войти
            .home__wrapper
               transition( name="fade" )
                  section.home__posts
                     posts( :items='items' @modal="isModal($event)")
               section.home__sidebar
                  .home__sidebar-wrapper(:class="{fixed: isFixed}")
                     popular
                     login
      post-page(v-if="showModal" @close="showModal = !showModal")
         div(slot="header") {{ items[i].text }}
         img(slot="body" :src="items[i].photo")

</template>

<script>
   import './index.sass';
   import axios from "axios";
   import Login from "../components/login/login";
   import Header from "../components/header/header";
   import Slider from "../components/slider/slider";
   import Popular from "../components/popular/popular";
   import Posts from "../components/posts/posts";
   import postPage from "../components/postFull/postFull"
   import {mapGetters} from "vuex";

   export default {
      
      components: { Header, Slider, Popular, Login, Posts, postPage},
      data() {
         return {
            isFixed: false,
            showModal: false,
            i: null
         }
      },
      // created() {
      //    this.getItems();
      // },
      computed: {
         ...mapGetters('user', {
            auth: 'getAuthorize'
         }),
         ...mapGetters('posts', {
            items: 'posts'
         }),
      },
      methods: {
         login() {
            this.$store.dispatch('user/loginUser');
         },
         // getItems() {
         //    this.$store.dispatch('posts/getPosts');
         // },
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