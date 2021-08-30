import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const Img = styled.img`
  margin: 5px, 5px;
  width: 10 vw;
`;
const Title = styled.div`
  height: 30px;
  color: white;
  margin: none;
  border: none;
  font-size: 20px;
  font-weight: 800;
`;
const Tipper = styled.div`
  display: block;
  background: linear-gradient(to right, #33ccff, #ff99cc);
  height: 10px;
  width: 80px;
  border-radius: 0 0 45px 45px;
  margin-bottom: 5px;
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
