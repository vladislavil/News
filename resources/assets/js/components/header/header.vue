<template lang="pug">
  .header
     .container
        .header__content
           .header__left
              a(href="#").header__logo
                 img(src="images/logo.png")
           .header__center
              ul.header__list
                 li.header__item
                    a(href="#").header__link
                       |Text
                 li.header__item
                    a(href="#" return="false").header__link
                       |Text
                 li.header__item
                    a(href="#" return="false").header__link
                       |Text
                 li.header__item
                    a(href="#" return="false").header__link
                       |Text

           .header__right
              .header__ads РЕКЛАМА
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
