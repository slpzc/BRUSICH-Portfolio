<template>
  <div id="other-categories-layout">
    <NavigationComponent></NavigationComponent>
    <b class="block-title" v-if="title">Другие категории</b>
    <p class="block-subtitle" v-if="subtitle">{{ subtitle }}</p>
    <otherCategorieSslider></otherCategorieSslider>
    <nuxt></nuxt>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavigationComponent from '../components/Navigation'
import otherCategorieSslider from '../components/other-categories-slider'
import FooterComponent from '../components/Footer'
export default {
  name: 'other-categories-layout',
  layout: 'mainOtherCategoriesSlider',
  components: { FooterComponent, NavigationComponent, otherCategorieSslider },
  props: {
    title: {
      default: null,
      type: String
    },
    subtitle: {
      default: null,
      type: String
    }
  }
}
</script>

<style scoped>

</style>
