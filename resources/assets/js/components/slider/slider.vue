<template lang="pug">
  .slider
    .container
      .slider__content
        swiper(:options="swiperOption" ref="mySwiper")
          swiper-slide(v-for="(item, index) in itemsList" :key="index")
            .slider__card
              Card(:photo="item.photo")
          .swiper-pagination(slot="pagination")

</template>

<script>

  import 'swiper/dist/css/swiper.css';
  import Card from "../card/card";
  import { swiper, swiperSlide } from 'vue-awesome-swiper';

  import './index.sass';

  export default {
    props: ['items'],
    components: {
      swiper,
      swiperSlide,
      Card
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 30,
          speed: 1000,
          autoplay: true,
          // effect: "fade",
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          loop: true,
          //allowTouchMove: false
        },
        swiperSlides: [10]
      }
    },
    computed: {
      itemsList() {
        let buf = [];
        this.items.map((elem) => {
          if(buf.length <= 9) {
            buf.push(elem);
          }
        });
        return buf;
      }
    },
    mounted() {
      setInterval(() => {
        console.log('simulate async data');
        if (this.swiperSlides.length < 10) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000);
    }
  }
</script>
