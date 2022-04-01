<template>
  <swiper class="root" ref="mySwiper" :options="swiperOptions">
    <swiper-slide :class="{ selected: currentImage === index }"  @click.native="$emit('selectedSlide', index)" v-for="(image, index) in images" :key="index">
      <img :src="image">
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'images-slider',
  data () {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 15,
        slidesPerView: 'auto'
      },
    }
  },
  props: {
    images: {
      type: Array
    },
    currentImage: {
      default: 0
    }
  },
}
</script>

<style lang="scss" scoped>
.root{
  margin-top: 20px;
}
.swiper-slide {
  width: 64px !important;
  height: 56.11px !important;
  position: relative;
  opacity: .6;
  transition: opacity .2s ease;
  img{
    width: 64px !important;
    height: 56.11px !important;
    border-radius: 10px;
    object-fit: cover;
  }
}
.selected{
  opacity: 1;
}
</style>
