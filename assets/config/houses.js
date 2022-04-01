import APIRequest from '@/assets/utils/APIRequest';
import { SPECIFITY } from '@/assets/config/variables';

export default {
  availableRoutes: ['bani-iz-brusa', 'karkasnie-doma', 'doma-iz-brusa', 'doma-pod-usadku', 'barnhausy'],

  titles: {
    'bani-iz-brusa': 'Бани из бруса',
    'karkasnie-doma': 'Каркасные дома',
    'doma-iz-brusa': 'Дома из бруса',
    'doma-pod-usadku': 'Дома под усадку',
    barnhausy: 'Барнхаусы',
  },

  ourWorks: new APIRequest({
    path: 'our-works',
    fields: ['adress', 'coordinate', 'date', 'date_finish', 'date_start', 'description', 'name', 'object', 'price', 'project', 'project_url', 'type'],
  }),

  sizes: {
    'doma-iz-brusa': new APIRequest({ path: 'size-dbs' }),
    'karkasnie-doma': new APIRequest({ path: 'size-kds' }),
    'bani-iz-brusa': new APIRequest({ path: 'size-bbs' }),
    barnhausy: new APIRequest({ path: 'size-bhs' }),
    'doma-pod-usadku': new APIRequest({ path: 'size-dpus' }),
  },

  specificities: {
    // since there is an error with strapi, specificity-banis = specificity
    'doma-iz-brusa': new APIRequest({ path: SPECIFITY }),
    'karkasnie-doma': new APIRequest({ path: SPECIFITY }),
    'doma-pod-usadku': new APIRequest({ path: SPECIFITY }),
    barnhausy: new APIRequest({ path: SPECIFITY }),
    'bani-iz-brusa': new APIRequest({ path: SPECIFITY }),
  },

  aliases: {
    'doma-iz-brusa': 'db',
    'karkasnie-doma': 'kd',
    'doma-pod-usadku': 'dpu',
    barnhausy: 'bh',
    'bani-iz-brusa': 'bb',
  },

  houses: {
    'doma-iz-brusa': new APIRequest({ path: 'DBs' }),
    'karkasnie-doma': new APIRequest({ path: 'KDs' }),
    'doma-pod-usadku': new APIRequest({ path: 'DPUs' }),
    barnhausy: new APIRequest({ path: 'BHs' }),
    'bani-iz-brusa': new APIRequest({ path: 'BBs' }),
  },

  prices: new APIRequest({ path: 'Prices' }),
  limits: new APIRequest({ path: 'limits' }),
  reviews: new APIRequest({ path: 'reviews' }),

  equipments: {
    'doma-iz-brusa': new APIRequest({ path: 'complectation-db' }),
    'karkasnie-doma': new APIRequest({ path: 'complectation-kd' }),
    'doma-pod-usadku': new APIRequest({ path: 'complectation-db' }),
    barnhausy: new APIRequest({ path: 'complectation-kd' }),
    'bani-iz-brusa': new APIRequest({ path: 'complectation-bb' }),
  },

  extra: {
    'doma-iz-brusa': new APIRequest({ path: 'dop-db' }),
    'karkasnie-doma': new APIRequest({ path: 'dop-kd' }),
    'doma-pod-usadku': new APIRequest({ path: 'dop-db' }),
    barnhausy: new APIRequest({ path: 'dop-kd' }),
    'bani-iz-brusa': new APIRequest({ path: 'dop-bb' }),
  },

  specificitiesOptions: {
    default: [
      {
        title: 'С балконом',
        filter: {
          specificity: {
            specificity: {
              $eq: 'С балконом',
            },
          },
        },
      },
      {
        title: 'С террасой',
        filter: {
          specificity: {
            specificity: {
              $eq: 'С террасой',
            },
          },
        },
      },
      {
        title: 'С верандой',
        filter: {
          specificity: {
            specificity: {
              $eq: 'С верандой',
            },
          },
        },
      },
      {
        title: 'С эркером',
        filter: {
          specificity: {
            specificity: {
              $eq: 'С эркером',
            },
          },
        },
      },
      {
        title: 'Со вторым светом',
        filter: {
          specificity: {
            specificity: {
              $eq: 'Со вторым светом',
            },
          },
        },
      },
    ],
    'bani-iz-brusa': [
      {
        title: 'С балконом',
        filter: {
          specificity: {
            specificity: {
              $eq: 'С балконом',
            },
          },
        },
      },
      {
        title: 'С террасой',
        filter: {
          specificity: {
            specificity: {
              $eq: 'С террасой',
            },
          },
        },
      },
      {
        title: 'С верандой',
        filter: {
          specificity: {
            specificity: {
              $eq: 'С верандой',
            },
          },
        },
      },
      {
        title: 'С санузлом',
        filter: {
          specificity: {
            specificity: {
              $eq: 'С санузлом',
            },
          },
        },
      },
      {
        title: 'Со спальней ',
        filter: {
          specificity: {
            specificity: {
              $eq: 'Со спальней ',
            },
          },
        },
      },
      {
        title: 'С кухней',
        filter: {
          specificity: {
            specificity: {
              $eq: 'С кухней',
            },
          },
        },
      },
      {
        title: 'С эркером',
        filter: {
          specificity: {
            specificity: {
              $eq: 'С эркером',
            },
          },
        },
      },
    ],
  },
};
