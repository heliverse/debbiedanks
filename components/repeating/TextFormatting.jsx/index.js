import styledComponents from "styled-components";

export const H1 = styledComponents.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
margin:0;
font-size: ${(props) => (props.size ? props.size + "vw" : "4.6vw")};
line-height: ${(props) => (props.size ? props.size + 1 + "vw" : "5.1vw")};
text-align: ${(props) => (props.center ? "center" : "left")};
margin: ${(props) =>
  `${props.mt || "1vw"} ${props.mr || "0vw"} ${props.mb || "1vw"} ${
    props.ml || "0vw"
  }`};
text-align: ${(props) => props.theme.align || "left"};
color:  ${(props) => props.theme.colors.h1};
// @media (max-width: 1500px) {
// font-size:5vw;
// line-height:6vw;
// }
`;

//Button styled components

export const ButtonMain = styledComponents.button`
  padding: 0.5vw 1vw;
  border: none;
  font-size: 1.5vw;
  font-weight: 600;
  border-radius: 0.5vw;
  font-family: Roboto;
  margin: 1.5vw 0vw;
  background:#004393;
  color:white;
  &:hover {
    background: #f5ab2d;
    color: #2f485a;
  }
  @media (max-width: 768px) {
    font-size: 3.5vw;
    line-height: 4vw;
    padding: 1vw;
    height: -webkit-min-content;
    height: -moz-min-content;
    height: min-content;
    margin-bottom: 10vw;
    margin-left: -4vw;
    grid-area:1/2/2/6;
    }
  `;

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
