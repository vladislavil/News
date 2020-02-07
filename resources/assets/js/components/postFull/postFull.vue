<template lang="pug">
   h1 Hello
</template>

<script>

import {mapGetters} from "vuex";

   export default {
      id() {
         return this.$route.params.id;
      },
      product() {
         return this.$store.getters['posts/post'](this.id);
      }
   }
</script>