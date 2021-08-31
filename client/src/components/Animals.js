import React from 'react'
import styled from "styled-components";
// import {AiOutlineThunderbolt} from 'react-icons/Ai'

const AnimalsConatiner = styled.div`
  width: 60vw;
  display: flex;

  flex-flow: row;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const Img = styled.img`
  border-radius: 5px;
  :nth-child(n + 2) {
    margin-left: 5px;
  }
`;

const AnimalsHeader = styled.header`
  font-size: ${(props) => props.size};
  color: white;
  display: flex;
  justify-content: flex-start;
  width: 60vw;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const Animals = (props) => {
  return (
    <>
      <AnimalsHeader size="20px">
        {/* <AiOutlineThunderbolt
          style={{ color: "blue", marginRight: "10px", fontSize: "30px" }}
        /> */}
        Animals
      </AnimalsHeader>
      <AnimalsConatiner>
        {props.animals.map((animal, index) => (
          <Img src={animal.gifAnimated} key={index} alt="broked" />
        ))}
      </AnimalsConatiner>
    </>
  );
};

export default Animals
