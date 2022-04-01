<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide class="work-card" :class="{ active: actuallyElement === item }" @click.native="actuallyElement = item; $emit('selectItem', item)"  v-for="(item, index) in work" :key="index">
      <p class="number">{{ index+1 }}</p>
      <p class="text"> {{ item }} </p>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'work-links',
  data () {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 'auto'
      },
      actuallyElement: 'Проект',
      work: ['Проект', 'Материал', 'Доставка', 'Выгрузка', 'Договор', 'Аванс', 'Работа', 'Сруб', 'Отделка', 'Сдача']
    }
  },
}
</script>

<style lang="scss" scoped>
.work-card{
  padding: 6px 22px 7px 7px;
  display: flex;
  align-items: center;
  max-width: 118px;
  background-color: #F8F8F8;
  border-radius: 32px;
  transition: all .2s ease;
  .number{
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    background-color: #fff;
    width: 23px;
    height: 23px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text{
    padding-left: 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
  }
}
.active{
  background-color: #2CC37C;
  .number{
    background-color: #fff;
    color: #333333;
  }
  .text{
    color: white;
  }
}
</style>
