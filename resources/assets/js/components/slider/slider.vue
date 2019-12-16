<template lang="pug">
  .slider
    .slider__content
      swiper(:options="swiperOption" ref="mySwiper")
        swiper-slide
          div Slide1
        swiper-slide
          div Slide2
        swiper-slide
          div Slide3

</template>

<script>

  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  import './index.sass';

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          speed: 1000,
          autoplay: true,
          effect: "fade",
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop: true,
          allowTouchMove: false
        },
        swiperSlides: [1, 2, 3]
      }
    },
    mounted() {
      setInterval(() => {
        console.log('simulate async data')
        if (this.swiperSlides.length < 10) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000)
    }
  }
</script>
