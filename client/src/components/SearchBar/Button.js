import React from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const ButtonContainer = styled.button`
  /* border-radius: 1rem; */
  margin-top:5px;
`;


const Button = (props) => {
  return (
    <ButtonContainer onClick={props.onClick}>
      <BiSearchAlt />
    </ButtonContainer>
  );
};

export default Button;
