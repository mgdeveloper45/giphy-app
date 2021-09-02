import React from 'react'
import styled from 'styled-components'
import { AddFav } from '../Favs/index.js'



const GIF = ({ gif, favs, setFavs, index }) => {
  return (
    <Gallery key={index}>
      <img key={index} src={gif} alt='Broken' />
      <AddFav favs={favs} setFavs={setFavs} gif={gif} index={index} />
    </Gallery>
  )
}

export default GIF
