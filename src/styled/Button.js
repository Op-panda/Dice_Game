import styled from "styled-components";

export const Button = styled.button`
  background: black;
  color: white;
  padding; 10px 18px;
  min-width: 220px;
  min-height: 44px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  transition: 0.4s background ease-in;
  font-family: Poppins;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineBtn = styled(Button)`
  color: black;
  background-color: white;
  border: 1px solid black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
