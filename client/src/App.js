import { useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'

function App() {
  useEffect(() => {
    axios
      .get('/api')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='App'>
      <SearchBar />
    </div>
  )
}

export default App
