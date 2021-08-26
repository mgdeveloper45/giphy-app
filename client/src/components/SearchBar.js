import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Button from './SearchBar/Button.js'
import Input from './SearchBar/Input.js'

// import { BiSearchAlt } from 'react-icons/bi'
const SearchContainer = styled.div`
  width: 100%;
  height: 3rem;
`


const SearchBar = () => {

  return (
    <SearchContainer>
      <Input/>
      <Button />
    </SearchContainer>
  )
}

export default SearchBar
