import { styled } from 'styled-components';

export const Button = styled.button`
  width: 100px;
  padding: 5px 0;
  font-size: 18px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: black;
    color: white;
  }
`;
