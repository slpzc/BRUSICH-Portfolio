<template>
<div id="contacts">
  <section class="contacts-text">
    <div class="global-wrapper">
      <b class="block-title">Контакты</b>
      <b class="block-title map">Мы на карте</b>
      <div class="office-address">
        <b>Адрис офиса</b>
        <p>МО, г. Котельники, Дзержинское шоссе, вл 7/7, поселок Малоэтажная страна, дом 19</p>
      </div>
      <div class="production-contacts">
        <b>Адрес производства</b>
        <p>МО, г. Котельники, Дзержинское шоссе, вл 7/7, поселок Малоэтажная страна, дом 19</p>
      </div>
      <div class="yandex-map">
          <client-only>
            <yandex-map
              ref="myMap"
              :coords="[55.7442198, 37.6292938]"
              class="full-width full-height"
              :zoom="4"
              :scroll-zoom="false"
              @map-was-initialized="ready"
            >
              <!-- <ymap-marker v-if="marker" :marker-id="0" :coords="$options.COORDS" :icon="marker.icon" /> -->
            </yandex-map>
          </client-only>
      </div>
    </div>
  </section>
  <section class="our-contacts">
    <div class="global-wrapper">
      <b class="block-title">Наши контакты</b>
      <div class="our-social">
        <div class="num__left">
          <b class="block-title">+7 (958) 582 61-29</b>
          <p><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="2.3125" cy="2.75507" rx="2.15625" ry="2.1485" fill="#2CC37C"/>
          </svg>
            Без выходных 9:00 - 18:00</p>
        </div>
        <div class="email__right">
          <b class="block-title">Электронная почта</b>
          <p><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.78125 0.887695H1.15625C0.563281 0.887695 0.078125 1.37111 0.078125 1.96194V8.40744C0.078125 8.99827 0.563281 9.48169 1.15625 9.48169H9.78125C10.3742 9.48169 10.8594 8.99827 10.8594 8.40744V1.96194C10.8594 1.37111 10.3742 0.887695 9.78125 0.887695ZM9.56563 3.17047L6.04016 5.36731C5.68977 5.58753 5.24773 5.58753 4.89734 5.36731L1.37188 3.17047C1.23711 3.08453 1.15625 2.93951 1.15625 2.78374C1.15625 2.42387 1.54977 2.20902 1.85703 2.39702L5.46875 4.64757L9.08047 2.39702C9.38773 2.20902 9.78125 2.42387 9.78125 2.78374C9.78125 2.93951 9.70039 3.08453 9.56563 3.17047Z" fill="#2CC37C"/>
          </svg>
            brusich-stroy@mail.ru</p>
        </div>
      </div>
      <customized-button :padding="'14px 0'">Позвоните нам</customized-button>
    </div>
  </section>
</div>
</template>

<script>
import CustomizedButton from '../components/Button'
import { MARKER_URI } from '@/assets/config/variables.js';
export default {
  name: 'contacts-page',
  components: {
    CustomizedButton,
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

      map.geoObjects.add(
        new ymaps.Placemark([55.7442198, 37.6292938], null, {
          iconLayout: 'default#image',
          iconImageHref: MARKER_URI,
          iconImageSize: [43, 43],
        })
      );
      const panel  = document.querySelector('.ymaps-2-1-79-controls-pane')
      const copyright = document.querySelector('.ymaps-2-1-79-map-copyrights-promo')
      copyright.style.display = 'none'
      panel.style.display = 'none'
    },
  },
}
</script>

<style lang="scss" scoped>
#contacts{
  padding-top: 40px;
  .contacts-text{
    .global-wrapper{
      flex-direction: column;
      .map{
        padding-top: 32px;
      }
      .office-address, .production-contacts{
        padding-top: 14px;
        b{
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: #333333;
        }
        p{
          padding-top: 8px;
          font-weight: 400;
          font-size: 13.5516px;
          line-height: 16px;
          color: rgba(51, 51, 51, 0.5);
        }
      }
      .yandex-map{
        margin-top: 14px;
        height: 127px;
        position: relative;
        border-radius: 20px !important;
        .ymap-container{
          height: 127px;
          border-radius: 20px !important;
        }
        *{
          border-radius: 20px !important;
        }
      }
    }
  }
  .our-contacts{
    padding-top: 20px;
    .global-wrapper{
      flex-direction: column;
      .our-social{
        display: flex;
        align-items: center;
        gap: 27px;
        padding-top: 15px;
        .num__left, .email__right{
          b{
            font-weight: 700;
            font-size: 15.525px;
            line-height: 19px;
            color: #333333;
          }
          p{
            display: flex;
            align-items: center;
            padding-top: 6px;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            color: #333333;
            svg{
              padding-right: 6px;
            }
          }
        }
      }
      button{
        margin-top: 40px;
      }
    }
  }
}
.ymaps-2-1-79-inner-panes{
  border-radius: 20px !important;
}
</style>
