import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 60vw;
  display: flex;
`;

const Search = (props) => {
  return <SearchContainer>{props.children}</SearchContainer>;
};

export default Search;
