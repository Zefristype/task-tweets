import styled from "styled-components";

export const Button = styled.button`
  width: 196px;
  padding: 14px 28px;
  background-color: ${(props) =>
    props.isUserFollowing ? "#5cd3a8" : "#ebd8ff"};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  &:hover {
    color: #ebd8ff;
    background-color: #5cd3a8;
  }
`;
