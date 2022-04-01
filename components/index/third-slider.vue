<template>
  <swiper class="second__carousel" ref="mySwiper" :options="swiperOptions">
    <swiper-slide :style="{backgroundColor: technology.bgColor}" v-for="(technology, index) in houses" :key="index">
      <img :src="technology.img" alt="">
      <p> {{ technology.name }} </p>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'thirdSlider',
  data () {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 13,
        slidesPerView: 'auto'
      },
      houses: [
        {
          name: 'Материалы',
          bgColor: '#E6DBC0',
          img: 'https://i.imgur.com/WdfF8GK.png'
        },
        {
          name: 'Карта работ',
          bgColor: '#95DADA',
          img: 'https://i.imgur.com/dhhXfSI.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  img{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
  }
  p{
    z-index: 2;
    margin-bottom: 10px;
    margin-left: 10px;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
  }
  .swiper-slide{
    border-radius:  4.78px;
    max-width: 222px;
    width: 100% !important;
    min-height: 116px;
    display: flex;
    align-items: flex-end;
    position: relative;
    overflow: hidden;
    &::before{
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      bottom: 0;
      left: 0;
      z-index: 1;
      background: linear-gradient(0deg, rgba(8, 8, 8, 0.699657) -87.35%, rgba(0, 0, 0, 0.65) -87.35%, rgba(196, 196, 196, 0) 100%);
    }
  }
</style>
