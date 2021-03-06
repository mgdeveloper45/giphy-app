import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";

import Button from "./components/SearchBar/Button.js";
import Input from "./components/SearchBar/Input.js";
import AppContainer from "./components/AppContainer.js";
import Search from "./components/Search.js";
import Nav from "./components/Nav.js";
import Home from "./pages/Home.js";
import SearchGifsPage from "./pages/SearchGifsPage.js";
import Favorites from "./pages/Favs";
import Random from "./pages/Random.js";
import Categories from './pages/Categories.js'

function App() {
  const [value, setValue] = useState("");
  const [searchGifs, setSearchGifs] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [currentSearch, setCurrentSearch] = useState("");

  const onChange = (e) => {
    setValue(e.target.value.toUpperCase());
  };

  const searchForGifs = async (search) => {
    try {
      const searchResults = await axios.get(`/api/search?q=${search}`);
       const apiData = searchResults.data.data

       const giphyData = () => {
         return apiData.map((gif, index) => {
           // console.log(gif)
           const dataModel = {
             ID: gif.id,
             Title: gif.title,
             AnimatedURL: gif.images.fixed_height.url,
             StillURL: gif.images.fixed_height_still.url,
             EmbedURL: gif.embed_url,
           }
           return dataModel
         })
       }
       const gifArray = giphyData()
       setSearchGifs(gifArray)
      document.querySelector("#searchInput").value = "";
      setValue("");
    } catch (err) {
      console.log(err);
    }
  };

  const initiateSearch = () => {
    setToggle(true);
    searchForGifs(value);
    setCurrentSearch(value);
  };

  return (
    <AppContainer>
      <Router>
        <Nav />
        <Search>
          <Input onChange={onChange} />
          <Button value={value} initiateSearch={initiateSearch} type="submit" />
        </Search>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/searchpage">
            <SearchGifsPage
              currentSearch={currentSearch}
              toggle={toggle}
              value={value}
              searchGifs={searchGifs}
            />
          </Route>
          <Route path="/categories" component={Categories} />
          <Route path="/favs" component={Favorites} />
          <Route path="/random" component={Random} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
