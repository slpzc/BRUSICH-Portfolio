<template>
  <div id="navigation">
   <div class="global-wrapper">
     <img src="../static/scss/nav/Logo.svg" @click="$router.push('/')" alt="">
     <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M23.25 0.5L0.750001 0.499998L0.750001 3L23.25 3L23.25 0.5ZM23.25 6.75L0.750001 6.75L0.750001 9.25L23.25 9.25L23.25 6.75ZM23.25 15.5L23.25 13L0.75 13L0.75 15.5L23.25 15.5Z" fill="#323232"/>
     </svg>
   </div>

  </div>
</template>

<script>
export default {
  name: 'NavigationComponent'
}
</script>

<style lang="scss" scoped>
@import '../static/scss/nav';
</style>
