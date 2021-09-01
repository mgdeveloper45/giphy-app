// import React, { useEffect, useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import { FavsGallery, FavsHeader } from '../components/Favs/index'

const Container = styled.div`
  width: 60vw;
  height: 100dvh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const Favorites = () => {
  return (
    <Container>
      <FavsHeader />
      <FavsGallery />
    </Container>
  )
}

export default Favorites
