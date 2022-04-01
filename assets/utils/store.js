export const setItem = (path, data) => {
  if (window.localStorage) {
    localStorage.setItem(
      path,
      JSON.stringify({
        data,
        date: Date.now(),
      })
    );

    return true;
  } else {
    return false;
  }
};

export const getItem = (path) => {
  if (window.localStorage) {
    return localStorage.getItem(path);
  }

  return null;
};
