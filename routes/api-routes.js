const router = require("express").Router();
require("dotenv").config();
const axios = require("axios");

router.get("/api/trending", async (req, res) => {
  await axios
    .get(
      `http://api.giphy.com/v1/gifs/trending?limit=30&api_key=${process.env.API_KEY}`
    )
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.get("/api/search/:value", async (req, res) => {
//   console.log(req.params.value);
//   await axios
//     .get(
//       `http://api.giphy.com/v1/gifs/search?q=${req.params.value}?limit=30&api_key=${process.env.API_KEY}`
//     )
//     .then((response) => {
//       // console.log(response.data);
//       res.json(response.data);
//     })
//     .catch((err) => {
//       res.json(err);
//     })
// });



  router.get('/api/search' , async(req,res) => {
    try {
      const gifRes = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.query.q}&limit=30&api_key=${process.env.API_KEY}`
      );
      const gifArray = gifRes.data.data.map((item) => {
        return {
          gifAnimated: item.images.fixed_height.url,

        }
      })
      res.json(gifArray)
    } catch(err) {
      res.json(err)
    }
  });




module.exports = router;
