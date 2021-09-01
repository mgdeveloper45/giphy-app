import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  width: 60vw;
  display: flex;
  flex-flow: row;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const Img = styled.img`
  border-radius: 5px;
  :nth-child(n + 2) {
    margin-left: 5px;
  }
`;

const Header = styled.header`
  font-size: ${(props) => props.size};
  color: white;
  display: flex;
  justify-content: flex-start;
  width: 60vw;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const Gaming = (props) => {
    return (
        <>
            <Header>
                Gaming
            </Header> 
            <Container>
                {props.gaming.map((gaming, index) => (
                  <Img key={index} src={gaming.gifAnimated} alt="broked" />  
                ))}
            </Container> 
        </>
    )
}

export default Gaming
