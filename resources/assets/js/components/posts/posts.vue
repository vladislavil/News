<template lang="pug">
   .posts
      .posts__title Latest Posts
      .posts__wrapper
        .posts__cards
           router-link.posts__card( @click="onModal" :to="'/home/' + id[index]" v-for="(item, index) in items" :key="index")
              card( :items='item' :photo="photo[index]")
</template>

<script>

   import './index.sass';
   import Card from '../card/card';
   import {mapGetters} from "vuex";

   export default {
      components: {Card},
      props: ['items', 'photo', 'show'],
      data() {

         return {
            isLast: false,
         }
      },
      computed: {
         ...mapGetters('posts', {
            id: "post"
         })
      },
      methods: {
         onModal() {
            this.$emit('modal', {
               show: true
            })
         }
      }
   }
</script>
