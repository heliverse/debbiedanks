import styledComponents from "styled-components";

export const Button = styledComponents.button`
  
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
  color: #004393;
  background: white;
}
@media (max-width: 768px) {
  font-size: 4.5vw;
  line-height: 6vw;
  padding: 1vw 3vw;
  height: min-content;
  margin-bottom:13vw;
  grid-area:1/2/2/6;
  }
`;
