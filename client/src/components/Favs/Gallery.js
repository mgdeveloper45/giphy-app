// import React, { useEffect, useState } from 'react'
import React from 'react'
import GIF from '../GIF/GIF'
import styled from 'styled-components'

const FavsGallery = index => {
  const storedFavs = JSON.parse(window.localStorage.getItem('Favs'))
  const emptyFavsMessage = `No Saved Favs Yet!`

  const GalleryGIF = styled(GIF)`
    width: 12.5rem;
  `

  if (storedFavs === undefined || null) {
    return emptyFavsMessage
  } else {
    return <GalleryGIF gifArray={storedFavs} index={index} />
  }
}

export default FavsGallery
