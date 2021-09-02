import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

const FilledButton = styled(AiFillHeart)`
  z-index: 1;
  color: #d03957;
  cursor: pointer;
  transform: translate(-1.5rem, 0.3rem);
`
const OutlinedButton = styled(AiOutlineHeart)`
  z-index: 1;
  color: #d03957;
  cursor: pointer;
  transform: translate(-1.5rem, 0.3rem);
`

const AddFav = ({ favs, setFavs }, gif) => {
  // const [favs, setFavs] = useState([])

  // useEffect(() => {
  //   const storedFavs = JSON.parse(window.localStorage.getItem('Favs'))
  //   if (storedFavs === null) {
  //     window.localStorage.setItem('Favs', JSON.stringify([]))
  //   } else {
  //     setFavs(storedFavs)
  //   }
  // }, [])

  const addGIF = () => {
    const newFavs = [...favs]
    console.log(gif)
    newFavs.push(gif)
    setFavs(newFavs)
    localStorage.setItem('Favs', JSON.stringify(newFavs))
  }

  // const deleteGIF = index => {}

  // const handleClick = () => {}

  return <OutlinedButton onClick={addGIF} />
}

export default AddFav
