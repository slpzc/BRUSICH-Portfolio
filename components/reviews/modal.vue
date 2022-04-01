<template>
  <div id="root">
    <div class="global-wrapper">
      <img :src="src">
      <customized-button @click.native="$emit('close')" :background="'white'" :color="'black'" :padding="'10px 0'">Закрыть</customized-button>
    </div>
  </div>
</template>

<script>
import CustomizedButton from '../Button'
export default {
  name: 'modalComponent',
  components: { CustomizedButton },
  props: {
    src: {
      default: null,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
#root{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.8);
  .global-wrapper{
    flex-direction: column;
  }
  button{
    margin-top: 10px;
  }
}
</style>
