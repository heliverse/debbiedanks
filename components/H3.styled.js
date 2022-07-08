import styled from "styled-components";

export const H3 = styled.h3`
  font-size: 0.9765vw;
  font-weight: 500;
  padding: 0.3255vw 2.6vw;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
`;
