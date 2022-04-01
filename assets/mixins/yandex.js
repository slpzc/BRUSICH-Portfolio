import { API_KEY } from '@/assets/config/yandex.js';

export default {
  DEFAULT_COORDS: [58.812924, 36.500804],
  MAP_ZOOM: 5,
  created() {
    this.$axios
      .get(`https://api-maps.yandex.ru/2.1?lang=en_RU&apikey=${API_KEY}`)
      .then(() => {
        console.log('srab')
      })
      .catch(() => {
      });
  },

  data() {
    return {
      needToLoad: false,
    };
  },
};
