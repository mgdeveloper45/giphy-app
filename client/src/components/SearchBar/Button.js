import React from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const ButtonContainer = styled.button`
  
  width:10%;
  padding:0;
  margin:0;
  display:flex;
  justify-content:center;
  align-items:center;
    > * {
      font-size:20px;
    }
`;


const Button = (props) => {
  return (
    <ButtonContainer onClick={props.onClick}>
      <BiSearchAlt />
    </ButtonContainer>
  );
};

export default Button;
