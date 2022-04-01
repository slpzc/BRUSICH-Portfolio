<template>
  <div id="checkbox" :style="{ width }" @click="checked = !checked; $emit('check', checked)">
      <div class="checkbox-block"><svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.57096 4.23316L1.08109 2.74329L0.584473 3.23991L2.57096 5.2264L6.82772 0.969644L6.33109 0.473022L2.57096 4.23316Z" fill="white"/>
      </svg>
      </div>
      <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'checkboxComponent',
  data () {
    return {
      checked: false
    }
  },
  props: {
    text: {
      default: 'Текст пуст.',
      type: String
    },
    width: {
      default: '57px',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
#checkbox{
  display: flex;
  align-items: center;
  min-height: 14px;
  position: relative;

}
.active{
  .checkbox-block{
    background-color: #2CC37C;
    border: 1px solid transparent;
    &::after{
      opacity: 1;
      transform: scale(1);
    }
  }
}
.checkbox-block{
  transition: background-color .2s ease;
  width: 15px;
  height: 15px;
  border: 1px solid rgba(51, 51, 51, 0.5);
  background-color: transparent;
  border-radius: 3px;
  position: relative;
  svg{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
p{
  padding-left: 6px;
  max-width: 61.6vw;
  font-weight: 400;
  font-size: 12px;
  line-height: 137%;
  color: rgba(51, 51, 51, 0.5);
}
</style>
