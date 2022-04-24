import Cookies from 'js-cookie'

export const saveToCookie = (key: string, value: string, expires?: number) => {
  Cookies.set(key, value, {expires: expires, secure: true});
};

export const getFromCookie = (key: string) => {
  return Cookies.get(key);
};

export const removeFromCookie = (key: string) => {
  Cookies.remove(key)
};

export const ClearCookie = () => {
  localStorage.clear()
};

saveToCookie.defaultValue = {
  expires: 365
}




