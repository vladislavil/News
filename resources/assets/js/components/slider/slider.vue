<template lang="pug">
  .slider
    .slider__content
      swiper(:options="swiperOption" ref="mySwiper")
        swiper-slide(v-for="(item, index) in items" :key="index")
          Card(:items="item")

</template>

<script>

  import 'swiper/dist/css/swiper.css';
  import Card from "../card/card";
  import { swiper, swiperSlide } from 'vue-awesome-swiper';

  import './index.sass';

  export default {
    components: {
      swiper,
      swiperSlide,
      Card
    },
    data() {
      return {
        items: [
          {id: "1", title: "title1", category: "category1"},
          {id: "2", title: "title2", category: "category2"},
          {id: "3", title: "title3", category: "category3"},
          {id: "4", title: "title4", category: "category4"},
          {id: "5", title: "title5", category: "category5"},
          {id: "6", title: "title6", category: "category6"},
          {id: "7", title: "title7", category: "category7"},
          {id: "8", title: "title8", category: "category8"},
          {id: "9", title: "title9", category: "category9"},
          {id: "10", title: "title10", category: "category10"},
          {id: "11", title: "title11", category: "category11"}
        ],
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          speed: 1000,
          autoplay: true,
          effect: "fade",
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev'
          // },
          loop: true,
          //allowTouchMove: false
        },
        swiperSlides: [10]
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
