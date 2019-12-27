<template lang="pug">
  section.home
     header.home__header
        Header
     section.home__slider
        Slider
     section.home__content
        .container
         a(id="auth" @click="login") Войти
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
   import axios from "axios";
   import Login from "../components/login/login";
   import Header from "../components/header/header";
   import Slider from "../components/slider/slider";
   import Popular from "../components/popular/popular";
   import Posts from "../components/posts/posts";

   export default {
      components: { Header, Slider, Popular, Login, Posts},
      data() {
         return {
            info: null,
            isFixed: false
         }
      },
     mounted() {

       VK.UI.button('auth');

       // https://oauth.vk.com/authorize?client_id=7261107&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.52 - авторизация
       // let response = fetch('http://cors-anywhere.herokuapp.com/https://api.vk.com/method/gorups.get?user_id=210393531&access_token=a2d03d55a2d03d55a2d03d5501a2bef6e6aa2d0a2d03d55fcd4a66f04556438a0d524bb&v=5.61')
       //   .then(response => (this.info = response.json()))
       //   .then(result => (this.info = result))
       //   .catch(error => {
       //       console.log(error);
       //   });
     },
      computed: {
        getInfo: function() {
          VK.Auth.login(function(response) {
            if (response.session) {
              return response.session.user.id;
            } else {
              return "Пльзователь не авторизован";
            }
          });
        }
      },
      methods: {
       login() {
         document.querySelector('#auth').onclick = function(event){
           event.preventDefault();
           VK.Auth.login(null, VK.access.FRIENDS);
         };
       },
     }
   }
</script>
