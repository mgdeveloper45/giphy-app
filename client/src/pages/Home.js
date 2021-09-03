import React from "react";
import Trending from "../components/Trending.js";
import Animals from "../components/Animals.js";
import Anime from "../components/Anime.js";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [anime, setAnime] = useState([]);



  useEffect(() => {
    ;(async () => {
      try {
        const getRequest = await axios.get(`/api`)
        const apiData = getRequest.data.data

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

        console.log({ apiData }, { gifArray })
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const trendingResults = await axios.get(`/api/trending`)
        const apiData = trendingResults.data.data

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

        setTrending(gifArray)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const animalResults = await axios.get(`/api/animals`)
        const apiData = animalResults.data.data

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
        setAnimals(gifArray)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const animeRes = await axios.get(`/api/anime`)
        const apiData = animeRes.data.data

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
        setAnime(gifArray)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])
  return (
    <div>
      <Trending trending={trending} />
      <Animals animals={animals} />
      <Anime anime={anime} />
    </div>
  );
};

export default Home;
