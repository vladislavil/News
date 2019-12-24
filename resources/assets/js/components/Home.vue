<template lang="pug">
  section.home
     header.home__header
        Header
     section.home__slider
        Slider
     section.home__content
        .container
           .home__wrapper
              section.home__posts
                posts
              section.home__sidebar
                .home__sidebar-wrapper(:class="{fixed: isFixed}")
                   popular
                   login
     //section.home__login
       .container


</template>

<script>
   import './index.sass';
   import Login from "../components/login/login";
   import Header from "../components/header/header";
   import Slider from "../components/slider/slider";
   import Popular from "../components/popular/popular";
   import Posts from "../components/posts/posts";

   export default {
      components: { Header, Slider, Popular, Login, Posts},
      data() {
         return {
            isFixed: false
         }
      },
      methods: {
       handleScroll: function (evt, el) {
         let sidebar = document.querySelector(".home__sidebar");
         let header = document.querySelector(".home__header");
         let header_height = header.offsetHeight;
         let slider = document.querySelector(".home__slider");
         let first_child = sidebar.firstChild;
         let slider_height = slider.offsetHeight;
         console.log(window.scrollY);

         if(window.scrollY > (slider_height + header_height)) {
           this.isFixed = true;

         }
         else {
           this.isFixed = false;
         }
       }
     }
   }
</script>
