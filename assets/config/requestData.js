import { PAGE_SIZE } from '@/assets/config/variables';

export default {
  houses: {
    fields: ['price_1', 'id', 'URL', 'description', 'name', 'name_description', 'rooms', 's', 'size', 's_outside'],
    populate: ['imgs', 'floor', 'specificity'],
    minPrice: 'price_1',
    pagination: {
      pageSize: PAGE_SIZE,
      withCount: true,
    },
  },
  prices: {
    fields: ['price_1', 'price_2', 'price_3', 'type'],
  },

  limits: {
    fields: ['min', 'max', 'path'],
  },

  equipments: {
    'doma-iz-brusa': {
      populate: ['point1', 'point2', 'point3', 'point4', 'point1.imgs', 'point2.imgs', 'point3.imgs', 'point4.imgs'],
      fields: ['header1', 'header2', 'header3', 'header4'],
    },
    'karkasnie-doma': {
      populate: ['point1', 'point1.imgs'],
      fields: [],
    },
    'doma-pod-usadku': {
      populate: ['point1', 'point2', 'point3', 'point4', 'point1.imgs', 'point2.imgs', 'point3.imgs', 'point4.imgs'],
      fields: ['header1', 'header2', 'header3', 'header4'],
    },
    barnhausy: {
      populate: ['point1', 'point1.imgs'],
      fields: [],
    },
    'bani-iz-brusa': {
      populate: ['point1', 'point2', 'point3', 'point4', 'point1.imgs', 'point2.imgs', 'point3.imgs', 'point4.imgs'],
      fields: ['header1', 'header2', 'header3', 'header4'],
    },
  },

  reviews: {
    fields: ['name', 'date', 'object', 'address', 'review'],
    populate: ['img'],
  },

  ourWorks: {
    populate: ['img_main', 'imgs'],
  },

  extra: {
    'doma-iz-brusa': {
      populate: ['point', 'point.imgs'],
    },
    'karkasnie-doma': {
      populate: ['point', 'point.imgs'],
    },
    'doma-pod-usadku': {
      populate: ['point', 'point.imgs'],
    },
    barnhausy: {
      populate: ['point', 'point.imgs'],
    },
    'bani-iz-brusa': {
      populate: ['point', 'point.imgs'],
    },
  },

  popular: {
    filters: { popular: true },
    populate: ['floor', 'imgs'],
  },
};
