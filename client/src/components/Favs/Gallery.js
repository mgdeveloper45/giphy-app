// import React, { useEffect, useState } from 'react'
import React from 'react'
import GIF from '../GIF/GIF'
import styled from 'styled-components'

const Text = styled.p`
  color: white;
  font-size: 2rem;
  text-align: center;
`

const FavsGallery = index => {
  const storedFavs = JSON.parse(window.localStorage.getItem('Favs'))
  const emptyFavsMessage = <Text>No Saved Favs Yet!</Text>

  if (storedFavs === undefined || null) {
    return emptyFavsMessage
  } else {
    return <GIF gifArray={storedFavs} index={index} />
  }
}

export default FavsGallery
