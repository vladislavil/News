<template lang="pug">
   .posts
      .posts__title Latest Posts
      .posts__wrapper
        .posts__cards
           .posts__card( @click="onModal(index)" v-for="(item, index) in items" :key="index")
               card( :items='item.text' :photo="item.photo")

</template>

<script>

   import './index.sass';
   import Card from '../card/card';
   import {mapGetters} from "vuex";

   export default {
      components: {Card},
      props: ['items'],
      data() {

         return {
            isLast: false,
         }
      },
      mounted() {
         let a = this.items.map((elem) => {
            console.log(elem)
         })
      },
      methods: {
         onModal(i) {
            document.body.classList.toggle('no-scroll');
            this.$emit('modal', {
               show: true,
               index: i
            });
         }
      }
   }
</script>


<style lang="sass">
.no-scroll
   overflow: hidden
</style>
