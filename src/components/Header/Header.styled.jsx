import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 30px;
`;

export const Link = styled(NavLink)`
  padding: 16px 0;
  font-size: 35px;
  color: #fff;
  text-decoration: none;
  &.active {
    color: rgb(127, 84, 230);
  }
`;

export const NavHeader = styled.header`
  background-color: #242424;
`;

export const Wrapper = styled.div`
  display: flex;
`;
