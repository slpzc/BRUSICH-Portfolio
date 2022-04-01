<template>
  <client-only>
    <div>
      <div v-if="needToLoad">
        <div class="objects-map row-block"></div>
        <yandex-map
          ref="myMap"
          :coords="[10, 10]"
          class="full-width"
          :zoom="10"
          :scroll-zoom="false"
          @map-was-initialized="ready"
        >
        </yandex-map>
      </div>
    </div>
  </client-only>
</template>

<script>
import { loadYmap } from 'vue-yandex-maps';
import { API_KEY } from '@/assets/config/yandex.js';
import { MARKER_URI } from '@/assets/config/variables.js';
import housesConfig from '@/assets/config/houses.js';
import yandexMixin from '@/assets/mixins/yandex.js';

import getImages from '@/assets/mixins/getImages.js';

export default {
  name: 'YMap',
  mixins: [yandexMixin, getImages],

  data() {
    return {
      needToLoad: false,
      markers: [],
    }
  },

  async mounted() {
    await loadYmap({
      apiKey: API_KEY,
    });
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
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/css/mixin';
@import '~/assets/css/templates';

.ymap-container {
  height: 454px;

  [class$='__toolbar'],
  [class$='__bottom'] {
    display: none;
  }
}
</style>
