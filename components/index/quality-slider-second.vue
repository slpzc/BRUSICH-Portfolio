<template>
  <swiper class="carousel" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in quality" :key="index">
      <div class="content">
        <b class="card__title"> {{ item.name }} </b>
        <p class="card__description">  {{ item.description }}  </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'qualitySliderSecond',
  data () {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 'auto'
      },
      quality: [
        {
          name: 'Работаем без предоплаты',
          description: 'Аванс — после доставки материалов остаток – после сдачи'
        },
        {
          name: '12 лет на рынке',
          description: 'Настоящая вологодская хвойная древесина. Гарантия - 12 месяцев'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel{
  margin-top: 20px;
}
.swiper-slide{
  max-width: 247px;
  width: 100% !important;
  display: flex;
  background-color: #F8F8F8;
  border-radius: 6.65768px;
  .content{
    padding: 17px 16px 20px 15px;
    b{
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #333333;
    }
    p{
      padding-top: 10px;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: rgba(51, 51, 51, 0.5);
    }
  }
}
</style>
