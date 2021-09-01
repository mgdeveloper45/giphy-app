import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-flow: row wrap;
  border: 5px solid white;
  background: linear-gradient(to right, #2F6398, #595079);
  justify-content: space-between;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const Img = styled.img`
  margin: 15px 15px 0 15px;
`;
const Title = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  height: 30px;
  color: white;
  margin: none;
  border: none;
  font-size: 30px;
  font-weight: 700;
`;
const Tipper = styled.div`
  display: block;
  background: linear-gradient(to right, #2F6398, #595079);
  height: 10px;
  width: 80px;
  border-radius: 0 0 45px 45px;
  margin-bottom: 15px;
`
const SearchResults = (props) => {
  return (
    <div>
      <Title>{ props.currentSearch }</Title>
      {props.toggle ? <Tipper/> : null}
      <SearchContainer>
        {props.searchGifs.map((gif, index) => (
        <Img key={index} src={gif.gifAnimated} alt="broken" />
        ))}
      </SearchContainer>
    </div>
  );
};

export default SearchResults;
