<template>
  <div id="root">
    <div class="image">
      <img :src="require(`~/assets/img/Category/house-details/${mode}/background.jpg`)">
      <img class="detail" v-for="(image, index) in images" :src="image.img" :style="{ filter: `url(#filter-${index})` }">
      <svg v-for="(image, i) in images" :key="`filter-${i}`">
        <filter :id="`filter-${i}`" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feColorMatrix
            type="matrix"
            values="
          .33 .33 .33 0 0
          .33 .33 .33 0 0
          .33 .33 .33 0 0
          0 0 0 1 0"
            in="SourceGraphic"
            result="colormatrix"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR type="table" :tableValues="`0 ${images[i].color[0] / exec}`"></feFuncR>
            <feFuncG type="table" :tableValues="`0 ${images[i].color[1] / exec}`"></feFuncG>
            <feFuncB type="table" :tableValues="`0 ${images[i].color[2] / exec}`"></feFuncB>
            <feFuncA type="table" tableValues="0 1"></feFuncA>
          </feComponentTransfer>
          <feBlend mode="multiply" in="componentTransfer" in2="SourceGraphic" result="blend" />
        </filter>
      </svg>

      <svg @click="changeDay" class="change-day" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="30" rx="4.28571" :fill="mode === 'day' ? '#333333' : '#FFF'"/>
        <path d="M21.6669 12.2421V8.33377H17.7585L15.0002 5.57544L12.2419 8.33377H8.33353V12.2421L5.5752 15.0004L8.33353 17.7588V21.6671H12.2419L15.0002 24.4254L17.7585 21.6671H21.6669V17.7588L24.4252 15.0004L21.6669 12.2421ZM15.0002 20.0004C12.2419 20.0004 10.0002 17.7588 10.0002 15.0004C10.0002 12.2421 12.2419 10.0004 15.0002 10.0004C17.7585 10.0004 20.0002 12.2421 20.0002 15.0004C20.0002 17.7588 17.7585 20.0004 15.0002 20.0004ZM15.0002 11.6671C13.1585 11.6671 11.6669 13.1588 11.6669 15.0004C11.6669 16.8421 13.1585 18.3338 15.0002 18.3338C16.8419 18.3338 18.3335 16.8421 18.3335 15.0004C18.3335 13.1588 16.8419 11.6671 15.0002 11.6671Z" :fill="mode === 'day' ? '#FFF' : '#333333'"/>
      </svg>
    </div>
    <div class="info-wrapper">
      <div class="global-wrapper">
        <div class="info" :class="{ drop: actuallyPicker === item }" v-for="(item, index) in designerButtons" :key="index">
          <div @click="actuallyPicker === item ?  actuallyPicker = null : actuallyPicker = item" class="content"><p>{{ item.name }}
            <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.0512695 0.82959L2.97735 3.75567L5.90342 0.82959H0.0512695Z" fill="#333333"/>
            </svg>
          </p>
            <button>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.49988 0.25C3.04849 0.25 0.249878 3.04861 0.249878 6.5C0.249878 9.95139 3.04849 12.75 6.49988 12.75C7.07627 12.75 7.54154 12.2847 7.54154 11.7083C7.54154 11.4375 7.43738 11.1944 7.27071 11.0069C7.11099 10.8264 7.00682 10.5833 7.00682 10.3194C7.00682 9.74306 7.4721 9.27778 8.04849 9.27778H9.27766C11.1943 9.27778 12.7499 7.72222 12.7499 5.80556C12.7499 2.73611 9.95127 0.25 6.49988 0.25ZM2.68043 6.5C2.10404 6.5 1.63877 6.03472 1.63877 5.45833C1.63877 4.88194 2.10404 4.41667 2.68043 4.41667C3.25682 4.41667 3.7221 4.88194 3.7221 5.45833C3.7221 6.03472 3.25682 6.5 2.68043 6.5ZM4.76377 3.72222C4.18738 3.72222 3.7221 3.25694 3.7221 2.68056C3.7221 2.10417 4.18738 1.63889 4.76377 1.63889C5.34016 1.63889 5.80543 2.10417 5.80543 2.68056C5.80543 3.25694 5.34016 3.72222 4.76377 3.72222ZM8.23599 3.72222C7.6596 3.72222 7.19432 3.25694 7.19432 2.68056C7.19432 2.10417 7.6596 1.63889 8.23599 1.63889C8.81238 1.63889 9.27766 2.10417 9.27766 2.68056C9.27766 3.25694 8.81238 3.72222 8.23599 3.72222ZM10.3193 6.5C9.74293 6.5 9.27766 6.03472 9.27766 5.45833C9.27766 4.88194 9.74293 4.41667 10.3193 4.41667C10.8957 4.41667 11.361 4.88194 11.361 5.45833C11.361 6.03472 10.8957 6.5 10.3193 6.5Z"
                  fill="#F8F8F8"
                />
              </svg>
            </button></div>
         <full-height :show="actuallyPicker === item">
           <div class="dropdown-menu">
           <div class="select-color">
             <div class="top">
               <div :class="{ selectedType: item.selectedType === i+1 }" @click="selectDetailType(item, index, i+1)" class="title" v-for="(title, i) in item.types">{{ title }}</div>
             </div>
             <div class="colors">
               <div :class="{ 'color-selected': item.selectedColor === i }" @click="selectColor(color, index, i)" class="color" v-for="(color, i) in item.colors">
                 <div :style="{ background: color.hex }" class="color-circle"/>
                 <p class="color-title">{{ color.title }}</p>
               </div>
             </div>
           </div>
         </div>
         </full-height>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import FullHeight from '@/components/houses/fullHeight'
export default {
  components: { FullHeight },
  data () {
    return {
      exec: 255,
      designerButtons: [
        {
          img: require(`~/assets/img/Category/house-details/day/roofs/1.png`),
          name: 'Крыша',
          selectedType: 0,
          selectedColor: 0,
          path: 'roofs',
          types: ['Кликфальц', 'Металочерепица', 'Ондулин', 'Профлист'],
          color: [],
          colors: [
            { hex: '#6b5041', title: 'Коричневый' },
            { hex: '#5a5a5a', title: 'Серый' },
            { hex: '#b84445', title: 'Красный' },
            { hex: '#6a2424', title: 'Вишнёвый' },
            { hex: '#33a454', title: 'Зелёный' },
            { hex: '#377aa5', title: 'Сине-голубой' },
          ],
        },
        {
          img: require('~/assets/img/Category/house-details/day/walls/1.png'),
          name: 'Стены',
          path: 'walls',
          color: [],
          selectedType: 0,
          types: ['Блокхаус', 'Из бруса', 'Вагонка', 'Брус'],
          colors: [
            { hex: '#edd6b2', title: 'Брус' },
            { hex: '#dfcca1', title: 'Бежевый' },
            { hex: '#b9d1ed', title: 'Голублой' },
            { hex: '#c58967', title: 'Бледно-коричневый' },
            { hex: '#bcdab8', title: 'Бледно-зеленый' },
            { hex: '#edc48c', title: 'Бронзовый' },
            { hex: '#b1b1a2', title: 'Пепельный' },
            { hex: '#9f583a', title: 'Коричневый' },
            { hex: '#a3393b', title: 'Вишневый' },
            { hex: '#b9c3cc', title: 'Черничный' },
            { hex: '#3e6e97', title: 'Синий' },
            { hex: '#e0fb4c', title: 'Лимон' },
            { hex: '#a99b88', title: 'Коричнеый' },
            { hex: '#6a2424', title: 'Бордовый' },
          ],
        },
        {
          img: require('~/assets/img/Category/house-details/day/windows.png'),
          name: 'Окна',
          color: [],
          colors: [
            { hex: '#bbbbbb', title: 'Серый' },
            { hex: '#e7c9a3', title: 'Охра' },
            { hex: '#805533', title: 'Коричневый' },
          ],
        },
        {
          img: require('~/assets/img/Category/house-details/day/gutter.png'),
          name: 'Водосточка',
          color: [],
          colors: [
            { hex: '#7e5633', title: 'Коричневый' },
            { hex: '#ffffff', title: 'Белый' },
            { hex: '#646464', title: 'Графит' },
            { hex: '#6a2424', title: 'Гранат' },
          ],
        },
        {
          img: require('~/assets/img/Category/house-details/day/architraves.png'),
          name: 'Наличники',
          color: [],
          colors: [
            { hex: '#ffffff', title: 'Белый' },
            { hex: '#377aa5', title: 'Голубой' },
            { hex: '#815433', title: 'Коричневый' },
          ],
        }
      ],
      actuallyPicker: null,
      mode: 'day'
    }
  },
  mounted () {
    for (let i = 0; i < this.designerButtons.length; i++) {
      this.designerButtons[i].color = this.toRGB(this.designerButtons[i].colors[0].hex);
    }
    },
  methods: {
    changeDay () {
      if (this.mode === 'day') {
        for (let i = 0; i < this.designerButtons.length; i++){
          const element = this.designerButtons[i]
          element.img = element.img.replace('day', 'night')
        }
        this.mode = 'night'
        return
      }
      for (let i = 0; i < this.designerButtons.length; i++){
        const element = this.designerButtons[i]
        element.img = element.img.replace('night', 'day')
      }
      this.mode = 'day'
      return
    },
    selectDetailType(detail, index, i) {
      this.designerButtons[index].selectedType = i
      this.designerButtons[index].img = require(`~/assets/img/Category/house-details/${this.mode}/${detail.path}/${i}.png`)
    },
    selectColor (color, index, i) {
      this.designerButtons[index].selectedColor = i
      this.designerButtons[index].color = this.toRGB(color.hex)
    },
    toRGB(hexColor) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);

      if (result) return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
      return [];
    },
  },
  computed: {
    images () {
      const images = []
      for (let i = 0; i < this.designerButtons.length; i++) {
        images.push(this.designerButtons[i])
      }
      return images
    }
  },
}
</script>

<style lang="scss" scoped>
#root{
  display: flex;
  flex-direction: column;
  .image{
    position: relative;
    .change-day{
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
    img{
      width: 100%;
    }
    .detail{
      position: absolute;
      top: 0;
      left: 0;
    }
    svg{
      position: absolute;
    }
  }

  .info-wrapper{
    .global-wrapper{
      position: relative;
      display: flex;
      flex-direction: column;
    }
    background-color: #F8F8F8;
    padding-bottom: 20px;
    padding-top: 10px;
    position: relative;
    .info {
      .content{
      min-height: 30px;
      padding-top: 6.5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(51, 51, 51, 0.1);
      p{
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #333333;
        display: flex;
        align-items: center;
        svg{
          padding-left: 9px;
        }
      }
      button{
        width: 25px;
        height: 25px;
        background-color: #2CC37C;
        border-radius: 3.6325px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
      }
        }
    }
    .drop{
      .content{
        border-bottom: 1px solid transparent;
      }
    }
    .dropdown-menu{
      background-color: #fff;
      max-width: 100%;
      border-radius: 8px;
      padding: 15px 35px;
      .top{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .title{
          font-weight: 500;
          font-size: 13px;
          line-height: 16px;
          color: #333333;
          padding: 0 22px;
          background: #F8F8F8;
          border-radius: 5px;
          height: 27px;
          display: flex;
          align-items: center;
        }
        .selectedType{
          color: white;
          background-color: #2CC37C;
        }
      }
      .colors{
        padding-top: 18px;
        padding-bottom: 18px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
        .color{
          display: flex;
          align-items: center;
          gap: 10px;
          &-circle{
            width: 20px;
            height: 20px;
            border-radius: 100%;
            border: 1px solid transparent;
          }
          &-title{
            font-weight: 500;
            font-size: 13px;
            line-height: 16px;
            border-bottom: 1px solid transparent;
            color: #333333;
          }
        }
        .color-selected{
          .color-circle{
              border: 1px solid #2CC37C;
          }
          .color-title{
            color: #2CC37C;
            border-bottom: 1px solid #2CC37C;
          }
        }
      }
    }
  }
}

</style>
