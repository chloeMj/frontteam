<template>
  <div class="container home">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(img, idx) in images" :key="idx">
        <img :src="img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'homeComp',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      images: [require('../assets/images/dummy.png'), require('../assets/images/dummy.png')],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
}
</script>