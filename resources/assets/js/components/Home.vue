<template lang="pug">
   header.header
      Header
</template>

<script>
   import Header from "../components/header/header";
   export default {
      components: { Header },
      data() {
         return {
         }
      },
      mounted() {
         console.log("Home");
      }
   }
</script>
