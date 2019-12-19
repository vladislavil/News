<template lang="pug">
  a(href="#").popular-card
    .popular-card__content
      .popular-card__image
        img(src="/images/bg.png")
      .popular-card__data
        .popular-card__title Text
        .popular-card__icons
          a(href="#").popolar-card__link
            include comment.svg
</template>

<script>
  import './index.sass';

  export default {
    data() {
      return {

      }
    }
  }

</script>
