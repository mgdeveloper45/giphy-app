import React from "react";
import styled from "styled-components";
// import {AiOutlineThunderbolt} from 'react-icons/Ai'

const AnimeContainer = styled.div`
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

const AnimeHeader = styled.header`
  font-size: ${(props) => props.size};
  color: white;
  display: flex;
  justify-content: flex-start;
  width: 60vw;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const Anime = (props) => {
  return (
    <>
      <AnimeHeader size="20px">
        {/* <AiOutlineThunderbolt
          style={{ color: "blue", marginRight: "10px", fontSize: "30px" }}
        /> */}
        Anime
      </AnimeHeader>
      <AnimeContainer>
        {props.anime.map((anime, index) => (
          <Img src={anime.gifAnimated} key={index} alt="broked" />
        ))}
      </AnimeContainer>
    </>
  );
};

export default Anime;
