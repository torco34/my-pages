import styled from "styled-components";
const colors = {
  dark: "#333",
  white: "#f5f6f7",
  blue: "#66bfbf",
  gray: "#ccc",
  silver: "#f5f5f7",
  black: "#3a4750",
};
const TextHome = styled.div`
  display: grid;
  font-family: "Abyssinica SIL", serif;
  gap: 1rem;

  justify-self: center;
  align-self: center;
  padding: 2rem;
  h2 {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    color: #000303;
  }
  p {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  .containerA-botones {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .containerA-botones a {
    width: 10rem;
    margin: 2rem;
    color: #fff;
    background-color: #66bfbf;
    border: transparent;
    font-size: 1rem;
  }
`;
export { TextHome };
