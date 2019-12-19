<template lang="pug">
  section.home
     header.home__header
        Header
     section.home__slider
        Slider
     section.home__popular
       .container
          popular
</template>

<script>
   import Header from "../components/header/header";
   import Slider from "../components/slider/slider";
   import Popular from "../components/popular/popular";
   export default {
      components: { Header, Slider,  Popular},
      data() {
         return {

         }
      },
      mounted() {
         console.log("Home");
      }
   }
</script>
