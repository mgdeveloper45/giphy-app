import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";


import SearchBar from "./components/SearchBar";
import ImgContainer from "./components/ImgContainer.js";
// import Carousel from "./components/Carousel.js";



function App() {
  
  
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    (async () => {
      axios
        .get("/api")
        .then((res) => {
          console.log(res.data.data);
          setTrending([...trending, ...res.data.data]);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  return (
    <div className="App">
      <SearchBar />
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
