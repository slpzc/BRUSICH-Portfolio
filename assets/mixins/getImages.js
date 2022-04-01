import { imageAPI } from '@/assets/utils/axios';
export default {
  methods: {
    getImages(imgs, size = 'small') {
      if (!imgs) return [];

      return imgs
        .map((el) => el.attributes)
        .map((val) => val?.formats[size]?.url || val?.formats.medium?.url || val?.formats.small?.url)
        .filter((v) => v)
        .map((url) => new URL(`${imageAPI.defaults.baseURL}${url}`).href);
    },
  },
};
