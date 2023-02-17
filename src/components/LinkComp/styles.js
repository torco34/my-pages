import styled from "styled-components";
export const ContenedorLink = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
`;
export const Link = styled.div`
  background-color: white;
  border-radius: 3px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 79px;
`;
export const LinkAction = styled.div`
  display: flex;
  border-radius: 3px;
  align-content: stretch;
  align-items: stretch;
  height: 100%;
  width: 100%;
  position: relative;

  button {
    flex: 1;
    position: absolute;
    top: -34px;
    right: 0;
    background-color: transparent;
    border: none;
    margin: 0;
    color: #c1c1c1;
    cursor: pointer;
    padding: 0 20px;

    &:hover {
      color: red;
    }
  }
`;
export const LinkInfo = styled.div`
  padding: 10px 15px;
  width: 100%;
`;
export const LinkTitle = styled.div`
  font-weight: bolder;
  padding: 8px 0;
`;

export const LinkUrl = styled.div`
  padding: 15px 0;
  color: #555;
  text-transform: lowercase;
`;
export const BtnEdit = styled.div`
  padding: 0;
  margin: 0;
  cursor: pointer;
  button {
    border-radius: 3px;
    background-color: transparent;
    border: none;
    height: 15px;
    color: #c1c1c1;
    &:hover {
      color: #000;
    }
  }
`;
export const BtnDelete = styled.div`
  flex: 1;
  min-height: 100%;
  background-color: transparent;
  border: none;
  margin: 0;
  color: #222;
  cursor: pointer;
  padding: 0 20px;
`;

export const Input = styled.input`
  border: solid 1px #ccc;
  border-radius: 3px;
  padding: 18px 10px;
`;
