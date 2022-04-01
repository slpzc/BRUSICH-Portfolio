<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(house, index) in houses" :key="index">
      <img :src="require(`../../static/scss/index/${house.img}`)" alt="">
      <p> {{ house.name }} </p>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'IndexSlider',
  data () {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 15,
        slidesPerView: 'auto'
      },
      houses: [
        {
          img: 'brus.svg',
          name: 'Дома из бруса'
        },
        {
          img: 'usadka.svg',
          name: 'Дома под усадку'
        },
        {
          img: 'karkas.svg',
          name: 'Каркасные дома'
        },
        {
          img: 'karkas.svg',
          name: 'Каркасные дома'
        },
        {
          img: 'karkas.svg',
          name: 'Каркасные дома'
        },
        {
          img: 'karkas.svg',
          name: 'Каркасные дома'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.swiper-slide { width: 127px !important; }
  img{
    border-radius: 4px;
  }
  p{
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #333333;
  }
</style>
