const CRUD = {
  add: ({ state, setState }, newItem) => {
    // console.log('New Item(s)', { newItem })
    const newState = [...state, newItem]
    setState(newState)
    localStorage.setItem('Favs', JSON.stringify(newState))
  },
  delete: index => {},
}
export default CRUD
