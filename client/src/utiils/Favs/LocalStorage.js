const LocalStorage = {
  access: (setLocalState, storageKey) => {
    if (LocalStorage.storedItems === null) {
      window.localStorage.setItem(storageKey, JSON.stringify([]))
    } else {
      setLocalState(LocalStorage.storedItems)
    }
  },
  storedItems: storageKey => {
    JSON.parse(window.localStorage.getItem(storageKey))
  },
}
export default LocalStorage
