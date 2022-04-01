<template>
  <client-only>
    <div class="immitate">
      <div class="content-box">
        <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 0.75C3.11375 0.75 0.375 3.48875 0.375 6.875C0.375 10.5238 4.2425 15.555 5.835 17.4713C6.185 17.8913 6.82375 17.8913 7.17375 17.4713C8.7575 15.555 12.625 10.5238 12.625 6.875C12.625 3.48875 9.88625 0.75 6.5 0.75ZM6.5 9.0625C5.2925 9.0625 4.3125 8.0825 4.3125 6.875C4.3125 5.6675 5.2925 4.6875 6.5 4.6875C7.7075 4.6875 8.6875 5.6675 8.6875 6.875C8.6875 8.0825 7.7075 9.0625 6.5 9.0625Z" fill="#2CC37C"/>
        </svg>
        <p>Карта наших объектов</p>
      </div>
      <yandexMap
        v-if="needToLoad"
        ref="myMap"
        :coords="$options.DEFAULT_COORDS"
        class="full-width"
        :zoom="$options.MAP_ZOOM"
        :scroll-zoom="false"
        @map-was-initialized="ready"
      >
      </yandexMap>
    </div>
  </client-only>
</template>

<script>
import { loadYmap, yandexMap } from 'vue-yandex-maps';
import { API_KEY } from '@/assets/config/yandex.js';
import { MARKER_URI } from '@/assets/config/variables.js';
import housesConfig from '@/assets/config/houses.js';
import yandexMixin from '@/assets/mixins/yandex.js';

import getImages from '@/assets/mixins/getImages.js';

export default {
  name: 'YMap',
  mixins: [yandexMixin, getImages],
  components: {
    yandexMap,
  },
  data() {
    return {
      needToLoad: false,
      markers: [],
    };
  },

  async mounted() {
    await loadYmap({
      apiKey: API_KEY,
      lang: 'ru_RU',
      coordorder: 'lat-long',
      enterprise: false,
      version: '2.1'
    })
    setTimeout(() => {
      this.needToLoad = true
      console.log('show')
    }, 500)
  },
  methods: {
    ready() {
      const map = this.$refs.myMap.myMap;

      map.controls.remove('rulerControl');
      map.controls.remove('geolocationControl');
      map.controls.remove('trafficControl');
      map.controls.remove('typeSelector');
      map.controls.remove('fullscreenControl');
      map.controls.remove('searchControl');

      housesConfig.ourWorks.createRequest({
        callback: (res) => {
          for (let i = 0; i < res.data.data.length; i++) {
            const coords = res.data.data[i].attributes.coordinate.split(',').map((el) => parseFloat(el));

            map.geoObjects.add(
              new ymaps.Placemark(
                coords,
                {
                  balloonContent: `
                  <a href="${window.location.href}OurWorks/${res.data.data[i].id}">${res.data.data[i].attributes.name}</a>
                  <br><br>
                  <img src="${this.getImages([res.data.data[i].attributes.img_main.data])[0]}" style="height: 100px;" />`,
                },
                {
                  iconLayout: 'default#image',
                  iconImageHref: MARKER_URI,
                  iconImageSize: [43, 43],
                }
              )
            );
          }
        },
        cache: true,
        filterResponse: false,
        populate: ['img_main'],
      });
      const copyright = document.querySelector('.ymaps-2-1-79-copyrights-pane')
      copyright.style.display = 'none'
    },
  },
};
</script>

<style lang="scss" scoped>
.immitate{
  margin-top: 40px;
  min-height: 277px;
  position: relative;
  .content-box{
    padding: 10px 33px 9px 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0px 18.9257px 22.6057px rgba(0, 0, 0, 0.06);
    border-radius: 0px 0px 5.25714px 5.25714px;
    max-width: 200px;
    p{
      padding-left: 10px;
      font-weight: 600;
      font-size: 12.6171px;
      line-height: 15px;
      color: #333333;
    }
  }
}
.ymap-container{
  height: 277px !important;
  .ymaps-2-1-79-map-copyrights-promo{
    display: none !important;
  }
}
</style>
