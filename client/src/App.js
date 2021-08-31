import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import axios from "axios";


import Button from "./components/SearchBar/Button.js";
import Input from "./components/SearchBar/Input.js";
import AppContainer from "./components/AppContainer.js";
import Search from "./components/Search.js";
import Nav from "./components/Nav.js";
import Home from "./pages/Home.js";
import SearchGifsPage from "./pages/SearchGifsPage.js";
import Favorites from './pages/Favs'
function App() {
  const [value, setValue] = useState('')
  const [searchGifs, setSearchGifs] = useState([])

  const onChange = e => {
    setValue(e.target.value)
  }

  const searchForGifs = async search => {
    try {
      const searchResults = await axios.get(`/api/search?q=${search}`)
      setSearchGifs(searchResults.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AppContainer>
      <Router>
        <Nav />
        <Search>
          <Input onChange={onChange} />
          <Button
            onClick={() => {
              searchForGifs(value)
            }}
            type='submit'
          />
        </Search>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/searchpage'>
            <SearchGifsPage searchGifs={searchGifs} />
          </Route>
          <Route path='/favs' component={Favorites} />
        </Switch>
      </Router>
    </AppContainer>
  )
}

export default App;
