import { InterfaceIcon } from "src/models/interfaces";
import styled from "styled-components";

const calculateSizes = (iconType?: string) => {
console.log("jeksksk");
  if(iconType === "social") {
    return "var(--social-icon-size)";
  }
  return "";
}
const IconStyled = styled.img<{iconType?: string}>`
  height: ${props => props.iconType? calculateSizes(props.iconType): "48px"};
  width: ${props => props.iconType? calculateSizes(props.iconType): "48px"};
  object-fit: cover;
  display: inline-block;
`;

const Icon: React.FC<InterfaceIcon> = (props) => {
  return <IconStyled iconType={props?.iconType} className={props.className} src={props.src} alt={props.alt}></IconStyled>;
}

export default Icon;