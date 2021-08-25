import React from 'react'
import styled from "styled-components";

const InputContainer = styled.input`
  width: 70%;
  height: 1.5rem;
  margin-bottom: 5px;
  margin-top: 5px;
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
