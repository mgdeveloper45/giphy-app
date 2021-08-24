import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

// import SearchBar from "./components/SearchBar";
import ImgContainer from "./components/ImgContainer.js";
// import Carousel from "./components/Carousel.js";

function App() {
  const [trending, setTrending] = useState([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const onClick = (e) => {
    e.preventDefault();
    setSearch(value);
  };

  const onSubmit = (e) => {
    axios
      .get(`/api/search/${value}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    
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
      <button onClick={onSubmit} type="submit">
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
    </div>
  );
}

export default App;
