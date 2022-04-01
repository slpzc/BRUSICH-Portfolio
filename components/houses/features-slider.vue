<template>
  <swiper class="root" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in features" :key="index">
      <img :src="item.img">
      <p> {{ item.title }} </p>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'features-slider',
  data () {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 15,
        slidesPerView: 'auto'
      },
      features: [
        {
          title: 'Бесплатная доставка',
          img: 'https://i.imgur.com/tyvLrsO.png'
        },
        {
          title: 'Металлическая дверь в подарок',
          img: 'https://i.imgur.com/bq6c1VU.png'
        },
        {
          title: '“Теплый угол” бесплатно',
          img: 'https://i.imgur.com/aH7kcT5.png'
        },
        {
          title: 'Чистовые полы из сухой доски 36мм',
          img: 'https://i.imgur.com/FdLh92i.png'
        },
        {
          title: 'Монтаж роек в дверные и оконные проемы',
          img: 'https://i.imgur.com/vxd9CJS.png'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  margin-top: 20px;
  width: 128px !important;
  height: 180px !important;
  position: relative;
  transition: opacity .2s ease;
  text-align: center;
  p{
    padding-top: 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
  }
}
</style>
