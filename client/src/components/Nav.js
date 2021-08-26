import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrap = styled.div`
  width: 60vw;
`;

const StyledLink = styled.h3`
  padding: 0;
  margin: 0;
`;

const Nav = () => {
  const link = {
    display: "flex",
    justifyContent: "space-around",
    textDecoration: "none",
  };

  return (
    <NavWrap>
      <Link style={link} to="/">
        <StyledLink>TEAM 3</StyledLink>
      </Link>
      <Link style={link} to="/favs">
        <StyledLink>Favorites</StyledLink>
      </Link>
    </NavWrap>
  );
};

export default Nav;
