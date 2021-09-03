import React from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const ButtonContainer = styled.button`
  width: 10%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  > * {
    font-size: 20px;
  }
  background: linear-gradient(270deg, purple, red);
  background-size: 400% 400%;

  animation: linkhover 30s ease infinite;
  @keyframes linkhover {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Button = (props) => {
  const history = useHistory();
  return (
    <ButtonContainer
      onClick={() => {
        if (props.value.length > 0) {
          props.initiateSearch();
          history.push("/searchpage");
        }
      }}
    >
      <BiSearchAlt />
    </ButtonContainer>
  );
};

export default Button;
