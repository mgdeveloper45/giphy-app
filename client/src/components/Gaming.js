import React from 'react'
import styled from 'styled-components'
import GIF from './GIF/GIF'

const Container = styled.div`
  width: 60vw;
  display: flex;
  flex-flow: row;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(136, 136, 136, 0.4);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
`

const Img = styled.img`
  border-radius: 5px;
  margin-bottom: 20px;
  :nth-child(n + 2) {
    margin-left: 5px;
  }
`

const Header = styled.header`
  font-size: ${props => props.size};
  color: white;
  display: flex;
  justify-content: flex-start;
  width: 60vw;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 5px;
`

const Gaming = ({ gaming }) => {
  return (
    <>
      <Header>Gaming</Header>
      <Container>
        <GIF gifArray={gaming} />
      </Container>
    </>
  )
}

export default Gaming
