<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide @click.native="$emit('selectedSlide', house); routerPush(house)" v-for="(house, index) in houses" :key="index">
      <img :src="house.previewIMG">
      <p> {{ house.title }} </p>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'otherCategoriesSlider',
  data () {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 15,
        slidesPerView: 'auto'
      },
    }
  },
  methods: {
    routerPush (house) {
      if (!this.$route.name.includes(`category-houses/${house.name}`)) {
        this.$router.push(`/category-houses/${house.name}`)
      }
    }
  },
  computed: {
    houses () {
      return this.$store.state.houses
    }
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.swiper-slide { width: 270px !important; }
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
