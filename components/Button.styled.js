import styled from "styled-components";

export const Button = styled.button`
  border-radius: 0.65vw;
  border: none;
  box-shadow: 0 0 0.65vw rgba(0, 0, 0, 0.15);
  cursor: pointer;
  color: #ffffff;
  font-size: 1.04vw;
  font-weight: 700;
  padding: 0.65vw 1.953vw;
  background-color: #bf2434;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
