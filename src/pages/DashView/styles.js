import styled from "styled-components";
export const Form = styled.div`
  .form {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px 0;
    margin-bottom: 20px;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
  }
  .input {
    font-weight: bold;
    font-size: 18px;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 3px;
    background-color: #6096b4;
    margin: 10px 0;
    width: 200px;
  }
`;

export const InputBoton = styled.div``;
export const Input = styled.input`
  border: solid 1px #ccc;
  border-radius: 3px;
  padding: 8px 10px;
`;
export const Label = styled.label`
  padding-top: 5px;
`;
