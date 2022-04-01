<template>
  <div class="technologies-wrapper">
    <transition name="local-fade" appear>
      <div v-if="modal" class="modal full-width full-height" @click.self="openModal(null)">
        <div class="modal-content row-block justify-between">
          <div class="content column-block">
            <span class="content__title">{{ modalData.title }}</span>

            <div class="list column-block">
              <div
                v-for="(text, i) of modalData.additional"
                :key="`${text}${i}`"
                class="list-item row-block align-center"
                :class="{ hovered: hoveredItem === `${i + 1}` }"
              >
<!--                                @mouseenter="hoverItem(`${i + 1}`)"
                @mouseleave="hoverItem(null)"-->
                <div class="list-item__index">{{ i + 1 }}</div>
                <div class="list-item__text">{{ text }}</div>
              </div>
            </div>
          </div>

          <div
            :style="{ 'background-image': `url(${require(`~/assets/img/Category/technologies/${modal}.png`)})` }"
            class="modal-content__picture"
            :class="modal"
          >
            <div class="modal-points full-width full-height">
              <div
                v-for="(i, j) in modalData.points || modalData.additional.length"
                :key="`point-${i}${j}`"
                class="modal-point"
                :class="{ hovered: hoveredItem === `${i}` }"
              >
<!--                @mouseenter="hoverItem(`${i}`)"
                @mouseleave="hoverItem(null)"-->
                <span class="modal-point__index">{{ i }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div class="technologies-container">
      <img :src="require(`~/assets/img/Category/technologies/${image}.png`)" class="technologies-container__picture" alt="" />
      <div class="points full-width full-height">
        <div v-for="(item, i) of points" :key="`${item.hint}${i}`" class="point">
          <div class="point__index full-width full-height" @click="openModal(item.path)">{{ i + 1 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultConfig from '@/assets/config/technologies/default.json';
import frameHousesConfig from '@/assets/config/technologies/frame-houses.json';
import { FRAME_HOUSES } from '@/assets/config/variables.js';

export default {
  name: 'Technologies',
  props: {
    category: {
      required: true,
      type: String,
    },
  },

  data() {
    return {
      modal: null,
      hoveredItem: null,
      image: 'timber',
    };
  },

  computed: {
    points() {
      if (this.isFrame) return frameHousesConfig;
      return defaultConfig;
    },

    isFrame() {
      return this.$route.params.category === FRAME_HOUSES || this.category === FRAME_HOUSES;
    },

    modalData() {
      if (!this.modal) return {};
      else return this.points.find((el) => el.path === this.modal);
    },
  },

  created() {
    if (this.isFrame) {
      this.image = 'frame';
    }
  },

  methods: {
    openModal(modal) {
      this.modal = modal;
    },

    // hoverItem(item) {
    //   this.hoveredItem = item;
    // },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/css/mixin';
@import '~/assets/css/templates';

.technologies-wrapper {
  display: flex;
  justify-content: center;
  padding: 18px;
  background-color: #fff;
  border-radius: 10px;
  .modal {
    @extend %content-center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(#333333, 0.5);
    z-index: 999;

    &-content {
      max-width: 92vw;
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: white;
      border-radius: vw(10px);
      padding: vw(63px) vw(53px);

      &__picture {
        margin: 15px auto;
        position: relative;
        height: vw(614px);
        min-width: vw(811px);
        max-width: vw(811px);
        background: {
          size: contain;
          position: center;
          repeat: no-repeat;
        }

        @import '~/assets/css/technologies';

        .modal-points {
          .modal-point {
            color: white;
            font-size: 15.13px;
            @extend %content-center;
            $size: vw(80px);
            position: absolute;
            width: $size;
            height: $size;
            border-radius: 50%;
            background-color: #2cc37c;
            transition: ease 0.2s;
            transition-property: background-color, transform;


            &.hovered {
              background-color: #1d6d47;
              transform: scale(1.2);
            }
          }
        }
      }

      .content {

        .list {
          margin-top: vw(47px);
          display: flex;
          flex-direction: column;
          gap: 10px;

          &-item {
            border-radius: vw(10px);
            transition: background-color ease 0.2s;

            &.hovered {
              background-color: #f8f8f8;

              .list-item__index {
                background-color: #1d6d47;
              }
            }

            &__index {
              font-size: 9.45px;
              @extend %content-center;
              min-width: 15px;
              height: 15px;
              color: white;
              background-color: #2cc37c;
              border-radius: 50%;
              transition: background-color ease 0.2s;
            }

            &__text {
              font-size: 12px;
              color: rgba(#333333, 0.6);
              width: 77.333vw;
              margin-left: vw(32px);
            }
          }
        }
        &__title{
          font-weight: 700;
          font-size: 24px;
          line-height: 29px;
          color: #333333;
        }
      }
    }
  }

  .technologies-container {
    position: relative;
    width: vw(1000px);
    height: vw(1000px);

    &__picture {
      margin: 15px auto;
      width: inherit;
      height: inherit;
      position: absolute;
    }

    .points {
      position: absolute;

      .point {
        $size: vw(36px);
        @extend %content-center;
        position: absolute;
        width: 17px;
        height: 17px;
        font-size: 12px;
        border-radius: 50%;
        background-color: #2cc37c;
        border: vw(2px) solid white;

        $positions: vw(87px) vw(271px), vw(198px) vw(726px), vw(250px) vw(469px), vw(379px) vw(385px), vw(391px) vw(750px), vw(427px) vw(286px),
        vw(457px) vw(589px), vw(567px) vw(373px), vw(641px) vw(757px), vw(790px) vw(379px);

        @for $i from 1 through length($positions) {
          &:nth-child(#{ $i }) {
            top: nth(nth($positions, $i), 1);
            left: nth(nth($positions, $i), 2);
          }
        }

        &__index {
          @extend %content-center;
          color: white;
          position: absolute;
          cursor: pointer;

          &:hover + .hint {
            opacity: 1;
          }
        }

        .hint {
          position: absolute;
          opacity: 0;
          pointer-events: none;
          bottom: $size;
          transition: opacity ease 0.2s;

          .content {
            width: vw(277px);
            border-radius: vw(10px);
            background-color: rgba(#333333, 0.5);
            padding: vw(17px) vw(16px);

            &__title {
              text-align: center;
              color: white;
            }

          }

          .triangle {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: vw(10px) vw(12.5px) 0 vw(12.5px);
            border-color: rgba(#333333, 0.5) transparent transparent transparent;
          }
        }
      }
    }
  }
}
</style>
