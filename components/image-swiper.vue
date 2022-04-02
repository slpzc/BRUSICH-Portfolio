<template>
  <div class="slide__picture full-width" :style="{ 'background-image': `url(${imgs[index]})` }">
    <div v-if="mark" class="mark">{{ mark }}</div>

    <div class="picture-slider full-width row-block justify-between align-center">
      <div class="slider-button" @click="swipe(false)"><ChevronSvg /></div>
      <div class="slider-button" @click="swipe(true)"><ChevronSvg /></div>
    </div>
  </div>
</template>

<script>
import ChevronSvg from '~/assets/img/Home/houses-types/chevron.svg';

export default {
  name: 'ImageSwiper',
  components: { ChevronSvg },

  props: {
    imgs: {
      required: true,
      type: Array,
    },

    mark: {
      type: String,
      required: false,
      default: null,
    },
  },

  data() {
    return {
      index: 0,
    };
  },

  methods: {
    swipe(toRight) {
      if (toRight && this.index + 1 < this.imgs.length) this.index++;
      else if (!toRight && this.index - 1 >= 0) this.index--;
    },
  },
};
</script>

<style lang="scss" scoped>
.slide__picture {
  min-height: 279px;
  position: relative;
  transition: background-image linear 0.2s;
  background: {
    size: cover;
    position: center;
    repeat: no-repeat;
  }

  .mark {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 4px 19px;
    background-color: #2cc37c;
    border-radius: 2px;
    color: white;
  }

  .picture-slider {
    min-height: inherit;
    padding: 0 20px;

    .slider-button {
      cursor: pointer;

      svg {
        width: 20.91px;
        height: 35.47px;
        filter: drop-shadow(0 0 7px rgba(black, 0.7));
      }

      &:first-child {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
