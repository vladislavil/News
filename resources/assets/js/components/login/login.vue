<template lang="pug">
    .login
      .login__title Login
      .login__content
        form.login__form
          input(type="text" name="name" placeholder="Username").login__input
          input(type="text" name="password" placeholder="Password").login__input
          .login__form-wrapper
            button(type="submit" name="auth").login__submit Войти
            label.login__label Запомнить меня
              input(type="checkbox" name="remember").login__checkbox

</template>

<script>

  import './index.sass';
  //import { Validator } from 'vue-validate"

  export default {
    data() {
      return {

      }
    },
  }

</script>
