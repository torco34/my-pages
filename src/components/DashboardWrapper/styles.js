import styled from "styled-components";
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 2px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  a {
    color: #222;
    padding: 20px 20px;
    text-decoration: none;
    border-bottom: solid 2px transparent;
    &:hover {
      border-bottom: solid 4px #6096b4;
    }
  }
`;
export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  font-size: 30px;
  width: 500px;
  margin-left: 30px;
`;
