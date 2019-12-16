<template lang="pug">
  section.home
     header.home__header
        Header
     .home__slider
        Slider
</template>

<script>
   import Header from "../components/header/header";
   import Slider from "../components/slider/slider";
   export default {
      components: { Header, Slider },
      data() {
         return {

         }
      },
      mounted() {
         console.log("Home");
      }
   }
</script>
