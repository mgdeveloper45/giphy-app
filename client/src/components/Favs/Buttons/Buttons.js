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

const AddFav = ({ favs, setFavs, gif }) => {
  const addGIF = () => {
    const newFavs = [...favs]
    newFavs.push(gif)
    // console.log(gif)

    setFavs(newFavs)
    localStorage.setItem('Favs', JSON.stringify(newFavs))
  }

  // const handleClick = () => {}

  return <OutlinedButton onClick={addGIF} />
}

export default AddFav
