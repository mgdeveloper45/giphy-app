import React from 'react'
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 80%;
  display: flex;
  flex-flow: row;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const Img = styled.img`
  margin-left: 5px;
  margin-right: 5px;
`;

const SearchResults = (props) => {
  return (
    <SearchContainer>
      {props.searchGifs.map((gif, index) => (
        <Img key={index} src={gif.gifAnimated} alt="broken" />
      ))}
    </SearchContainer>
  );
}

export default SearchResults
