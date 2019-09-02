export const storageKeys = {
  AUTH_TOKEN: 'AUTH_TOKEN'
};

export const getAuthToken = () => sessionStorage.getItem(storageKeys.AUTH_TOKEN);

export const setAuthToken = token => sessionStorage.setItem(storageKeys.AUTH_TOKEN, token);

export const clearAuthToken = () => sessionStorage.removeItem(storageKeys.AUTH_TOKEN);
