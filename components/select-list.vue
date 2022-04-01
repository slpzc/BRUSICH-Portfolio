<template>
  <div id="select-list" :style="{ maxWidth: width }">
    <label> {{ label }} </label>
    <div :style="{ minWidth: width, minHeight: height}" class="selected__field">
      <div class="inner__content" @click="openList = !openList">
        <transition mode="in-out" name="fade">
        <p class="selected__element" >{{ actuallyElement ? actuallyElement.title : selectList[0].title }}</p>
        </transition>
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.833374 0.333313L5.00004 4.49998L9.16671 0.333313H0.833374Z" fill="#333333"/>
        </svg></div>
      <transition name="slide-fade">
        <div class="list-group" v-if="openList">
          <p @click="setElement(item)" v-for="(item, index) in selectList" :key="index" class="list__element"> {{ item.title }} </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select-list',
  props: {
    label: {
      default: null,
      type: String
    },
    selected: {
      default: null,
      type: String
    },
    selectList: {
      default: null,
      type: Array
    },
    width: {
      default: '149px',
      type: String
    },
    height: {
      default: '38px',
      type: String
    }
  },
  data () {
    return {
      openList: false,
      actuallyElement: null
    }
  },
  methods: {
    setElement (item) {
      this.actuallyElement = item
      this.openList = false
      this.$emit('actuallyElement', item)
    }
  }
}
</script>

<style lang="scss" scoped>
  #select-list{
   label{
     font-weight: 400;
     font-size: 12px;
     line-height: 14px;
     color: rgba(0, 0, 0, 0.5);
   }
    .selected__field{
      position: relative;
      margin-top: 10px;
      background-color: #F8F8F8;
      border-radius: 5px;
      display: flex;
      align-items: center;
      .inner__content{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      .selected__element{
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #333333;
      }
    }
    .list-group{
      position: absolute;
      top: 40px;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: #F8F8F8;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
      z-index: 1;
      p{
        padding: 10px 20px;
        background-color: transparent;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #333333;
        &:hover{
          background-color: #ececec;
        }
      }
    }
  }
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
