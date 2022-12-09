import styled from "styled-components";
const colors = {
  dark: "#333",
  white: "#f5f6f7",
  blue: "#66bfbf",
  gray: "#ccc",
  silver: "#f5f5f7",
  black: "#3a4750",
};

const ContainerFooter = styled.div`
  background-color: ${colors.black};
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .fooderIcono {
    width: 30%;
    margin: auto;
  }
  .footerIconos {
    display: grid;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 30%;
    border-radius: 6px;
  }
  h5 {
    color: ${colors.white};
  }
`;
export { ContainerFooter };
