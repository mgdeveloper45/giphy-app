import React from 'react'
import styled from "styled-components";
// import {AiOutlineThunderbolt} from 'react-icons/Ai'
import GIF from './GIF/GIF'
const AnimalsConatiner = styled.div`
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

const AnimalsHeader = styled.header`
  font-size: ${props => props.size};
  color: white;
  display: flex;
  justify-content: flex-start;
  width: 60vw;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 5px;
`

const Animals = ({ animals }) => {
  return (
    <>
      <AnimalsHeader size='20px'>
        {/* <AiOutlineThunderbolt
          style={{ color: "blue", marginRight: "10px", fontSize: "30px" }}
        /> */}
        Animals
      </AnimalsHeader>
      <AnimalsConatiner>
        <GIF gifArray={animals} />
      </AnimalsConatiner>
    </>
  )
}

export default Animals
