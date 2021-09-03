import React from "react";
import styled from "styled-components";

const IMG = styled.img`
  width: 240px;
  height: 130px;
  object-fit: cover;
  border-radius: 10px;
  // margin-bottom:30px;
`
const Title = styled.p`
  color: white;
  margin-left: 5px;
  font-size: 25px;
  margin-top: 10px;
`
const Category = (props) => {
  return (
    <div>
      <Title>Categories</Title>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "space-between",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {props.category.map((category, index) => (
          <div
            key={index}
            style={{
              padding:'10px',
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems:'center'
            }}
          >
            <div
              style={{
                color: "white",
                position: "absolute",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {category.name}
            </div>
            <IMG
              style={{ objectFit: "cover" }}
              src={category.image}
              alt="broken"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
