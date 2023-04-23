import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ToggleFilter = styled.button`
  max-width: 190px;
  padding: 10px 15px;
  font-size: 20px;
  border: 2px solid black;
  cursor: pointer;
  text-transform: capitalize;
`;

export const FilterButton = styled.button`
  width: 100px;
  padding: 5px 20px;
  background-color: #e7e6e6;
  border: 1px solid black;
  cursor: pointer;
  &:focus,
  &:hover {
    background-color: #653fbd;
    color: white;
  }
  ${(props) =>
    props.activeBtn === props.name
      ? `background-color: #653fbd;
    color: white;`
      : `background-color: #e7e6e6;
    color: black;`}
`;

export const FilterList = styled.ul`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-top: 20px;
  background-color: white;
  z-index: 1000;
`;
