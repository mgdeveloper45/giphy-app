import React from "react";
import Trending from "../components/Trending.js";
import Animals from "../components/Animals.js";
import Anime from "../components/Anime.js";
import Gaming from "../components/Gaming.js";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [anime, setAnime] = useState([]);
  const [gaming, setGaming] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const apiData = await axios.get(`/api`);
        console.log("api object ==> ", apiData.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    ;(async () => {
      try {
        const trendingResults = await axios.get(`/api/trending`)
        setTrending(trendingResults.data)
      } catch (err) {
        console.log(err)
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

  useEffect(() => {
    (async () => {
      try {
        const animeRes = await axios.get(`/api/anime`);
        setAnime(animeRes.data);
        
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  
  useEffect(() => {
    (async () => {
      try {
        const gamingRes = await axios.get(`/api/gaming`);
        setGaming(gamingRes.data);
        
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      <Trending trending={trending} />
      <Animals animals={animals} />
      <Anime anime={anime} />
      <Gaming gaming={gaming} />
    </div>
  );
};

export default Home;
