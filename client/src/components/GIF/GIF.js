import React from 'react'
import styled from 'styled-components'
import { AddFav } from '../Favs/index.js'

const Container = styled.div`
  border-radius: 5px;
  :nth-child(n + 2) {
    margin-left: 5px;
  }
`

const GIF = ({ gif, favs, setFavs, index }) => {
  return (
    <Container key={index}>
      <img key={index} src={gif} alt='Broken' />
      <AddFav favs={favs} setFavs={setFavs} gif={gif} index={index} />
    </Container>
  )
}

export default GIF
