export const createSizesFilter = (res, i, key) => {
  return {
    title: res[i][key],
    filter: { [key]: { $eq: res[i][key] } },
  };
};
