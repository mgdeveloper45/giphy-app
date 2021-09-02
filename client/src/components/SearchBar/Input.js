import styled from "styled-components";

const Input = styled.input.attrs({
  id: "searchInput",
  type: "text",
  placeholder: "Search for GIFS",
})`
  width: 90%;
  height: 2rem;
`;

export default Input;
