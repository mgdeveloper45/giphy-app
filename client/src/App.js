
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

// import SearchBar from "./components/SearchBar";
import ImgContainer from "./components/ImgContainer.js";
// import Carousel from "./components/Carousel.js";

function App() {
  const [trending, setTrending] = useState([]);
  const [value, setValue] = useState("");
  
  const [searchGifs, setSearchGifs] = useState([])

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };


  const searchForGifs = async (search) => {
    try {
      const searchResults = await axios.get(`/api/search?q=${search}`)
      setSearchGifs(searchResults.data)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    (async () => {
      axios
        .get("/api/trending")
        .then((res) => {
          console.log(res.data.data);
          setTrending([...trending, ...res.data.data]);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  return (
    <div className="App">
      <input onChange={onChange}></input>
      <button onClick={() => searchForGifs(value)} type="submit">
        search
      </button>

      {/* <SearchBar /> */}
      {/* <Carousel trending={trending}></Carousel> */}
      <ImgContainer>
        {trending.map((trending, index) => (
          <img
            src={trending.images.fixed_height.url}
            key={index}
            alt="broked"
          />
        ))}
      </ImgContainer>
      <ImgContainer>
        {searchGifs.map((gif, index) => (
          <img key={index} src={gif.gifAnimated} alt="broken" />
        ))}
      </ImgContainer>
    </div>
  );
}

export default App;
