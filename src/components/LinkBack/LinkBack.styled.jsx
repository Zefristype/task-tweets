import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkToHome = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
  padding: 10px 20px;
  max-width: 100px;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #242424;
  border: solid 1px black;
  transition: background-color 250ms ease-out;
  &:hover,
  &:focus {
    background-color: #653fbd;
  }
`;
