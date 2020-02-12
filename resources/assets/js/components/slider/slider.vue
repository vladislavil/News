<template lang="pug">
  .slider
    .container
      .slider__content
        swiper(:options="swiperOption" )
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
          slidesPerGroup: 1,
          spaceBetween: 30,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          // effect: "fade",
          // loop: true,
          // loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          //allowTouchMove: false
        },
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
  }
</script>
