<template>
  <swiper class="root" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in slides" :key="index">
      <img :src="item">
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'taxing-slider',
  data () {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 'auto'
      },
      slides: ['https://i.imgur.com/Ttu9NLr.png', 'https://i.imgur.com/Ttu9NLr.png', 'https://i.imgur.com/Ttu9NLr.png', 'https://i.imgur.com/Ttu9NLr.png']
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  margin-top: 20px;
  width: 345px !important;
}
</style>
