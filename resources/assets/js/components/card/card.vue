<template lang="pug">
    .card(:style="{backgroundImage: 'url('+'./images/bg.png'+')'}")
      .card__content
        .card__wrapper
          .card__title {{ items.title}}
          .card__footer
            a(href="#").card__link.card__category
              .card__icon
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
