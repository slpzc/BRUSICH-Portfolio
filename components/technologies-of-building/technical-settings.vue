<template>
  <div id="root">
    <div class="global-wrapper">
      <div class="modal">
        <div class="top"><b class="title">{{ selected.title }}</b>
          <svg @click="$emit('close')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#2CC37C"/>
            <g clip-path="url(#clip0_1014_1963)">
              <path d="M15.4154 9.23671L14.7646 8.58594L12.1846 11.1659L9.60463 8.58594L8.95386 9.23671L11.5339 11.8167L8.95386 14.3967L9.60463 15.0475L12.1846 12.4675L14.7646 15.0475L15.4154 14.3967L12.8354 11.8167L15.4154 9.23671Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_1014_1963">
                <rect width="11.0769" height="11.0769" fill="white" transform="translate(6.64618 6.27734)"/>
              </clipPath>
            </defs>
          </svg></div>
        <div class="modal-inner">
          <div class="steps-container">
            <div class="step" v-for="(item, index) in selected.steps" :class="{ active: selectedStep === item }" @click="selectedStep = item" :key="index">
              <div> {{ index + 1 }}</div>
              <p>{{ item.text }}</p>
            </div>
          </div>
<!--         :style="{ backgroundImage: `url(${selected.image})` }" -->
          <div class="image">
            <img :src="selected.image" alt="">
            <div class="pointers">
              <div class="point" :class="{ active: selectedStep === item }" @click="selectedStep = item" v-for="(item, index) in selected.steps" :key="index" :style="item.style">{{ index + 1 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'technical-settings',
  data () {
    return {
      selectedStep: null,
    }
  },
  props: {
    selected: {
      type: Object
    },
  },
}
</script>

<style lang="scss" scoped>
#root {
  position: fixed;
  z-index: 22;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  .global-wrapper {
    .modal {
      padding: 15px 15px;
      background-color: #FFFFFF;
      border-radius: 10px;
      width: 100%;
      .top{
        b.title {
          font-weight: 700;
          font-size: 24px;
          line-height: 29px;
          color: #333333;
        }
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .modal-inner {
        display: flex;
        flex-direction: column;
        padding-top: 47px;
        .steps-container {
          .step {
            display: flex;
            align-items: center;
            padding: 9px 41px 9px 7px;
            border-radius: 10px;
            div {
              font-size: 13px;
              min-width: 21px;
              max-width: 21px;
              height: 21px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #2CC37C;
              color: white;
              border-radius: 100%;
            }
            p {
              margin-left: 15px;
              max-width: 360px;
              font-weight: 400;
              font-size: 13px;
              line-height: 16px;
              color: rgba(51, 51, 51, 0.6);
            }
          }
          .active{
            background-color: #F8F8F8;
            b{
              background-color: #1D6D47;
            }
          }
        }
        .image {
          position: relative;
          min-height: 171px;
          max-height: 171px;
          background-repeat: no-repeat;
          background-size: contain;
          margin: 40px auto;
          img{
            max-width: 100%;
            max-height: 188.96px;
          }
          .pointers{
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            position: absolute;
            .point{
              width: 19px;
              height: 19px;
              color: white;
              background-color: #2CC37C;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 100%;
              position: absolute;
              font-size: 13px;
            }
            .active{
              background-color: #1D6D47;
            }
          }
        }
      }
    }
  }
}
</style>
