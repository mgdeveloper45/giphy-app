import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrap = styled.div`
margin:10px;
  width: 60vw;
  display:flex;
  justify-content:flex-start;
`;

const StyledMain = styled.div`
  padding: 0;
  margin: 0;
  margin-right: 10px;
  
  font-size: 30px;
  color: white;
  font-weight:900;
`;

const StyledLink = styled.div`
  padding: 3px;
  margin: 0;
  
  
  font-size: 15px;
  color: white;
  font-weight: 900;
  display: flex;
  justify-content:center;
  align-items:center;
  transition: 0.5s ease background;
  &:hover {
    background: linear-gradient(270deg, red, #206ba3);
    background-size: 400% 400%;

    animation: linkhover 30s ease infinite;
  }

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


const Border = styled.div`
  height: 5px;

  background: linear-gradient(270deg, red, #206ba3);
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

const Nav = () => {
  const link = {
    display: "flex",
    flexFlow:'column',
    justifyContent: "center",
    textDecoration: "none",
    
  };

  return (
    <NavWrap>
      <Link style={link} to="/">
        <StyledMain>GIPHY</StyledMain>
      </Link>
      <Link style={link} to="/favs">
        <StyledLink>Favorites</StyledLink>
        <Border/>
      </Link>
    </NavWrap>
  );
};

export default Nav;
