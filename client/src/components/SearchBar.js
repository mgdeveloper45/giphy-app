import React from 'react'
import styled from 'styled-components'
// import { BiSearchAlt } from 'react-icons/bi'
const InputContainer = styled.div`
  width: 100%;
  height: 3rem;
`

const Input = styled.input`
  width: 70%;
  height: 1.5rem;
`

const Button = styled.button`
  /* border-radius: 1rem; */
  width: 2rem;
  height: 1rem;
`

const SearchBar = () => {
  return (
    <InputContainer>
      <Input type='search' placeholder='Search for Gifs' />
      <Button type='submit' value='Search' />
    </InputContainer>
  )
}

export default SearchBar
