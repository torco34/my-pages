import styled from "styled-components";
const ContaineStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  video {
    width: 100%;
    height: 130vh;
    /* object-fit: cover; */
  }

  .manto {
    position: absolute;
    top: 0px;
    height: 100vh;
    width: 100%;
    background-color: rgba(25, 25, 25, 0.6);
  }
  .texto {
    display: grid;
    justify-content: center;
    align-items: center;
    top: 0px;
    z-index: 1;
    height: 100vh;
    font-size: 2rem;
    color: #fff;
    border: solid red 3px;
    font-family: Arial, Helvetica, sans-serif;
    h2 {
      font-size: 4rem;
      align-items: center;
    }
  }

  .texto {
    position: absolute;
    top: 0px;
    z-index: 1;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export { ContaineStyled };
