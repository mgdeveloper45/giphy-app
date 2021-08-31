import React, { useEffect, useState } from 'react'
import GIF from '../GIF'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`
// const GalleryGIF = styled(GIF)``

const FavsGallery = () => {
  const getSavedFavs = JSON.parse(window.localStorage.getItem('Favs'))
  return getSavedFavs.map((gif, index) => {
    return (
      <Container key={index}>
        <GIF gif={gif} index={index} />
      </Container>
    )
  })
}

export default FavsGallery
