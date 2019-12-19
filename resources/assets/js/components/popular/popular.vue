<template lang="pug">
  .popular
    .popular__content
      popular-card
      popular-card
      popular-card
      popular-card

</template>

<script>

  import './index.sass';
  import PopularCard from '../popular/popularCard/popularCard';

  export default {

    components: { PopularCard},
    data() {
      return {

      }
    }
  }
</script>
