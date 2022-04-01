<template>
  <div id="root">
    <header>
      <div class="global-wrapper">
        <b class="block-title">Фундаменты</b>
        <div class="block">
          <b class="title">Свайно-винтовой фундамент</b>
          <div class="additional-services">
            <p class="additional-services-title">Дополнительные услуги:</p>
            <checkbox-component :class="{ active: addServiceAction }" @check="addService" :width="'265px'" :text="'увеличение длины сваи на 0.5 м 500 руб/шт'"/>
          </div>
          <div class="price">
            <b class="block-title">
              <span>Итого:</span> {{ resultPrice.toLocaleString('ru') }}₽
            </b>
          </div>
          <div class="consultation-reset">
            <customized-button :padding="'12px 41px'">Консультация</customized-button>
            <customized-button @click.native="reset" :background="'white'" :color="'#333333'" :padding="'12px 41px'">Сброс</customized-button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="cards">
        <div class="global-wrapper">
          <div class="card" v-for="(item, index) in foundations" :key="index">
            <div class="card-inner">
              <b>{{ item.title }}</b>
              <p>{{ item.description }}</p>
              <div class="price"  :style="{ 'background-image': `url(${require(`@/assets/img/Foundation/${index + 1}.png`)})` }"> <p>{{ item.priceStep.toLocaleString('ru') }} руб. за сваю</p> </div>
            </div>
            <div class="calculation">
              <b class="text">Введите данные для расчёта стоимости</b>
              <div class="number">
                <input class="num" type="text" min="0" maxlength="3" v-model="item.num">
                <p>{{ item.textType }}</p>
              </div>
              <b class="price">{{ (item.num * item.priceStep).toLocaleString('ru') }}₽</b>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import CheckboxComponent from '../components/checkbox'
import CustomizedButton from '../components/Button'
export default {
  name: 'FoundationsPage',
  components: { CustomizedButton, CheckboxComponent },
  data () {
    return {
      foundations: [
        {
          title: 'Свайно-винтовой фундамент',
          description: 'Надежный и современный вид фундамента. Возводится на любой почве (кроме каменистой и сильно заболоченной). Диаметр сваи - 108 мм. Стандартная длина - 2.5 м. С оцинковкой.',
          addedPrice: 5160, // сколько сейчас выходит: кол-во * штук
          num: 1,
          priceStep: 5160, // за штуку
          textType: 'свай'
        },
        {
          title: 'ЖБ забивные сваи',
          description: 'Современные железобетонные сваи погружаются в землю на расчетную глубину методом забивки.',
          addedPrice: 5900, // сколько сейчас выходит: кол-во * штук
          num: 1,
          priceStep: 5900, // за штуку
          textType: 'свай'
        },
        {
          title: 'Ленточный фундамент',
          description: 'Монолитная железобетонная полоса, заливаемая по всему периметру несущих стен строения.',
          addedPrice: 15000, // сколько сейчас выходит: кол-во * штук
          num: 1,
          priceStep: 15000, // за штуку
          textType: 'куб.м'
        },
        {
          title: 'Монолитная плита',
          description: 'Достаточно универсальный вид фундамента, который являет собой монолитную плиту. Она устанавливается по всей площади будущей постройки.',
          addedPrice: 15000, // сколько сейчас выходит: кол-во * штук
          num: 1,
          priceStep: 15000, // за штуку
          textType: 'куб.м'
        },
        {
          title: 'Опорно-столбчатый фундамент из бетонных блоков',
          description: 'Наиболее простой вариант фундамента. Подойдет для строительства легких строений плотном грунте с низким уровнем залегания грунтовых вод. Одна тумба: 400х400х400 мм. Состоит из четырех цементных блоков 200х200х400 мм.',
          addedPrice: 1500, // сколько сейчас выходит: кол-во * штук
          num: 1,
          priceStep: 1500, // за штуку
          textType: 'тумб'
        }
      ],
      addServiceAction: false
    }
  },
  methods: {
    addService (e) {
      this.addServiceAction = e
    },
    reset () {
      // Дополнительные услуги
      this.addServiceAction = false
      // Количество всех элементов (сваи и т.п)
      for (let i = 0; i < this.foundations.length; i++) {
        const element = this.foundations[i]
        element.num = 1
      }
    }
  },
  computed: {
    resultPrice () {
      return this.addServiceAction ? this.foundations.reduce((previousValue, currentValue) => Number(previousValue) + Number((currentValue.addedPrice + 500) * currentValue.num), 0) : this.foundations.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue.addedPrice * currentValue.num), 0)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../static/scss/foundations';
</style>
