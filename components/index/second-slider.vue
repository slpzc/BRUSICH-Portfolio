<template>
  <swiper class="second__carousel" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(house, index) in houses" :key="index">
      <img :src="house.imgs[0]" alt="">
      <div class="content">
        <p class="card__title"> {{ house.title }} </p>
        <ul>
          <li v-for="characteristic in house.characteristic">{{ characteristic.title }}: <span>{{ characteristic.value }}</span></li>
        </ul>
        <p class="card__price">Цена от: <span> {{ house.price }}₽ </span></p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'secondSlider',
  props: {
    houses: {
      type: Array
    },
  },
  data () {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 'auto'
      },
      // houses: [
      //   {
      //     img: 'https://i.imgur.com/zdir9rq.png',
      //     name: 'Дома из бруса',
      //     prefix: 'ДБ-1',
      //     price: '250 000',
      //     settings: {
      //       area: '72.3м',
      //       size: '7x7',
      //       rooms: '4',
      //       floors: '1'
      //     }
      //   },
      //   {
      //     img: 'https://i.imgur.com/zdir9rq.png',
      //     name: 'Дома из бруса',
      //     prefix: 'ДБ-1',
      //     price: '250 000',
      //     settings: {
      //       area: '72.3м',
      //       size: '7x7',
      //       rooms: '4',
      //       floors: '1'
      //     }
      //   },
      //   {
      //     img: 'https://i.imgur.com/zdir9rq.png',
      //     name: 'Дома из бруса',
      //     prefix: 'ДБ-1',
      //     price: '250 000',
      //     settings: {
      //       area: '72.3м',
      //       size: '7x7',
      //       rooms: '4',
      //       floors: '1'
      //     }
      //   },
      //   {
      //     img: 'https://i.imgur.com/zdir9rq.png',
      //     name: 'Дома из бруса',
      //     prefix: 'ДБ-1',
      //     price: '250 000',
      //     settings: {
      //       area: '72.3м',
      //       size: '7x7',
      //       rooms: '4',
      //       floors: '1'
      //     }
      //   }
      // ]
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container{
  margin-top: 20px;
  min-height: 255px;
}
.swiper-slide{
  max-width: 198px;
  width: 100% !important;
  background-color: #F8F8F8;
  border-radius:  4.59397px;;
  img{
    border-radius:  4.59397px 4.59397px 0 0;
    width: 198px;
    height: 127.85px;
  }
}
.content{
  margin-left: 10px;
  padding-bottom: 19px;
  .card__title{
   padding-top: 11px;
    font-weight: 500;
    font-size: 11.9443px;
    line-height: 138.5%;
    color: #333333;
}
  ul{
    padding-top: 11px;
    li{
      font-weight: 500;
      font-size: 8.26914px;
      line-height: 138.5%;
      color: rgba(51, 51, 51, 0.5);
      span{
        color: #333333;
      }
    }
  }
  .card__price{
    padding-top: 11px;
    font-weight: 400;
    font-size: 9.18793px;
    line-height: 138.5%;
    color: #333333;
    span{
      color: rgba(51, 51, 51, 0.5);
    }
  }
}

</style>
