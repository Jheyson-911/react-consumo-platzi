export const setToken = token => {
  localStorage.setItem('token', token);
};

export const clearToken = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const tokenExist = () => {
  if (localStorage.getItem('token') !== undefined) {
    return true;
  } else {
    return false;
  }
};
