import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
`

const SearchBar = (props) => {

  const [value, setValue] = useState('')
  const [search, setSearch] = useState('')
  
    const onChange = (e) => {
      
      setValue(e.target.value);
      console.log(value)
    };

    const onClick = (e) => {
      e.preventDefault();
      setSearch(value)

      axios
        .get("/api/search")
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => console.log(err));
    }

  return (
    <InputContainer>
      <Input onChange={onChange} type='search' placeholder='Search for Gifs' />
      <Button onClick={onClick} type='submit'  >Search</Button>
    </InputContainer>
  )
}

export default SearchBar
