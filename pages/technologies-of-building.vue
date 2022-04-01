<template>
<div id="empty_template">
  <transition mode="out-in" name="slide-fade">
    <technical-settings v-if="selected" @close="closeModal()" :selected="selected" />
  </transition>
  <div class="global-wrapper">
    <div class="block-title">Технологии строительства</div>
    <div class="settings-container">
      <technologies/>
    </div>
  </div>
</div>
</template>

<script>
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
export default {
  name: 'technologies-of-building',
  components: {
    Technologies: () => import('@/components/houses/technologies'),
    TechnicalSettings: () => import('@/components/technologies-of-building/technical-settings')
  },
  data () {
    return {
      point: [
        {
          style: {
            top: '25px',
            left: '15.467vw'
          }
        },
        {
          style: {
            top: '36px',
            left: '37.600vw'
          }
        },
        {
          style: {
            top: '114px',
            right: '15.200vw'
          }
        },
        {
          style: {
            top: '131px',
            left: '30.400vw'
          }
        },
        {
          style: {
            top: '160px',
            left: "11.733vw"
          }
        },
        {
          style: {
            bottom: "63px",
            left: "29.867vw"
          }
        },
        {
          style: {
            bottom: '106px',
            right: '22.933vw'
          }
        },
        {
          style: {
            bottom: '38px',
            right: '11.733vw'
          }
        }
      ],
      constructions: [
        {
          title: 'Конструкции крыши',
          steps: [
            {
              text: 'Кровельное покрытие: «Ондулин»',
              style: {
                left: '12.360vw',
                top: '37.23px'
              }
            },
            {
              text: 'Ветро-гидроизоляция',
              style: {
                left: '15.864vw',
                top: '83.58px'
              }
            },
            {
              text: 'Обрешетка: доска 20х100 мм',
              style: {
                left: '28.712vw',
                top: '96.72px'
              }
            },
            {
              text: 'Стропильная система из доски 40х100/40х150 мм (в зависимости от выбранного проекта) с шагом не более 590 мм',
              style: {
                right: '31.227vw',
                top: '98.91px'
              }
            },
            {
              text: 'Перекрытия из доски 40х150 мм, с шагом не более 590 мм',
              style: {
                right: '24.509vw',
                top: '129.92px'
              }
            },
          ],
          image: 'https://i.imgur.com/QVgafV1.png'
        },
        // нач
        {
          title: 'Конструкция фронта',
          steps: [
            {
              text: 'Каркас из доски 40х100 мм',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Ветро-гидроизоляция',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Вагонка 14 мм, сорт "Б" (камерной сушки)',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/SCeSF0s.png'
        },
        {
          title: 'Конструкция потолка',
          steps: [
            {
              text: 'Потолок: вагонка 14 мм, сорт "Б" (камерной сушки)',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Паро-гидроизоляция',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Утеплитель, минеральная вата «KNAUF» в 50 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Межэтажные перекрытия из доски 40х150 мм с шагом не более 590 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/M5T2wp7.png'
        },
        {
          title: 'Конструкция перегородок',
          steps: [
            {
              text: 'Брус профилированный: 90х140 мм',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Межвенцовый утеплитель «Джут»',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Деревянный нагель 200 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/0leQ6mm.png'
        },
        {
          title: 'Конструкция межэтажного перекрытия',
          steps: [
            {
              text: 'Потолок: вагонка 14 мм, сорт "Б" (камерной сушки)',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Паро-гидроизоляция',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Утеплитель, минеральная вата «KNAUF» 50 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Межэтажные перекрытия из доски 40х150 мм с шагом не более 590 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Чистовой пол: шпунтованная доска 36 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/LR3ccAn.png'
        },
        {
          title: 'Конструкция межкомнатной двери',
          steps: [
            {
              text: 'Деревянная, филенчатая дверь 800х2000 мм',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Обсадной брусок «ройка»',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Брус профилированный: 90х140 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/9DEXaMH.png'
        },
        {
          title: 'Конструкция окна',
          steps: [
            {
              text: 'Деревянное окно, двойного остекления',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Брус профилированный: 90х140/140х140/190х140 мм (в зависимости от выбранной комплектации)',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Обсадной брусок «ройка»',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/9DEXaMH.png'
        },
        {
          title: 'Конструкция пола',
          steps: [
            {
              text: 'Черепной брусок 40х50 мм',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Лаги пола: доска 50х150 мм, с шагом 590 мм',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Черновой пол: доска 20х100 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Ветро-гидроизоляция',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Утеплитель 50 мм, минеральная вата «KNAUF»',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Паро-гидроизоляция',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Чистовой пол: шпунтованная доска 36 мм\n',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/ZYHAIdK.png'
        },
        {
          title: 'Конструкция внешних стен',
          steps: [
            {
              text: 'Профилированный брус 90х140 мм',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Профилированный брус 140х140 мм',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Профилированный брус 190х140 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Деревянный нагель 200 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Межвенцовый утеплитель «Джут»',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/cN5ueR8.png'
        },
        {
          title: 'Конструкция входной двери',
          steps: [
            {
              text: 'Входная, металлическая дверь «Эконом» 800х2000 мм',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Брус профилированный: 90х140/140х140/190х140 мм (в зависимости от выбранной комплектации)',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Обсадной брусок «ройка»',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/WBhPQKj.png'
        },
        {
          title: 'Конструкция перегородок',
          steps: [
            {
              text: 'Вагонка 14 мм, сорт "Б" (камерной сушки)',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Паро-гидроизоляция',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Доска каркаса 40х100 мм, стойки каркаса с шагом 600 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Утеплитель 100 мм базальтовые плиты «Rockwool»',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/xTrUTMf.png'
        },
        {
          title: 'Конструкция межкомнатной двери',
          steps: [
            {
              text: 'Деревянная, филенчатая дверь 800х2000 мм',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Паро-гидроизоляция',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Доска каркаса 40х100 мм, стойки каркаса с шагом 600 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Утеплитель 100 мм базальтовые плиты «Rockwool»',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Вагонка 14 мм, сорт "Б" (камерной сушки)',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/Zl16Kjz.png'
        },
        {
          title: 'Конструкция окна',
          steps: [
            {
              text: 'Деревянное окно, двойного остекления',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Ветро-гидроизоляция',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Доска каркаса 40х100/40х150/40х200 мм (в зависимости от выбранной комплектации), стойки каркаса с шагом 590 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Утеплитель 100/150/200 мм (в зависимости от выбранной комплектации), базальтовые плиты «Rockwool»',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Вагонка 14 мм, сорт "Б" (камерной сушки)',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/1gHk2iN.png'
        },
        {
          title: 'Конструкция внешних стен',
          steps: [
            {
              text: 'Вагонка 14 мм, сорт "Б" (камерной сушки)',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Ветро-гидроизоляция',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Паро-гидроизоляция',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Доска каркаса 40х100/40х150/40х200 мм (в зависимости от выбранной комплектации), стойки каркаса с шагом 590 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Утеплитель 100/150/200 мм (в зависимости от выбранной комплектации), базальтовые плиты «Rockwool»',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Черепной брусок 40х50 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/E59RrhT.png'
        },
        {
          title: 'Конструкция входной двери',
          steps: [
            {
              text: 'Входная, металлическая дверь «Эконом» 800х2000 мм',
              style: {
                left: '83.733vw',
                top: '211px'
              }
            },
            {
              text: 'Ветро-гидроизоляция',
              style: {
                left: '128vw',
                top: '135px'
              }
            },
            {
              text: 'Доска каркаса 40х100/40х150/40х200 мм (в зависимости от выбранной комплектации), стойки каркаса с шагом 590 мм',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Утеплитель 100/150/200 мм (в зависимости от выбранной комплектации), базальтовые плиты «Rockwool»',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            },
            {
              text: 'Вагонка 14 мм, сорт "Б" (камерной сушки)',
              style: {
                left: '157.867vw',
                top: '156px'
              }
            }
          ],
          image: 'https://i.imgur.com/kEWk3KW.png'
        },
      ],
      selected: null
    }
  },
  methods: {
    openModal ({ index }) {
      disablePageScroll()
      this.selected = this.constructions[index]
    },
    closeModal() {
      enablePageScroll()
      this.selected = null
    }
  },
}
</script>

<style lang="scss" scoped>
#empty_template{
  padding-top: 40px;
  .global-wrapper{
    flex-direction: column;
    .settings-container{
      margin-top: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 18px;
      background-color: #F8F8F8;
      border-radius: 10px;
      .image-container{
        position: relative;
        max-width: 317px;
        .pointers-container{
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          div{
            position: absolute;
            width: 27px;
            height: 27px;
            color: white;
            border: 1.6px solid white;
            background-color: #2CC37C;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .eight{
            bottom: 38px;
            right: 11.733vw;
          }
        }
      }
    }
  }
}
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
