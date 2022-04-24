export const saveToLocal = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const getFromLocal = (key: string) => {
  return localStorage.getItem(key)
}

export const removeFromLocal = (key: string) => {
  localStorage.removeItem(key)
}

export const ClearLocal = () => {
  localStorage.clear()
}




