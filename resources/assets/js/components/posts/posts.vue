<template lang="pug">
   .posts
      .posts__title Latest Posts
      .posts__wrapper
        .posts__cards
           .posts__card(v-for="(item, index) in items" :key="index")
              card(:items="item")
              div {{item}}
</template>

<script>

   import './index.sass';
   import Card from '../card/card';
   import {mapGetters} from "vuex";

   export default {
      props:['items'],
      components: {Card},
      data() {

         return {
            isLast: false,
         }
      },
      computed: {
         ...mapGetters('posts', {
            postsList: 'posts'
         }),
      }
   }
</script>
