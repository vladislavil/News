<template lang="pug">
   .posts
      .posts__title Latest Posts
      .posts__wrapper
        .posts__cards
           .posts__card(v-for="(item, index) in items" :key="index")
              card(:items="item")

</template>

<script>

   import './index.sass';
   import Card from '../card/card';
   export default {
      components: {Card},
      data() {

         return {
            isLast: false,
            items: [
               {id: "1", title: "title1", category: "category1"},
               {id: "2", title: "title2", category: "category2"},
               {id: "3", title: "title3", category: "category3"},
               {id: "4", title: "title4", category: "category4"},
               {id: "5", title: "title5", category: "category5"},
               {id: "6", title: "title6", category: "category6"},
               {id: "7", title: "title7", category: "category7"},
               {id: "8", title: "title8", category: "category8"},
               {id: "9", title: "title9", category: "category9"},
               {id: "10", title: "title10", category: "category10"},
               {id: "11", title: "title11", category: "category11"}
            ],
         }
      },
   }
</script>
