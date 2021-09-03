const LocalStorage = {
  storage: storageKey => {
    JSON.parse(window.localStorage.getItem(storageKey))
  },
  access: (setLocalState, storageKey) => {
    if (LocalStorage.storedItems === null) {
      window.localStorage.setItem(storageKey, JSON.stringify([]))
    } else {
      setLocalState(LocalStorage.storedItems)
    }
  },
}
export default LocalStorage
