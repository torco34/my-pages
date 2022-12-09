import styled from "styled-components";
const colors = {
  dark: "#333",
  white: "#f5f6f7",
  blue: "#66bfbf",
  gray: "#ccc",
  silver: "#f5f5f7",
  black: "#3a4750",
};
const ContainerImg = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  font-weight: bold;
  color: #000303;
  font-family: "Abyssinica SIL", serif;

  img {
    border-radius: 50%;
    width: 50%;
    padding: 1rem;
    margin: auto;
  }
  h4 {
    font-weight: bold;
    color: #66bfbf;
    font-size: 1.6rem;
  }
  h2 {
    font-weight: bold;
    font-size: 1.6rem;
  }
`;
export { ContainerImg };
