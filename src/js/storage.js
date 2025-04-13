//Робота з loacalStorage
export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLocalStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(`load from local storage ${error}`);
  }
}

export function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}