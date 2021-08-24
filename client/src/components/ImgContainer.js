import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 80%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const ImgContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default ImgContainer;
