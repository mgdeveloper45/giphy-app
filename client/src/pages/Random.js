import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Img = styled.img`
  max-height: 75vh;
  width: 60vw;
  object-fit: contain;
`;
const Button = styled.button`
  width: 60vw;
  height: 25px;
  color:white;
  background: linear-gradient(270deg, #2ada92, #2bb8e9);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
`;

const Random = (props) => {
  const [random, setRandom] = useState("");

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    try {
      const randomAPI = await axios.get(`/api/random`);
      console.log(randomAPI.data);
      setRandom(randomAPI.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div style={{marginTop:'10px', marginBottom:'10px'}}>
        <Button onClick={getRandom}>Random GIF</Button>
      </div>
      <div>
        <Img src={random} alt="" />
      </div>
    </div>
  );
};

export default Random;
