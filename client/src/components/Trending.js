import React from "react";
import styled from "styled-components";
import { FiTrendingUp } from "react-icons/fi";

const TrendingContainer = styled.div`
  width: 60vw;
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
  border-radius:5px;
`;

const TrendingHeader = styled.header`
  font-size: ${(props) => props.size};
  color: white;
  display:flex;
  justify-content:flex-start;
  width:60vw;
`;

const Trending = (props) => {
  return (
    <>
      <TrendingHeader size='20px'>
        <FiTrendingUp style={{ color: "blue", marginRight:'10px' }} />
        Trending
      </TrendingHeader>
      <TrendingContainer>
        {props.trending.map((trending, index) => (
          <Img src={trending.gifAnimated} key={index} alt="broked" />
        ))}
      </TrendingContainer>
    </>
  );
};

export default Trending;
