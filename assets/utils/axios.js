import axios from 'axios';

export default axios.create({
  baseURL: 'https://strapi.preprod.brusich.ru/api',
});

export const imageAPI = axios.create({
  baseURL: 'https://strapi.preprod.brusich.ru',
});
