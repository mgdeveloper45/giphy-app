// import React, { useEffect, useState } from 'react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FavsGallery, FavsHeader } from '../components/Favs/index'

const Container = styled.div`
  width: 60vw;
  height: 100dvh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  :nth-child(2) {
    margin-top: 1.5rem;
  }
`

const Favorites = () => {
  // const [storedFavs, setStoredFavs] = useState(
  //   JSON.parse(window.localStorage.getItem('Favs'))
  // )
  // useEffect(() => {}, [storedFavs])

  return (
    <Container>
      <FavsHeader />
      <FavsGallery />
    </Container>
  )
}

export default Favorites
