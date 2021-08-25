import React from "react";
import styled from "styled-components";

const TrendingContainer = styled.div`
  width:80%;
  display: flex;
  
  flex-flow: row;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const Img = styled.img`
  margin-left:5px;
  margin-right:5px;
`


const Trending = (props) => {
  return (
    <TrendingContainer>
      {props.trending.map((trending, index) => (
        <Img src={trending.gifAnimated} key={index} alt="broked" />
      ))}
    </TrendingContainer>
  );
};

export default Trending;
