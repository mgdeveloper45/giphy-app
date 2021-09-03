import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AddFav } from '../Favs/index.js'

const Gallery = styled.div`
  width: 60vw;
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  :nth-child(n + 2) {
    margin-left: 5px;
  }
`
const Img = styled.img`
  border-radius: 5px;
  width: 12.5rem;
  height: 12.5rem;
  padding-bottom: 1rem;
`

const GIF = ({ gifArray, index }) => {
  const [favs, setFavs] = useState([])
  useEffect(() => {
    const storedFavs = JSON.parse(window.localStorage.getItem('Favs'))
    if (storedFavs === null) {
      window.localStorage.setItem('Favs', JSON.stringify([]))
    } else {
      setFavs(storedFavs)
    }
  }, [favs])
  const renderGallery = () => {
    return gifArray.map(gif => {
      const { ID, StillURL } = gif
      const AnimatedURL = gif.AnimatedURL

      return (
        <React.Fragment key={ID}>
          <Img key={ID} src={AnimatedURL} alt='Broken' />
          <AddFav
            favs={favs}
            setFavs={setFavs}
            animatedURL={AnimatedURL}
            gif={gif}
            ID={ID}
          />
        </React.Fragment>
      )
    })
  }

  return <Gallery key={index}>{renderGallery()}</Gallery>
}

export default GIF
