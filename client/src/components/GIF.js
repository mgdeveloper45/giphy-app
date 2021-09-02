import React from 'react'
import styled from 'styled-components'
import { AddFavs } from './Favs/index.js'

const Container = styled.div`
  border-radius: 5px;
  
  :nth-child(n + 2) {
    margin-left: 5px;
  }
`;

const Img = styled.img`
  border-radius: 5px;
  padding-bottom: 0px !important;
`;

const GIF = ({ gif, index }) => {
  return (
    <Container key={index}>
      <Img key={index} src={gif} alt='Broken' />
      <AddFavs gif={gif} index={index} />
    </Container>
  )
}

export default GIF
