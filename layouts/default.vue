<template>
  <div :style="{ overflow: $route.name != 'index' || $route.name != 'other-categories' ? 'hidden' : '' }">
    <NavigationComponent></NavigationComponent>
    <div v-if="$route.name != 'index' && $route.name != 'other-categories'" class="global-wrapper">
      <b class="block-title">Другие категории</b>
      <otherCategoriesSlider>
      </otherCategoriesSlider>
    </div>
    <nuxt></nuxt>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
const NavigationComponent = () => import('~/components/Navigation.vue')
const FooterComponent = () => import('~/components/Footer')
export default {
  components: { FooterComponent, NavigationComponent },
  name: 'defaultLayout'
}
</script>

<style lang="scss" scoped>
.global-wrapper{
  flex-direction: column;
  b{
    padding-bottom: 20px;
  }
}
</style>
