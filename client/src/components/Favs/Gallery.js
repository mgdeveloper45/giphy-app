// import React, { useEffect, useState } from 'react'
import React from 'react'
import GIF from '../GIF/GIF'
import styled from 'styled-components'

const FavsGallery = () => {
  const getSavedFavs = JSON.parse(window.localStorage.getItem('Favs'))
  const emptyFavsMessage = `No Saved Favs Yet!`

  const GalleryGIF = styled(GIF)`
    width: 12.5rem;
  `

  if (getSavedFavs === undefined || null) {
    return emptyFavsMessage
  } else {
    return getSavedFavs.map((gif, index) => {
      return <GalleryGIF gif={gif} index={index} />
    })
  }
}
export default FavsGallery
