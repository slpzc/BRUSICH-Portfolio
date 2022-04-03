<template>
  <div id="index">
    <header/>
    <main>
      <section class="first__carousel">
        <div class="global-wrapper">
          <client-only>
            <other-categories-slider></other-categories-slider>
          </client-only>
        </div>
      </section>
      <section class="popular__project">
        <div class="global-wrapper">
          <b class="block-title">Популярные проекты</b>
          <p class="block-subtitle">Опираясь на многолетний опыт, мы сделали подборку самых востребованных проектов.</p>
          <div class="filter">
            <select-list @actuallyElement="selectHouseType" :selectList="$options.houseTypes"/>
            <CustomizedButton :padding="'12px 17px'"> Смотреть все </CustomizedButton>
          </div>
          <client-only>
            <SecondSlider :houses="popularHouses"></SecondSlider>
          </client-only>
        </div>
      </section>
      <section class="calculator__section">
        <div class="global-wrapper">
          <div class="calculator">
            <div class="text__content">
              <b class="block-title">Расширенный калькулятор</b>
              <p class="block-subtitle">Поможем вам с выбором дома вашей мечты
                Сделаем расчет в течение 1 дня</p>
            </div>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill="white"/>
              <path d="M11.3 15.6999H16.885L14.445 18.1399C14.25 18.3349 14.25 18.6549 14.445 18.8499C14.64 19.0449 14.955 19.0449 15.15 18.8499L18.4451 15.5549C18.6401 15.3599 18.6401 15.0449 18.4451 14.8499L15.155 11.5499C14.96 11.3549 14.645 11.3549 14.45 11.5499C14.255 11.7449 14.255 12.0599 14.45 12.2549L16.885 14.6999H11.3C11.025 14.6999 10.8 14.9249 10.8 15.1999C10.8 15.4749 11.025 15.6999 11.3 15.6999Z" fill="#4F8784"/>
            </svg>
          </div>
          <button>Расширенный калькулятор</button>
        </div>
      </section>
      <section class="technology__of__building">
        <div class="global-wrapper">
          <b class="block-title">Технологии строительства</b>
          <p class="block-subtitle">Предлагаем большой выбор вариантов проектов из дерева. Это брусовые дома и каркасники размером от 37 до 250 м2 — теплые зимние коттеджи, дачные и садовые домики, гостевые дома, бани и банные комплексы с жилым вторым этажом.</p>
          <client-only>
            <third-slider> </third-slider>
          </client-only>
        </div>
      </section>
      <section class="steps__of__job">
        <div class="global-wrapper">
          <b class="block-title">Этапы работ</b>
          <div class="step__card" v-for="(step, index) in stepsOfjob" :key="index">
            <p class="index"> 0{{ index+1 }}</p>
            <div class="text__content">
              <b>{{ step.name }}</b>
              <p> {{ step.description }} </p>
            </div>
           <div class="image">
             <img :src="step.img">
           </div>
          </div>
        </div>
      </section>
      <section class="quality__section">
        <div class="global-wrapper">
          <b class="block-title">Отвечаем за качество</b>
          <p class="block-subtitle">Наша готовность сделать любой индивидуальный проект помогает людям каждый день воплощать свои мечты о счастливой жизни.</p>
          <div class="sliders">
            <client-only>
              <quality-slider-one></quality-slider-one>
              <quality-slider-second></quality-slider-second>
            </client-only>
          </div>
        </div>
      </section>
      <section class="regions__section">
        <div class="global-wrapper">
          <b class="block-title">Большой охват регионов</b>
          <p class="block-subtitle">Заказать строительство можно в Московской, Ленинградской, Новгородской, Ярославской, Калужской, Псковской, Владимирской, Вологодской, Тверской областях и также во многих городах: Москве, Подмосковье, СПБ, Великом Новгороде, Ярославле, Калуге, Вологде, Пестово, Владимире.</p>
          <visit-modal></visit-modal>
        </div>
      </section>
      <section class="reviews__section">
        <div class="global-wrapper">
        <b class="block-title">Отзывы и обзоры</b>
          <client-only>
            <reviews-slider :reviews="reviews"></reviews-slider>
          </client-only>
          <customized-button  :color="'#333333'" :background="'#F8F8F8'" :padding="'15px 0'" >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.66 2.66634C14.66 1.93301 14.0667 1.33301 13.3334 1.33301H2.66671C1.93337 1.33301 1.33337 1.93301 1.33337 2.66634V10.6663C1.33337 11.3997 1.93337 11.9997 2.66671 11.9997H12L14.6667 14.6663L14.66 2.66634ZM11.3334 9.33301H4.66671C4.30004 9.33301 4.00004 9.03301 4.00004 8.66634C4.00004 8.29967 4.30004 7.99967 4.66671 7.99967H11.3334C11.7 7.99967 12 8.29967 12 8.66634C12 9.03301 11.7 9.33301 11.3334 9.33301ZM11.3334 7.33301H4.66671C4.30004 7.33301 4.00004 7.03301 4.00004 6.66634C4.00004 6.29967 4.30004 5.99967 4.66671 5.99967H11.3334C11.7 5.99967 12 6.29967 12 6.66634C12 7.03301 11.7 7.33301 11.3334 7.33301ZM11.3334 5.33301H4.66671C4.30004 5.33301 4.00004 5.03301 4.00004 4.66634C4.00004 4.29967 4.30004 3.99967 4.66671 3.99967H11.3334C11.7 3.99967 12 4.29967 12 4.66634C12 5.03301 11.7 5.33301 11.3334 5.33301Z" fill="#2CC37C"/>
          </svg>
           Посмотреть все отзывы</customized-button>
        </div>
      </section>
      <client-only>
        <index-map-works/>
      </client-only>
    </main>
  </div>
</template>

<script>
import getImages from '@/assets/mixins/getImages.js';
import housesConfig from '@/assets/config/houses';
import requestData from 'assets/config/requestData'

export default {
  name: 'IndexPage',
  DEBOUNCE_TIME: 2000,
  mixins: [getImages],
  components: {
    OtherCategoriesSlider: () => import('../components/other-categories-slider'),
    ReviewsSlider: () => import('../components/index/reviews-slider'),
    VisitModal: () => import('../components/index/visit-modal'),
    QualitySliderSecond: () => import('../components/index/quality-slider-second'),
    QualitySliderOne: () => import('../components/index/quality-slider-one'),
    ThirdSlider: () => import('../components/index/third-slider'),
    CustomizedButton: () => import('../components/Button'),
    SecondSlider: () => import('../components/index/second-slider')
  },
  houseTypes: [
    {
      title: 'Дома из бруса',
      type: 'doma-iz-brusa',
    },
    {
      title: 'Каркасные дома',
      type: 'karkasnie-doma',
    },
    { title: 'барнхаусы', type: 'barnhausy' },
    { title: 'дома под усадку', type: 'doma-pod-usadku' },
    { title: 'бани из бруса', type: 'bani-iz-brusa' },
  ],
  data () {
    return {
      debounce: null,
      coords: [
        54.82896654088406,
        39.83189382275390
      ],
      stepsOfjob: [
        {
          name: 'Согласовываем проект',
          description: 'Оставьте нам заявку, или звоните 8(800)555-35-35',
          img: 'https://i.imgur.com/TvkeaIF.png'
        },
        {
          name: 'Доставляем материалы',
          description: 'Доставка и выгрузка материалов в назначенный день',
          img: 'https://i.imgur.com/IDdnWDR.png'
        },
        {
          name: 'Подписываем договор',
          description: 'Прораб предоставит вам оригинал договора. Вы оплачиваете 70% стоимости',
          img: 'https://i.imgur.com/Y79s9Bv.png'
        },
        {
          name: 'Строим объект',
          description: 'Производим полный цикл строительных и отделочных работ',
          img: 'https://i.imgur.com/YvcK9Yx.png'
        },
        {
          name: 'Сдаем объект',
          description: 'Вы принимаете работу и подписываете акт сдачи-приемки',
          img: 'https://i.imgur.com/xCLGUcJ.png'
        },
        {
          name: 'Даем гарантии',
          description: 'Даем официальную гарантию на все виды предоставленных услуг',
          img: 'https://i.imgur.com/kZtRgb0.png'
        }
      ],
      selectedHouseType: null,
      popularHouses: [],
      reviews: null,
    }
  },
  async fetch() {
    console.log(this.$options.houseTypes[0].type)
    this.selectHouseType(this.$options.houseTypes[0], true);
    await this.fetchPopular();

      const data = await housesConfig.reviews.createRequest({
        asynchronous: true,
        fields: requestData.reviews.fields,
        populate: requestData.reviews.populate,
      });

      for (const el of data) {
        el.img = this.getImages([el.img.data], 'large');
      }
      console.log('oda')
      this.reviews = data;
  },
  methods: {
    onClick (e) {
      this.coords = e.get('coords')
    },
    selectHouseType({ type }, init) {
      if (this.selectedHouseType === type || this.debounce != null) return;
      console.log()
      this.selectedHouseType = type;
      console.log(this.selectedHouseType)
      if (!init) {
        this.debounce = setTimeout(() => {
          clearTimeout(this.debounce);
          this.debounce = null;
        }, this.$options.DEBOUNCE_TIME);

        this.fetchPopular();
      }
    },
    fetchPopular() {
      this.popularHouses = [];

      return new Promise((resolve) => {
        housesConfig.houses[this.selectedHouseType].createRequest({
          callback: (data) => {
            const elements = [];

            for (const el of data) {
              const prices = [el.price_1, el.price_2, el.price_3];

              if (el.price_4 && el.price_5 && el.price_6) {
                prices.push(el.price_4);
                prices.push(el.price_5);
                prices.push(el.price_6);
              }

              elements.push({
                title: el.name_description,
                mark: el.name,
                characteristic: [
                  { title: 'Площадь', value: el.s },
                  { title: 'Размер', value: el.size },
                  { title: 'Комнат', value: el.rooms },
                  { title: 'Этажей', value: el.floor.data.attributes.floor },
                ],
                price: Math.min(...prices),
                imgs: this.getImages(el.imgs.data, 'large'),
              });
            }

            this.popularHouses = elements;
            resolve();
          },
          cache: true,
          filters: requestData.popular.filters,
          populate: requestData.popular.populate,
        });
      });
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../static/scss/index';
</style>
