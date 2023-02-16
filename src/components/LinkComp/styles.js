import styled from "styled-components";
export const ContenedorLink = styled.div`
  /* display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  border: solid red 2px; */

  display: flex;
  border-radius: 3px;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 79;
`;
export const Link = styled.div`
  display: flex;
  border-radius: 3px;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 79;
  /* border: solid red 2px; */
`;
export const LinkAction = styled.div`
  position: relative;
  display: flex;
  border-radius: 3px;
  align-items: stretch;
  height: 100%;
  /* border: solid red 2px; */
  button {
    position: absolute;
    border: none;
    padding: 0;
    margin: 0;
    /* border: solid pink 2px; */
    background-color: transparent;
    min-height: 30px;
    color: #222;
    flex: 1;
    cursor: pointer;
    right: 0px;
    top: -50px;

    &:hover {
      color: red;
    }
  }
  .btnDelete {
    /* border: none;
    padding: 0;
    margin: 0;
    border: solid pink 2px;
    background-color: transparent;
    min-height: 19px;
    color: #222;
    flex: 1;
    cursor: pointer;
    &:hover {
      background-color: red;
      color: white;
    } */
  }
`;
export const LinkInfo = styled.div`
  width: 100%;
  padding: 10px 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
export const LinkTitle = styled.div`
  font-weight: bold;
  padding: 9px 0;
  /* border: solid blue 2px; */
`;

export const LinkUrl = styled.div`
  padding: 15px 0;
  color: #555;
  text-transform: lowercase;
`;
export const BtnEdit = styled.button`
  padding: 10px 0;
  position: relative;
  /* width: 250px; */
  border-radius: 3px;
  /* margin: 18px; */
  /* border: solid blue 2px; */
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    border: none;
    /* padding: 10px; */

    /* border: solid red 2px; */
    background-color: transparent;
    /* height: 5px; */
    color: #c1cc;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      color: #222;
    }
  }
`;

export const Input = styled.input`
  border: solid 1px #ccc;
  border-radius: 3px;
  padding: 18px 10px;
`;
