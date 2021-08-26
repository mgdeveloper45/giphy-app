import React from 'react'
import styled from "styled-components";

const InputContainer = styled.input`
  width: 90%;
  height:2rem;
  
`;



const Input = (props) => {
  return (
    <InputContainer
      type="text"
      onChange={props.onChange}
      placeholder='Search for GIFS'
    />
  );
}



export default Input
