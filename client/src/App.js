import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";

import Button from "./components/SearchBar/Button.js";
import Input from "./components/SearchBar/Input.js";
import AppContainer from "./components/AppContainer.js";
import Search from "./components/Search.js";
import Nav from "./components/Nav.js";
import Home from "./pages/Home.js";
import SearchResults from "./components/SearchResults.js";
import SearchGifsPage from "./pages/SearchGifsPage.js";
import Favorites from "./pages/Favs";
import Random from "./pages/Random.js";

function App() {
  const [value, setValue] = useState("");
  const [searchGifs, setSearchGifs] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [currentSearch, setCurrentSearch] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const searchForGifs = async (search) => {
    try {
      const searchResults = await axios.get(`/api/search?q=${search}`);
      setSearchGifs(searchResults.data);
      document.querySelector("#searchInput").value = "";
      setValue("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContainer>
      <Router>
        <Nav />
        <Search>
          <Input onChange={onChange} />
          <Button
            onClick={() => {
              setToggle(true);
              searchForGifs(value);
              setCurrentSearch(value);
            }}
            type="submit"
          />
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
          <Route path="/favs" component={Favorites} />
          <Route path="/random" component={Random} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
