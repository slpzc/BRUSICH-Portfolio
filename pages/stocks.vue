<template>
  <div class="stocks">
    <!-- <mainSlide /> -->

    <div class="global__wrapper flex-direction">
      <h2 class="block__title">
        Акции
      </h2>

      <div class="stocks-card">
        <div
          v-for="(card, index) in stocksCard"
          :key="index"
          class="stocks-card-item"
        >
          <div class="stocks-card-item-header">
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
          </div>

          <div class="stocks-card-item-circle">
            <svg
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.2998 4.7H6.88481L4.44481 7.14C4.2498 7.335 4.2498 7.655 4.44481 7.85C4.63981 8.045 4.9548 8.045 5.14981 7.85L8.44481 4.555C8.63981 4.36 8.63981 4.045 8.44481 3.85L5.15481 0.549998C4.95981 0.354998 4.64481 0.354998 4.44981 0.549998C4.25481 0.744998 4.25481 1.06 4.44981 1.255L6.88481 3.7H1.2998C1.0248 3.7 0.799805 3.925 0.799805 4.2C0.799805 4.475 1.0248 4.7 1.2998 4.7Z"
                fill="#3C7E93"
              />
            </svg>
          </div>
        </div>
      </div>

      <question />
    </div>
  </div>
</template>

<script>
import question from '../components/questionComponent.vue'
export default {
  name: 'StocksComponent',
  components: {
    question
  },
  data () {
    return {
      stocksCard: [
        {
          title: 'Бесплатная доставка',
          description:
            'В радиусе 500 км от места нашего производства (г. Пестово)'
        },
        {
          title: 'Бесплатная доставка',
          description:
            'В радиусе 500 км от места нашего производства (г. Пестово)'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.global__wrapper{
  max-width: 92vw;
  width: 100%;
  margin: 0 auto;
  .block-title{
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 120%;
    color: #333333;
  }
  .block-subtitle{
    padding-top: 10px;
    font-size: 13px;
    line-height: 138.5%;
    color: #6F6F6F;
  }
}
.flex-direction {
  flex-direction: column;
}

.stocks {
&-card {
  margin-top: 20px;
  &-item {
    width: 345px;
    height: 144px;
    background: #7acee9;
    border-radius: 10px;
    position: relative;
    margin-bottom: 40px;
    &-circle {
      position: absolute;
      right: 12px;
      border-radius: 50%;
      background: white;
      top: 20px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-header {
      display: flex;
      width: 208px;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding-left: 16px;
      h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #3c7e93;
        margin-bottom: 9px;
      }
      p {
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #5296ac;
      }
    }
    &::before {
      content: "";
      position: absolute;
      height: 144px;
      background: url("https://i.imgur.com/ax4vluQ.png"), no-repeat;
      background-repeat: no-repeat;
      right: 0;
      width: 100px;
      top: 42px;
      bottom: 0;
      margin: auto;
    }
  }
}
}
</style>
