<template lang="pug">
  section.home
     header.home__header
        Header
     section.home__slider
        Slider
     section.home__content
        .container
           .home__wrapper
              section.home__posts
                posts
              section.home__sidebar
                 popular
                 login
     //section.home__login
       .container


</template>

<style lang="sass">
   .home__content
      padding-top: 30px
   .home__wrapper
      display: flex
   .home__posts
      margin-right: 30px

   .home__sidebar
      width: 280px
      flex-shrink: 0
</style>

<script>
   import Login from "../components/login/login";
   import Header from "../components/header/header";
   import Slider from "../components/slider/slider";
   import Popular from "../components/popular/popular";
   import Posts from "../components/posts/posts";

   export default {
      components: { Header, Slider, Popular, Login, Posts},
      data() {
         return {

         }
      },
      mounted() {
         console.log("Home");
      }
   }
</script>
