<template>
  <div :style="style" id="root">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'fullHeight',
  props: ['show'],
  computed: {
    style() {
      return `height: ${this.show ? this.$el.scrollHeight : 0}px`;
    }
  },
}
</script>

<style lang="scss" scoped>
#root{
  overflow: hidden;
  transition: height .6s;
}
</style>
