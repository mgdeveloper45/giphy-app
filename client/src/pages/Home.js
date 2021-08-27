import React from 'react'
import Trending from '../components/Trending.js';
import Animals from '../components/Animals.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  const [trending, setTrending] = useState([]);
  const [animals, setAnimals] = useState([]);


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

  useEffect(() => {
    (async () => {
      try {
        const animalResults = await axios.get(`/api/animals`);
        setAnimals(animalResults.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);


  return (
    <div>
      <Trending trending={trending} />
      <Animals animals={animals} />
      
    </div>
  );
}

export default Home
