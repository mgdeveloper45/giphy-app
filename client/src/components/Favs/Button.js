import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GiTechnoHeart } from 'react-icons/gi'

const Button = styled(GiTechnoHeart)`
  color: #d03957;
  transform: translate(-1.9rem, -1.5rem);
  cursor: pointer;
`

const AddFavs = ({ gif, index }) => {
  // const SavedFavs = localStorage.getItem('Favs')
  // const savedFavsSetter = targetedGif => localStorage.setItem('Favs', targetedGif)

  // const accessSavedFavs = () => {
  //   SavedFavs === null
  //     ? savedFavsSetter(JSON.stringify([]))
  //     : setFavs(JSON.parse(SavedFavs))
  // }
  const [favs, setFavs] = useState([])

  useEffect(() => {
    // accessSavedFavs()

    const storedFavs = JSON.parse(window.localStorage.getItem('Favs'))

    if (storedFavs === null) {
      window.localStorage.setItem('Favs', JSON.stringify([]))
    } else {
      setFavs(storedFavs)
    }
  }, [])

  const addFav = () => {
    const allFavs = [...favs, gif]
    console.log(allFavs)
    setFavs(allFavs)
    localStorage.setItem('Favs', JSON.stringify(allFavs))
  }

  return <Button onClick={addFav} />
}

export default AddFavs
