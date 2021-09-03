const router = require('express').Router()
require('dotenv').config()
const axios = require('axios')

router.get('/api', async (req, res) => {
  try {
    const gifRes = await axios.get(
      `https://api.giphy.com/v1/gifs/categories?api_key=${process.env.API_KEY}`
    )
    res.json(gifRes.data)
  } catch (err) {
    res.json(err)
  }
})

router.get('/api/random', async (req, res) => {
  try {
    const gifRes = await axios.get(
      `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=g`
    )
    res.json(gifRes.data.data.images.fixed_height.url)
  } catch {
    res.json(err)
  }
})

router.get('/api/trending', async (req, res) => {
  try {
    const gifRes = await axios.get(
      `http://api.giphy.com/v1/gifs/trending?limit=30&api_key=${process.env.API_KEY}`
    )
    res.json(gifRes.data)
  } catch {
    res.json(err)
  }
})

router.get('/api/animals', async (req, res) => {
  try {
    const gifRes = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=animal&limit=30&api_key=${process.env.API_KEY}`
    )
    res.json(gifRes.data)
  } catch {
    res.json(err)
  }
})

router.get('/api/anime', async (req, res) => {
  try {
    const gifRes = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=anime&limit=30&api_key=${process.env.API_KEY}`
    )
    res.json(gifRes.data)
  } catch {
    res.json(err)
  }
})

router.get('/api/search', async (req, res) => {
  try {
    const gifRes = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${req.query.q}&limit=30&api_key=${process.env.API_KEY}`
    )
    res.json(gifRes.data)
  } catch (err) {
    res.json(err)
  }
})

router.get('/api/gaming', async (req, res) => {
  try {
    const gamingRes = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=gaming&limit=30&api_key=${process.env.API_KEY}`
    )
    const gamingArr = gamingRes.data.data.map(item => {
      return {
        gifAnimated: item.images.fixed_height_small.url,
      }
    })
    res.json(gamingArr)
  } catch (err) {
    console.log(err)
  }
})

router.get('/api/categories', async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.giphy.com/v1/gifs/categories?api_key=${process.env.API_KEY}`
    )
    const array = result.data.data.map(({ name, gif }) => {
      return {
        name: name,
        image: gif.images.fixed_width.url,
      }
    })
    res.json(array)
    console.log(array)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
