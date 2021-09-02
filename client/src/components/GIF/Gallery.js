import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GIF from './GIF'
const Gallery = ({ children }) => {
  const [favs, setFavs] = useState([])

  useEffect(() => {
    const storedFavs = JSON.parse(window.localStorage.getItem('Favs'))
    if (storedFavs === null) {
      window.localStorage.setItem('Favs', JSON.stringify([]))
    } else {
      setFavs(storedFavs)
    }
  }, [])

  // const addGIF = ({ favs, setFavs }, gif) => {
  //   const newFavs = [...favs]
  //   console.log(gif)
  //   newFavs.push(gif)
  //   setFavs(newFavs)
  //   localStorage.setItem('Favs', JSON.stringify(newFavs))
  // }

  const deleteGIF = index => {}

  const handleClick = () => {}

  const renderGallery = ({ targetState }) => {
    return targetState.map(({ gifAnimated }, index) => {
      // return <GIF key={index} index={index} gif={gifAnimated} />
    })
  }

  const Container = styled.div`
    border-radius: 5px;
    :nth-child(n + 2) {
      margin-left: 5px;
    }
  `
  return <Container>{children}</Container>
}

export default Gallery
