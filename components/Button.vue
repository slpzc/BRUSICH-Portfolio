<template>
  <button :style="{ color, padding, background }">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'CustomizedButton',
  props: {
    color: {
      default: 'white',
      type: String
    },
    padding: {
      default: '8px 20px',
      type: String
    },
    background: {
      default: '#2CC37C',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  button{
    background-color: #2CC37C;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    &:disabled{
      background-color: #979797 !important;
      color: white !important;
    }
  }
</style>
