<template lang="pug">
    .card
      .card__content
        .card__wrapper
          .card__img
          .card__title {{ items.title}}
          .card__footer
            .card__category
              a(href="#").card__link
                include folder.svg
              .card__text {{items.category}}
            .card__details
              a(href="#").card__link
                include user.svg
              a(href="#").card__link
                include calendar.svg
              a(href="#").card__link
                include comment.svg

</template>

<script>

  import './index.sass';

  export default {
    data() {
      return {

      }
    },
    props: ['items']
  }

</script>
