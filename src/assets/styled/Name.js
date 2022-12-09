import styled from "styled-components";
const colors = {
  dark: "#333",
  white: "#f5f6f7",
  blue: "#66bfbf",
  gray: "#ccc",
  silver: "#f5f5f7",
  black: "#3a4750",
};
const FhatherName = styled.div`
  display: flex;
  height: auto;
  justify-items: center;
  justify-content: center;
  background-color: ${colors.silver};
  h1 {
    color: #66bfbf;
    justify-self: center;
    font-size: 3rem;
    font-family: "Passions Conflict", cursive;
  }
`;
export { FhatherName };
