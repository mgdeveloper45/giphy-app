import React from 'react'
import Trending from '../components/Trending.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  const [trending, setTrending] = useState([]);

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
    <div>
      <Trending trending={trending} />
    </div>
  );
}

export default Home
