<template>
  <div id="root">
    <transition mode="out-in" name="slide-fade">
      <modal-component @close="closeModal()" v-if="modal" :src="modal.img" />
    </transition>
    <main>
      <section class="reviews">
        <div class="global-wrapper">
          <b class="block-title">Отзывы</b>
          <div class="review-cards">
              <div class="review-card" v-for="(item, index) in reviews" :key="index">
                <div class="inner">
                  <div class="top-info">
                    <img src="https://i.imgur.com/zmYmivF.png">
                    <div class="name__date">
                      <b>{{ item.name }}</b>
                      <p><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 1H8V0.5C8 0.225 7.775 0 7.5 0C7.225 0 7 0.225 7 0.5V1H3V0.5C3 0.225 2.775 0 2.5 0C2.225 0 2 0.225 2 0.5V1H1.5C0.945 1 0.505 1.45 0.505 2L0.5 9C0.5 9.55 0.945 10 1.5 10H8.5C9.05 10 9.5 9.55 9.5 9V2C9.5 1.45 9.05 1 8.5 1ZM8.5 8.5C8.5 8.775 8.275 9 8 9H2C1.725 9 1.5 8.775 1.5 8.5V3.5H8.5V8.5ZM2.5 4.5H3.5V5.5H2.5V4.5ZM4.5 4.5H5.5V5.5H4.5V4.5ZM6.5 4.5H7.5V5.5H6.5V4.5Z" fill="#2CC37C"/>
                      </svg>
                        {{ item.date }}</p>
                    </div>
                  </div>
                  <div class="building-info">
                    <p>Постройка: <span>{{ item.object }}</span></p>
                    <p> Район: <span>{{ item.address }}</span> </p>
                  </div>
                  <div class="comment">
                    <p>
                      {{ item.review }}
                    </p>
                  </div>
                </div>
                <customized-button @click.native="openOriginal(item)" :background="'black'" :color="'white'" :padding="'17px 0'">Посмотреть оригинал</customized-button>
              </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import CustomizedButton from '../components/Button'
import ModalComponent from '../components/reviews/modal'
import housesConfig from '~/assets/config/houses';
import requestData from '~/assets/config/requestData';
import getImages from '@/assets/mixins/getImages.js';
export default {
  name: 'reviewsPage',
  components: { ModalComponent, CustomizedButton },
  mixins: [getImages],
  fetchOnServer: true,
  data () {
    return {
      reviews: [
        {
          name: 'Иван Иванов',
          date: '16 сентября 2017',
          content: {
            building: 'Баня из бруса 6x6',
            area: 'Чеховский район, СНТ Дубна',
            comment: 'Спасибо большое за нашу баньку! Заказывали проект «Хильда» и уже вовсю ей пользуемся. Ребята поработали на совесть – качество сруба, отделки – все на высоте. Нам не пришлось искать отделочников, так как заказывали строительство «под ключ» - никаких хлопот. Приятно, что есть такие профессионалы. Удачи вам, ребята!',
            reviewDocument: 'https://i.imgur.com/71u9Wdq.png'
          }
        },
        {
          name: 'Иван Иванов',
          date: '16 сентября 2017',
          content: {
            building: 'Баня из бруса 6x6',
            area: 'Чеховский район, СНТ Дубна',
            comment: 'Спасибо большое за нашу баньку! Заказывали проект «Хильда» и уже вовсю ей пользуемся. Ребята поработали на совесть – качество сруба, отделки – все на высоте. Нам не пришлось искать отделочников, так как заказывали строительство «под ключ» - никаких хлопот. Приятно, что есть такие профессионалы. Удачи вам, ребята!',
            reviewDocument: 'https://i.imgur.com/71u9Wdq.png'
          }
        },
        {
          name: 'Иван Иванов',
          date: '16 сентября 2017',
          content: {
            building: 'Баня из бруса 6x6',
            area: 'Чеховский район, СНТ Дубна',
            comment: 'Спасибо большое за нашу баньку! Заказывали проект «Хильда» и уже вовсю ей пользуемся. Ребята поработали на совесть – качество сруба, отделки – все на высоте. Нам не пришлось искать отделочников, так как заказывали строительство «под ключ» - никаких хлопот. Приятно, что есть такие профессионалы. Удачи вам, ребята!',
            reviewDocument: 'https://i.imgur.com/71u9Wdq.png'
          }
        },
        {
          name: 'Иван Иванов',
          date: '16 сентября 2017',
          content: {
            building: 'Баня из бруса 6x6',
            area: 'Чеховский район, СНТ Дубна',
            comment: 'Спасибо большое за нашу баньку! Заказывали проект «Хильда» и уже вовсю ей пользуемся. Ребята поработали на совесть – качество сруба, отделки – все на высоте. Нам не пришлось искать отделочников, так как заказывали строительство «под ключ» - никаких хлопот. Приятно, что есть такие профессионалы. Удачи вам, ребята!',
            reviewDocument: 'https://i.imgur.com/71u9Wdq.png'
          }
        },
        {
          name: 'Иван Иванов',
          date: '16 сентября 2017',
          content: {
            building: 'Баня из бруса 6x6',
            area: 'Чеховский район, СНТ Дубна',
            comment: 'Спасибо большое за нашу баньку! Заказывали проект «Хильда» и уже вовсю ей пользуемся. Ребята поработали на совесть – качество сруба, отделки – все на высоте. Нам не пришлось искать отделочников, так как заказывали строительство «под ключ» - никаких хлопот. Приятно, что есть такие профессионалы. Удачи вам, ребята!',
            reviewDocument: 'https://i.imgur.com/71u9Wdq.png'
          }
        },
        {
          name: 'Иван Иванов',
          date: '16 сентября 2017',
          content: {
            building: 'Баня из бруса 6x6',
            area: 'Чеховский район, СНТ Дубна',
            comment: 'Спасибо большое за нашу баньку! Заказывали проект «Хильда» и уже вовсю ей пользуемся. Ребята поработали на совесть – качество сруба, отделки – все на высоте. Нам не пришлось искать отделочников, так как заказывали строительство «под ключ» - никаких хлопот. Приятно, что есть такие профессионалы. Удачи вам, ребята!',
            reviewDocument: 'https://i.imgur.com/71u9Wdq.png'
          }
        }
      ],
      modal: false
    }
  },
  async fetch() {
    const data = await housesConfig.reviews.createRequest({
      asynchronous: true,
      fields: requestData.reviews.fields,
      populate: requestData.reviews.populate,
    });

    for (const el of data) {
      el.img = this.getImages([el.img.data], 'large');
    }

    this.reviews = data;
  },
  methods: {
    openOriginal (item) {
      this.modal = item
      disablePageScroll()
    },
    closeModal () {
      this.modal = false
      enablePageScroll()
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../static/scss/reviews';
.slide-fade-leave-active, .slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>
