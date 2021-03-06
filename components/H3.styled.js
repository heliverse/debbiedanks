import styled from "styled-components";

export const H3 = styled.h3`
  font-size: 0.9765vw;
  font-weight: 500;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
`;
