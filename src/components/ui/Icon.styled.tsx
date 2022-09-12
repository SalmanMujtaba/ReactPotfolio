import { InterfaceIcon } from "src/models/interfaces";
import angularLogo from "../../assets/icons/angular-logo.svg";
import facebookLogo from "../../assets/icons/facebook-logo.svg";
import githubLogo from "../../assets/icons/github-logo.svg";
import instaLogo from "../../assets/icons/insta-logo.svg";
import linkedinLogo from "../../assets/icons/inkedin-logo.svg";
import reactLogo from "../../assets/icons/react-logo.svg";
import styled from "styled-components";
import twitterLogo from "../../assets/icons/twitter-logo.svg";

const getIcon = (type: string) => {
  switch(type) {
    case "angular": return angularLogo;
    case "twitter": return twitterLogo;
    case "instagram": return instaLogo;
    case "facebook": return facebookLogo;
    case "github": return githubLogo;
    case "linkedin": return linkedinLogo;
    case "react": return reactLogo;
  }
}

const IconStyled = styled.img<{iconType?: string}>`
  height: 48px;
  width: 48px;
  object-fit: cover;
  display: inline-block;
  background-color: transparent;
`;

const Icon: React.FC<InterfaceIcon> = (props) => {
  const src = getIcon(props.icon!);
  return <IconStyled iconType={props?.iconType} className={props.className} src={src} alt={props.alt || props.icon}></IconStyled>;
}

export default Icon;