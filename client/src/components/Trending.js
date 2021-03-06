import React from 'react'
import styled from 'styled-components'
import { FiTrendingUp } from 'react-icons/fi'
import GIF from './GIF/GIF'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const TrendingContainer = styled.div`
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

const TrendingIcon = styled(FiTrendingUp)`
  color: blue;
  font-size: 2rem;
  margin-right: 0.75rem;
`

const Img = styled.img`
  border-radius: 5px;
  :nth-child(n + 2) {
    margin-left: 5px;
    height: 30px;
    width: 30px;
  }
`

const TrendingHeader = styled.header`
  font-size: ${props => props.size};
  color: white;
  display: flex;
  justify-content: flex-start;
  width: 60vw;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5;
  padding: 0px;
`

const Trending = ({ trending }) => {
  return (
    <>
      <TrendingHeader size='1.3rem'>
        <TrendingIcon />
        Trending
      </TrendingHeader>
      <TrendingContainer>
        <GIF gifArray={trending} />
      </TrendingContainer>
      {/* <Carousel>{renderTrending()}</Carousel> */}
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
