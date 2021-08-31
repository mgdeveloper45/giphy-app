import React from "react";
import styled from "styled-components";
import { FiTrendingUp } from "react-icons/fi";
import GIF from './GIF'

const TrendingContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-flow: row;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`

const TrendingIcon = styled(FiTrendingUp)`
  color: blue;
  font-size: 2rem;
  margin-right: 0.75rem;
`

const TrendingHeader = styled.header`
  font-size: ${props => props.size};
  color: white;
  display: flex;
  justify-content: flex-start;
  width: 60vw;
  font-weight: bold;
`


const Trending = ({ trending }) => {
  const renderTrending = () => {
    return trending.map(({gifAnimated}, index) => {
      return <GIF key={index} index={index} gif={gifAnimated} />
    })
  }
  return (
    <>
      <TrendingHeader size='1.3rem'>
        <TrendingIcon />
        Trending
      </TrendingHeader>
      <TrendingContainer>{renderTrending}</TrendingContainer>
    </>
  )
}

export default Trending


  /* <TrendingContainer>
        {trending.map((trending, index) => (
          <Gif key={index}>
            <img src={trending.gifAnimated} key={index} alt='broked' />
            <FavsButton />
          </Gif>

          <GIF key={index} index={index} gif={trending} />
        ))}
      </TrendingContainer> */
