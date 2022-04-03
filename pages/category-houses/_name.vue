<template>
    <div id="other__categories">
      <main>
        <section class="filter__section">
          <div class="global-wrapper">
            <b class="block-title">{{ houses.title }}</b>
            <div class="filter">
              <client-only>
                <select-list @actuallyElement="priceFilter" :label="'По ценам'" :selectList="[{ title: 'Дешевле'}, {title:'Дороже'}]"/>
              </client-only>
            </div>
            <customized-button :padding="'9px 0'" :color="'#333333'" :background="'#F8F8F8'">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.65625 1.5375C0.71875 1.61875 4.24375 6.11875 4.24375 6.11875V9.875C4.24375 10.2188 4.525 10.5 4.875 10.5H6.13125C6.475 10.5 6.7625 10.2188 6.7625 9.875V6.1125C6.7625 6.1125 10.1938 1.725 10.3563 1.525C10.5188 1.325 10.5 1.125 10.5 1.125C10.5 0.78125 10.2188 0.5 9.86875 0.5H1.13125C0.75 0.5 0.5 0.8 0.5 1.125C0.5 1.25 0.5375 1.4 0.65625 1.5375Z"
                  fill="#2CC37C"
                />
              </svg>
              Фильтры по параметрам
            </customized-button>
            <div class="params__filter">
              <div class="size filter-inner">
                <b class="filter-title">По размеру</b>
                <div class="filters">
                  <client-only>
                    <checkbox-component
                      v-for="(size, index) in sizes"
                      :key="index"
                      :text="size"
                      :width="'57px'"
                      @click.native="setFilterSettings('size', size)"
                      :class="{ active: filter.size.includes(size) }"
                    />
                  </client-only>
                </div>
              </div>
              <div class="floor filter-inner">
                <b class="filter-title">Этажность</b>
                <div class="filters">
                  <client-only>
                    <checkbox-component
                      v-for="(floor, index) in floors"
                      :key="index"
                      :width="'100px'"
                      :text="floor.name"
                      :class="{ active: filter.floors.includes(floor.value) }"
                      @click.native="setFilterSettings('floors', floor.value)"
                    />
                  </client-only>
                </div>
              </div>
              <div class="room filter-inner">
                <b class="filter-title">Комнаты</b>
                <div class="filters">
                  <client-only>
                    <checkbox-component
                      v-for="(room, index) in rooms"
                      :key="index"
                      :text="room"
                      :width="'30px'"
                      :class="{ active: filter.rooms.includes(room) }"
                      @click.native="setFilterSettings('rooms', room)"
                    />
                  </client-only>
                </div>
              </div>
              <div class="Ssize filter-inner">
                <b class="filter-title">Площадь</b>
                <div class="filters">
                  <client-only>
                    <checkbox-component
                      v-for="(Ssize, index) in Ssize"
                      :key="index"
                      :width="'100px'"
                      :text="Ssize.name"
                      :class="{ active: filter.Ssize.includes(Ssize.value) }"
                      @click.native="setFilterSettings('Ssize', Ssize.value)"
                    />
                  </client-only>
                </div>
              </div>
              <div class="construction filter-inner">
                <b class="filter-title">Конструкция</b>
                <div class="filters">
                  <client-only>
                    <checkbox-component
                      v-for="(construction, index) in constructions"
                      :key="index"
                      :text="construction"
                      :width="'117px'"
                      :class="{ active: filter.constructions.includes(construction) }"
                      @click.native="setFilterSettings('constructions', construction)"
                    />
                  </client-only>
                </div>
              </div>
            </div>
            <div class="price__filter">
              <b class="filter-title">Стоимость</b>
              <div class="from-to">
                <div class="from">
                  <p>от</p>
                  <div class="price-from">{{ filter.price[0] }}</div>
                </div>
                <div class="to">
                  <p>до</p>
                  <div class="price-to"> {{ filter.price[1] }}</div>
                </div>
              </div>
              <client-only>
                <VueSlider
                  ref="slider"
                  v-model="filter.price"
                  v-bind="options"
                ></VueSlider>
              </client-only>
              <customized-button
                :padding="'10px 0'"
                @click.native="setFilter()"
                :disabled="filters === 2 && filter.price[0] === 200000 && filter.price[1] === 3000000"
              >{{ !filters ? 'Выберите фильтр' : 'Показать' }}
              </customized-button>
              <customized-button
                :padding="'10px 0'"
                @click.native="resetFilter"
              >Сбросить
              </customized-button>
            </div>
          </div>
        </section>
        <section class="filtered__houses">
          <div class="global-wrapper">
            <client-only>
              <div class="house-card" v-for="(house, index) in filteredHouses" :key="index">
                <div class="image__content">
                  <p>{{ house.prefix }}</p>
                  <img :src="getImages(house.images)[0]" :alt="house.images[0]">
                </div>
                <div class="wrapper">
                  <b class="title">{{ house.name }}</b>
                  <div class="info__house">
                    <p>Площадь: <span> {{ house.Ssize }} </span></p>
                    <p>Размер: <span> {{ house.size }}</span></p>
                    <p>Комнат: <span> {{ house.rooms }} </span></p>
                    <p>Этажей: <span> {{ house.floors }}</span></p>
                  </div>
                  <div class="buttons">
                    <div class="price">от {{ house.price }}Р</div>
                    <button @click="$router.push(`/${$route.params.name}/${index+1}`)">Подробнее
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_355_2882)">
                          <path d="M6.94458 11.7688L10.2135 8.49991L6.94458 5.23102L6.94458 11.7688Z" fill="#333333"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_355_2882">
                            <rect width="15.6907"
                                  height="15.6907"
                                  fill="white"
                                  transform="translate(0.406738 16.3453) rotate(-90)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </client-only>
            <client-only>
              <div class="loading" v-show="!filteredHouses[0]">
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div>
            </client-only>
          </div>
        </section>
        <section class="full__calculator">
          <div class="global-wrapper">
            <div class="calculator">
              <div class="text-content"><b class="title">Расширенный калькулятор</b>
                <p>Поможем вам с выбором дома вашей мечты
                  Сделаем расчет в течение 1 дня</p></div>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="white"/>
                <path
                  d="M11.5 15.398H17.085L14.645 17.8958C14.45 18.0954 14.45 18.423 14.645 18.6226C14.84 18.8222 15.155 18.8222 15.35 18.6226L18.645 15.2496C18.84 15.0499 18.84 14.7275 18.645 14.5279L15.355 11.1497C15.16 10.9501 14.845 10.9501 14.65 11.1497C14.455 11.3493 14.455 11.6718 14.65 11.8714L17.085 14.3743H11.5C11.225 14.3743 11 14.6046 11 14.8862C11 15.1677 11.225 15.398 11.5 15.398Z"
                  fill="#4F8784"
                />
              </svg>
            </div>
            <customized-button :padding="'16px 0'" :background="'#F8F8F8'" :color="'#333333'">Расширенный калькулятор
            </customized-button>
          </div>
        </section>
        <section class="description">
          <div class="global-wrapper">
            <p>Компания ВудБрус занимается строительством деревянных домов в Москве и Московской области. В нашем каталоге
              представлены популярные проекты загородных коттеджей с различными вариантами планировки и отделки. В любой
              готовый проект наши специалисты бесплатно внесут необходимые правки или «с нуля» подготовят индивидуальный
              проект любой сложности.

              Строим зимние коттеджи и дачные дома из материалов собственного производства — профилированного бруса
              камерной сушки и пиломатериалов естественной влажности.</p>
          </div>
        </section>
        <section class="features">
          <div class="global-wrapper">
            <b class="block-title">
              {{ houses.features.title }}
            </b>
            <div class="content">
              <client-only>
                <div class="features-card" v-for="(card, index) in houses.features.content" :key="index">
                  <div class="number">{{ index + 1 }}</div>
                  <div class="text">
                    <p><span>{{ card.title }}</span> {{ card.inner }}</p>
                  </div>
                </div>
              </client-only>
            </div>
          </div>
        </section>
        <section class="designer">
          <div class="global-wrapper">
            <b class="block-title">Вы - дизайнер!</b>
            <p class="block-subtitle">Количество элементов разной окраски и цветовых решений может немного отличаться от
              примера.</p>
          </div>
          <client-only>
            <houses-house-editor/>
          </client-only>
        </section>
        <client-only>
          <section class="steps__of__job">
            <div class="global-wrapper">
              <b class="block-title">Этапы работ</b>
              <client-only>
                <div class="step__card" v-for="(step, index) in stepsOfjob" :key="index">
                  <p class="index"> 0{{ index + 1 }}</p>
                  <div class="text__content">
                    <b>{{ step.name }}</b>
                    <p> {{ step.description }} </p>
                  </div>
                  <div class="image">
                    <img alt="step" :src="step.img">
                  </div>
                </div>
              </client-only>
            </div>
          </section>
        </client-only>
      </main>
    </div>
</template>
<script>
import housesConfig from '~/assets/config/houses';
import requestData from '~/assets/config/requestData';
import getImages from '@/assets/mixins/getImages.js';
import APIRequest from '@/assets/utils/APIRequest';

import { mapMutations } from 'vuex'
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'
import SelectList from '../../components/select-list'
import CustomizedButton from '../../components/Button'
import CheckboxComponent from '../../components/checkbox'

export default {
  name: 'dynamicCategories',
  mixins: [getImages],
  head () {
    return {
      title: this.houses.meta.title,
      meta: [
        {
          charset: 'utf-8',
          hid: this.houses.meta.keywords,
          name: this.houses.meta.keywords,
          content: this.houses.meta.content,
        }
      ],
      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }]
    }
  },
  components: {
    CheckboxComponent,
    CustomizedButton,
    SelectList,
    VueSlider
  },
  data () {
    return {
      options: {
        dotSize: 15,
        height: 6,
        contained: false,
        direction: 'ltr',
        data: null,
        min: 200000,
        max: 3000000,
        interval: 1,
        disabled: false,
        clickable: true,
        duration: 0.5,
        adsorb: false,
        lazy: false,
        tooltip: 'focus',
        tooltipPlacement: 'top',
        useKeyboard: false,
        enableCross: true,
        fixed: false,
        minRange: 0,
        maxRange: 0,
        order: true,
        marks: false,
        dotOptions: 0,
        process: true,
        dotStyle: 0,
        railStyle: 0,
        processStyle: 0,
        tooltipStyle: 0,
        stepStyle: 0,
        stepActiveStyle: 0,
        labelStyle: 0,
        labelActiveStyle: 0,
      },
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
      designerButtons: [
        {
          name: 'Крыша'
        },
        {
          name: 'Стены'
        },
        {
          name: 'Окна'
        },
        {
          name: 'Водосточка'
        },
        {
          name: 'Наличники'
        }
      ],
      sizes: ['6x6', '8x10', '8x8', '7x7', '7x12', '7x9', '7x8', '10x13', '9x9', '6x9', '6x7', '9x10', '8x9', '6x8', '11x12'],
      floors: [
        {
          name: '1 этаж',
          value: '1'
        },
        {
          name: '1 + мансарда',
          value: '1'
        },
        {
          name: '1.5 этажа',
          value: '1.5'
        },
        {
          name: '2 этажа',
          value: '2'
        }],
      rooms: ['1', '2', '3', '4', '5', '6', '7', '8'],
      Ssize: [
        {
          name: 'До 50 кв.м',
          value: '0-50'
        },
        {
          name: '50-100 кв.м',
          value: '50-100'
        },
        {
          name: '100-150 кв.м',
          value: '100-150'
        },
        {
          name: 'от 150 кв.м',
          value: '150-999'
        }],
      constructions: ['С балконом', 'С террасой', 'С верандой', 'С эркером', 'С санузлом'],
      filter: {
        size: [],
        Ssize: [],
        floors: [],
        rooms: [],
        constructions: [],
        price: [200000, 3000000],
      },
      filteredHouses: [],
      elements: [],
    }
  },
  async fetch() {
    const res = await this.buildElements(true)
    await this.processHousesRequest(res)
    this.filteredHouses = this.houses.houses
    this.priceFilter({ title: 'Дешевле' })
  },
  methods: {
    ...mapMutations({
      setHouses: 'setHouses'
    }),
    buildElements() {
        return new Promise((resolve) => {
          APIRequest.staticRequest({
            path: housesConfig.houses[this.category].path,
            callback: resolve,
            filterResponse: false,
            filters: { $and: [ {price_1: { $gte: 200000 }}, {price_1: { $lte: 3000000 } } ] },
            fields: requestData.houses.fields,
            populate: requestData.houses.populate,
            pagination: { ...requestData.houses.pagination, page: this.currentPage },
          });
        });
    },
    processHousesRequest(res) {
      if (!res.data.data.length) return;
      const pagination = res.data.meta.pagination;

      this.currentPage = pagination.page;
      this.pageCount = pagination.pageCount;

      const data = res.data.data.map((el) => ({
        prefix: el.attributes.name,
        name: el.attributes.name_description,
        price: el.attributes.price_1,
        size: el.attributes.size,
        Ssize: el.attributes.s,
        images: el.attributes.imgs.data,
        rooms: el.attributes.rooms.toString(),
        floors: el.attributes.floor.data.attributes.floor,
      }))
      this.setHouses({ data, category: this.category })
      this.elements = data;
      for (let i = 0; i < this.elements.length; i++) {
        if (this.elements[i].specificity) {
          this.elements[i].specificity = this.elements[i].specificity.data.map((el) => el.attributes.specificity);
        }

        if (this.elements[i].floor) {
          this.elements[i].floor = this.elements[i].floor.data.attributes.floor;
        }
      }

    },
    priceFilter (category) {
      // создаём копию, т.к мутировать напрямую со стэйтом запрещено
      const copy = [...this.houses.houses]
      // обрабатываем тип фильтра
      if (category.title === 'Дешевле') {
        this.filteredHouses = copy.sort((a, b) => a.price - b.price)
      } else if (category.title === 'Дороже') {
        this.filteredHouses = copy.sort((a, b) => b.price - a.price)
      }
    },
    setFilterSettings (array, item) {
      // Получение индекса элемента из массива
      const index = this.filter[array].indexOf(item)
      // Элемент есть ? пушим : удаляем
      index === -1 ? this.filter[array].push(item) : this.filter[array].splice(index, 1)
    },
    setFilter () {
      const checkAll = (name, val, ) => {
        const array = this.filter[name]
        for (let i = 0; i < array.length; i++) {
          // element: 50 - 100 val: 72.3
          const element = array[i]
          if (val >= Number(element.split('-')[0]) && val <= Number(element.split('-')[1])) {
            return true
          }
        }
      }
      const copy = [...this.houses.houses]
      const size = this.filter.size.length ? copy.filter(house => this.filter.size.includes(house.size))  : copy
      const Ssize = this.filter.Ssize.length ? size.filter(house => {
        return checkAll('Ssize', house.Ssize)
      })  : size
      const rooms = this.filter.rooms.length ? Ssize.filter(house => this.filter.rooms.includes(house.rooms))  : Ssize
      const floors = this.filter.floors.length ? rooms.filter(house => this.filter.floors.includes(house.floors))  : rooms
      const constructions = this.filter.constructions.length ? floors.filter(house => this.filter.constructions.includes(house.constructions))  : floors
      const price_final = this.filter.price[0] === 200000 && this.filter.price[1] === 3000000 ? constructions : constructions.filter(house => {
        const min = this.filter.price[0]
        const max = this.filter.price[1]
        return house.price >= min && max >= house.price
      })

      this.filteredHouses = []
      this.filteredHouses = price_final
    },
    resetFilter () {
      for (const key in this.filter) {
        this.filter[key] = []
      }
      this.filter.price = [200000, 3000000]
      this.filteredHouses = this.houses.houses
    }
  },
  mounted () {
  },
  computed: {
    houses () {
      return this.$store.state.houses.find(e => e.name === this.$route.params.name)
    },
    category () {
      return this.$route.params.name
    },
    filters () {
      return Object.values(this.filter).reduce((acc, n) => acc + n.length, 0)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../static/scss/other-categories';
</style>
