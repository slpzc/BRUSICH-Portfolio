<template>
  <client-only>
    <div>
      <div>
        <yandex-map
          v-if="showMap"
          class="ymap"
          :coords="[54.62896654088406, 39.731893822753904]"
        ></yandex-map>
      </div>
    </div>
  </client-only>
</template>

<script>
import { yandexMap  } from 'vue-yandex-maps'
// import { loadYmap } from 'vue-yandex-maps'
export default {
  name: 'MapComp',
  components: {yandexMap},
  // async mounted() {
  //   await loadYmap({ ...this.settings, debug: true, apiKey: 'ad1de168-d0cb-4db2-ba5f-3a1dbd84e74c' });
  // },
  mounted() { this.showMap = true },
  props: {
    topPanel: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '600px'
    },
    borderRadius: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {
      showMap: false,
      coords: [
        58.812924, 36.500804
      ],
      settings: {
        apiKey: 'ad1de168-d0cb-4db2-ba5f-3a1dbd84e74c',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1'
      },
    }
  },
}
</script>

<style lang="scss" scoped>
* {
  height: 454px !important;;
  width: 400px !important;
}
.map-container{
  position: relative;
#yamaps {
  width: 100%;
  height: 600px;
  background: rgba(0, 100, 10, 0.4);
}
.map__our__objects{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1;
  background-color: #FFFFFF;
  box-shadow: 0px 18.9257px 22.6057px rgba(0, 0, 0, 0.06);
  border-radius: 0px 0px 5.25714px 5.25714px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 49px;
  max-width: 184px;
  width: 100%;
  gap: 7px;
  padding: 10px 33px;
  p{
    font-weight: 600;
    font-size: 12.6171px;
    line-height: 15px;
    color: #333333;
    max-width: 91px;
  }
}
}

</style>
