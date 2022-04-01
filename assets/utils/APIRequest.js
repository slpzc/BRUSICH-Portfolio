import qs from 'qs';
import API from './axios';
import { getItem, setItem } from './store';
import { CACHE_EXPIRE_TIME } from '@/assets/config/variables.js';

export default class APIRequest {
  constructor({ path, fields = null }) {
    this.path = path;
    this.fields = fields;
  }

  static processResponse(res, filterResponse) {
    if (!filterResponse) return res;
    const data = res.data.data;
    if (!Array.isArray(data)) return data;

    const filteredResponse = [];

    for (const item of data) {
      console.log('item');
      console.log(item);
      filteredResponse.push(item.attributes);
    }

    return filteredResponse;
  }

  static _callAPI({
    path,
    pagination = {},
    filterResponse = true,
    callback,
    filters = {},
    fields = [],
    populate,
    cache = false,
    asynchronous = false,
  }) {
    if (cache && process.client) {
      const savedData = getItem(path);

      if (savedData != null) {
        const { data, date } = JSON.parse(savedData);
        const now = Date.now();

        if (now < date + CACHE_EXPIRE_TIME) {
          return callback(APIRequest.processResponse(data, filterResponse));
        }
      }
    }

    const query = qs.stringify(
      {
        populate,
        filters,
        fields,
        pagination,
      },
      {
        encodeValuesOnly: true,
      }
    );

    if (asynchronous) {
      return new Promise((resolve) => {
        API.get(`${path}?${query}`)
          .then((res) => APIRequest.processResponse(res, filterResponse))
          .then(resolve);
      });
    }

    API.get(`${path}?${query}`)
      .then((res) => {
        if (cache && process.client) {
          setItem(path, res);
        }

        return APIRequest.processResponse(res, filterResponse);
      })
      .then(callback);
  }

  static staticRequest() {
    return APIRequest._callAPI(...arguments);
  }

  createRequest() {
    return APIRequest._callAPI({ ...arguments[0], path: this.path, fields: this.fields || [...arguments][0].fields || [] });
  }
}
