import { useEffect, useState } from "react";
import axios from "axios";

// import SearchBar from "./components/SearchBar";

import Trending from "./components/Trending.js";
import SearchResults from "./components/SearchResults.js";
// import SearchBar from "./components/SearchBar.js";
import Button from "./components/SearchBar/Button.js";
import Input from "./components/SearchBar/Input.js";
import AppContainer from "./components/AppContainer.js";

function App() {
  const [trending, setTrending] = useState([]);
  const [value, setValue] = useState("");
  const [searchGifs, setSearchGifs] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
    
  };

  const searchForGifs = async (search) => {
    try {
      const searchResults = await axios.get(`/api/search?q=${search}`);
      setSearchGifs(searchResults.data);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const trendingResults = await axios.get(`/api/trending`);
        setTrending(trendingResults.data);
        
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <AppContainer>
      <div>
        {" "}
        <Input onChange={onChange} />
        <Button onClick={() => searchForGifs(value)} type="submit" />
      </div>

      
      <Trending trending={trending} />

      
      <SearchResults searchGifs={searchGifs} />
    </AppContainer>
  );
}

export default App;
