<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide
      v-for="(item, index) in work"
      :key="index"
      class="work-card"
      :class="{ active: actuallyElement === item.title }"
      @click.native="
        actuallyElement = item.title;
        sendScroll(item.title);
      "
    >
      <p class="text">
        {{ item.title }}
      </p>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "questionAndAnswer",
  props: {
    work: {
      type: Array,
      default: [
        "О доставке",
        "Этапы работы",
        "О гарантии",
        "О фундаменте",
        "О домах из бруса",
        "О каркасных домах",
        "О барях из бруса",
      ],
    },
  },
  data() {
    return {
      swiperOptions: {
        loop: false,
        spaceBetween: 10,
        slidesPerView: "auto",
      },
      actuallyElement: "О компании",
    };
  },
  methods: {
    sendScroll(item) {
      let clearTrim = item.replaceAll(/\s/g, "");
      this.$scrollTo("#" + clearTrim, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
.work-card {
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 32px;
  transition: all 0.2s ease;
  width: fit-content;
  padding: 6px 16px;
  .number {
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
  .text {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
  }
}
.active {
  background-color: #2cc37c;
  .number {
    background-color: #fff;
    color: #333333;
  }
  .text {
    color: white;
  }
}
</style>
