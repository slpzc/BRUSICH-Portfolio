<template>
  <swiper class="carousel" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in reviews" :key="index">
      <div class="content">
        <b class="card__title"> {{ item.name }} </b>
        <p class="card__description">  {{ item.review }}  </p>
      </div>
      <button><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.89978 3.69141L8.84405 4.7497L13.022 8.94535H3.90985V10.4465H13.022L8.84405 14.6421L9.89978 15.7004L15.8897 9.69591L9.89978 3.69141Z" fill="white"/>
      </svg>
      </button>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'reviewsSlider',
  data () {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 'auto'
      },
      reviews: [
        {
          name: 'Иван Иванов',
          review: 'Если не хочется далеко ехать - почитайте отзывы. Мы честно поработали и получили заслуженные благодарности. Мы честно поработали и получили заслуженные благодарности.\n'
        },
        {
          name: 'Иван Иванов',
          review: 'Если не хочется далеко ехать - почитайте отзывы. Мы честно поработали и получили заслуженные благодарности. Мы честно поработали и получили заслуженные благодарности.\n'
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
  align-items: flex-end;
  justify-content: center;
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
  button{
    background-color: #2CC37C;
    min-height: 59px;
    min-width: 49px;
    padding: 14px 0 0 21px;
    outline: none;
    border: none;
    border-radius: 100% 0 0 0;
    display: flex;
    align-items: center
  }
}
</style>
