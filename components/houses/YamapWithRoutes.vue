<template>
  <div class="distance-calc column-block">
    <div class="calc-header column-block">
      <div class="calc-header__title">Рассчитаем доставку до вашего участка</div>

      <div class="row-block">
        <div class="calc-content row-block">
          <div class="calc-content__title">Расстояние:</div>
          <div class="calc-content__value">{{ distance }} км</div>
        </div>

        <div class="calc-content row-block">
          <div class="calc-content__title">Бесплатно</div>
          <div class="calc-content__value">Первые 500 км</div>
        </div>

        <div class="calc-content row-block">
          <div class="calc-content__title">Оплачиваете:</div>
          <div class="calc-content__value">{{ clientPayFor }} км</div>
        </div>
      </div>

      <div class="total row-block">
        <div class="total__title">Итого:</div>
        <div class="total__value row-block">
          {{ clientPayFor * $options.PRICE_PER_KM }}
          <div class="light">₽</div>
        </div>
      </div>
    </div>

    <client-only>
      <yandex-map
        ref="myMap"
        :coords="$options.DEFAULT_COORDS"
        class="full-width"
        :zoom="$options.MAP_ZOOM"
        :scroll-zoom="false"
        @map-was-initialized="ready"
        @click="setPoint"
      >
      </yandex-map>
    </client-only>
  </div>
</template>

<script>
import { loadYmap } from 'vue-yandex-maps';
import yandexMixin from '@/assets/mixins/yandex.js';
import { API_KEY } from '@/assets/config/yandex.js';

export default {
  name: 'DistanceCalc',
  mixins: [yandexMixin],
  FREE_KM: 500,
  PRICE_PER_KM: 100,
  FROM_COORDS: [58.812924, 36.500804],

  data() {
    return {
      distance: 0,
      clientPayFor: 0,
      route: null,
      address: null,
      buildingRoute: false,
    };
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

      const searchControl = new ymaps.control.SearchControl({
        options: {
          useMapBounds: true,
          noCentering: true,
          noPopup: true,
          noPlacemark: true,
          placeholderContent: 'Адрес доставки',
          size: 'large',
          float: 'none',
          position: {
            left: 10,
            top: 10,
          },
        },
      });

      map.controls.add(searchControl);

      const warehouse = new ymaps.Placemark(
        this.$options.FROM_COORDS,
        {
          iconContent: 'БРУСИЧЪ',
        },
        {
          preset: 'islands#darkGreenStretchyIcon',
          draggable: false,
        }
      );

      map.geoObjects.add(warehouse);

      searchControl.events.add('resultselect', (e) => {
        if (this.buildingRoute) return;
        this.buildingRoute = true;

        const coords = e.originalEvent.target.state._data.results[0].geometry.getCoordinates();
        this.spawnPath(coords);
      });
    },

    setPoint(e) {
      if (this.buildingRoute) return;
      this.buildingRoute = true;

      const coords = e.get('coords');
      this.spawnPath(coords);
    },

    spawnPath(coords) {
      const map = this.$refs.myMap.myMap;

      if (this.route) {
        map.geoObjects.remove(this.route);
      }

      ymaps
        .route([coords, this.$options.FROM_COORDS], {
          mapStateAutoApply: true,
        })
        .then((route) => {
          this.buildingRoute = false;
          this.route = route;

          route.getPaths().options.set({
            strokeColor: '2CC37C',
            opacity: 0.9,
          });

          if (this.address) {
            map.geoObjects.remove(this.address);
          }

          this.address = new ymaps.Placemark(
            coords,
            {
              iconContent: 'Адрес Доставки',
            },
            {
              preset: 'islands#darkGreenStretchyIcon',
              draggable: true,
            }
          );

          this.address.events.add('dragend', () => {
            if (this.buildingRoute) return;

            const coords = this.address.geometry.getCoordinates();

            map.geoObjects.remove(this.route);

            ymaps
              .route([coords, this.$options.FROM_COORDS], {
                mapStateAutoApply: true,
              })
              .then((route) => {
                this.buildingRoute = false;
                this.route = route;
                this.countDist(route.getPaths().get(0).getLength());

                route.getPaths().options.set({
                  strokeColor: '2CC37C',
                  opacity: 0.9,
                });

                map.geoObjects.add(route);
              });
          });

          map.geoObjects.add(this.address);
          this.countDist(route.getPaths().get(0).getLength());

          map.geoObjects.add(route);
        });
    },

    countDist(length) {
      const km = parseInt(length / 1000);

      this.distance = km;
      this.clientPayFor = Math.max(km - this.$options.FREE_KM, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/css/mixin';
@import '~/assets/css/templates';

.distance-calc {
  padding: 0 vw(162px);
  margin-top: vw(100px);
  overflow: hidden;

  .calc-header {
    background-color: #f8f8f8;
    border-top-left-radius: vw(10px);
    border-top-right-radius: vw(10px);
    padding: vw(35px) vw(70px) vw(40px) vw(70px);

    &__title {
      @include font(Lato, 900, normal, vw(40px));
      margin-bottom: vw(40px);
    }

    .calc-content {
      margin-right: vw(45px);

      &:last-child {
        margin-right: 0;
      }

      &__title {
        @include font(Lato, 900, normal, vw(24px));
        color: #333333;
      }

      &__value {
        @include font(Lato, 900, normal, vw(24px));
        color: rgba(#333333, 0.5);
        margin-left: vw(31px);
      }
    }

    .total {
      margin-top: vw(40px);

      &__title {
        @include font(Lato, normal, normal, vw(30px));
        color: #333333;
      }

      &__value {
        @include font(Lato, 900, normal, vw(28px));
        color: #2cc37c;
        margin-left: vw(18px);

        .light {
          font-weight: normal;
        }
      }
    }
  }

  .ymap-container {
    height: 454px;

    &::v-deep .ymaps-2-1-79-islets_icon-with-caption {
      display: none;
    }

    &::v-deep .ymaps-2-1-79-search::after {
      box-shadow: unset !important;
    }

    &::v-deep .ymaps-2-1-79-image-with-content {
      ymaps {
        display: flex;
        flex-direction: row;
      }
    }

    &::v-deep .marker-container {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
