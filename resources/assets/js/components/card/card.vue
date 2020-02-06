<template lang="pug">
    a(href="#").card
      .card__content
        .card__img(:style="{backgroundImage: 'url('+'./images/bg.png'+')'}")
        .card__wrapper
          .card__title 
          .card__footer
            a(href="#").card__link.card__category
              .card__icon
                include folder.svg
              .card__text 
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
