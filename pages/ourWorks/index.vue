<template>
  <div class="index global-wrapper">
    <div class="index-header">
      <h2 class="house-header__item">Наши работы</h2>
      <questionAndAnswer
        style="margin-bottom: 35px; max-width: 100%; overflow: hidden"
        :work="ourWorks.nav"
      />
    </div>

    <div class="index-container">
        <div class="house-card">
            <div class="house-card-item">
                <ImageSwiper :imgs="house.imgs" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ourWorks: {
        selectedCategory: null,
        elements: [],
        houseData: {
            imgs: ['https://strapi.preprod.brusich.ru/uploads/small_3_a0d5f87851.jpg', 'https://strapi.preprod.brusich.ru/uploads/small_4_802f3fcc30.jpg', 'white']
        },
        nav: [
          { title: "Все объекты" },
          { title: "Дома из бруса" },
          { title: "Каркасные дома" },
          { title: "Бани" },
          { title: "Карта построек" },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.house-header__item {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #333333;
  margin-bottom: 15px;
}
</style>
