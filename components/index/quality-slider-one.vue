<template>
  <swiper class="carousel" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in quality" :key="index">
      <img :src="item.img" alt="">
      <div class="content">
        <b class="card__title"> {{ item.name }} </b>
        <p class="card__description">  {{ item.description }}  </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'qualitySliderOne',
  data () {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 'auto'
      },
      quality: [
        {
          name: 'Опытные бригады',
          description: 'Опыт каждого мастера - от 7 лет. Раз в год всех отправляем на обучение',
          img: 'https://i.imgur.com/wvyXL51.png'
        },
        {
          name: 'Более 200 готовых решений',
          description: 'Опыт каждого мастера - от 7 лет. Раз в год всех отправляем на обучение',
          img: 'https://i.imgur.com/UtBxBfP.png'
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
  min-height: 252px;
  width: 100% !important;
  display: flex;
  background-color: #F8F8F8;
  border-radius: 6.65768px;
  img{
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .content{
    margin-left: 13px;
    margin-top: 13px;
    max-width: 198px;
    b{
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #333333;
    }
    p{
      padding-top: 6.5px;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: rgba(51, 51, 51, 0.5);
    }
  }
}
</style>
