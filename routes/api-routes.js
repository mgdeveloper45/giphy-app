const router = require("express").Router();
require("dotenv").config();
const axios = require('axios')

router.get('/api', async (req, res) => {
  axios
    .get(`http://api.giphy.com/v1/gifs/trending?limit=30&api_key=${process.env.API_KEY}`)
    .then(response => {
      console.log(response.data)
      res.json(response.data)
    })
    .catch(err => {
      res.json(err)
    })
})

router.get('/trending', (req, res) => {
  console.log('Successfully hit Internal API')
})



module.exports = router;
