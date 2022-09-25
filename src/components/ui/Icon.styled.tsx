import AppConstants from "src/constants/app-constants";
import { InterfaceIcon } from "src/models/interfaces";
import angularLogo from "../../assets/icons/angular-logo.svg";
import cssLogo from "../../assets/icons/css3-logo.svg";
import dbLogo from "../../assets/icons/database-icon.png";
import facebookLogo from "../../assets/icons/facebook-logo.svg";
import gearIcon from "../../assets/icons/gear-icon.svg";
import githubLogo from "../../assets/icons/github-logo.svg";
import htmlLogo from "../../assets/icons/html-logo.svg";
import instaLogo from "../../assets/icons/insta-logo.svg";
import javascriptLogo from "../../assets/icons/javascript-logo.svg";
import linkedinLogo from "../../assets/icons/inkedin-logo.svg";
import materialLogo from "../../assets/icons/angular-material-logo.svg";
import nestLogo from "../../assets/icons/nestjs-logo.svg";
import nextjsLogo from "../../assets/icons/next-js-logo.svg";
import nodeLogo from "../../assets/icons/icons8-node-js.svg";
import reactLogo from "../../assets/icons/react-logo.svg";
import scssLogo from "../../assets/icons/sass-logo.svg";
import styled from "styled-components";
import twitterLogo from "../../assets/icons/twitter-logo.svg";
import vercelLogo from "../../assets/icons/vercel-logo.svg";

const getIcon = (type: string) => {
  switch (type) {
    case AppConstants.get("ANGULAR_LOWERCASE_LABEL"):
      return angularLogo;
    case AppConstants.get("TWITTER_LOWERCASE_LABEL"):
      return twitterLogo;
    case AppConstants.get("INSTAGRAM_LOWERCASE_LABEL"):
      return instaLogo;
    case AppConstants.get("FACEBOOK_LOWERCASE_LABEL"):
      return facebookLogo;
    case "github":
      return githubLogo;
    case "linkedin":
      return linkedinLogo;
    case AppConstants.get("REACT_LOWERCASE_LABEL"):
      return reactLogo;
    case AppConstants.get("JAVASCRIPT_LOWERCASE_LABEL"):
      return javascriptLogo;
    case AppConstants.get("NEXT_LOWERCASE_LABEL"):
      return nextjsLogo;
    case AppConstants.get("NODE_LOWERCASE_LABEL"):
      return nodeLogo;
    case AppConstants.get("NEST_LOWERCASE_LABEL"):
      return nestLogo;
    case AppConstants.get("DATABASE_LOWERCASE_LABEL"):
      return dbLogo;
    case AppConstants.get("CSS_LOWERCASE_LABEL"):
      return cssLogo;
    case AppConstants.get("HTML_LOWERCASE_LABEL"):
      return htmlLogo;
    case AppConstants.get("GEAR_LOWERCASE_LABEL"):
      return gearIcon;
    case AppConstants.get("MATERIAL_LOWERCASE_LABEL"):
      return materialLogo;
    case AppConstants.get("VERCEL_LOWERCASE_LABEL"):
      return vercelLogo;
    case AppConstants.get("SCSS_LOWERCASE_LABEL"):
      return scssLogo;
  }
};

const IconStyled = styled.img<{ iconType?: string }>`
  height: 48px;
  width: 48px;
  object-fit: contain;
  display: inline-block;
  background-color: transparent;
`;

const Icon: React.FC<InterfaceIcon> = (props) => {
  const src = getIcon(props.icon!);
  return (
    <IconStyled
      loading="lazy"
      iconType={props?.iconType}
      className={props.className}
      src={src}
      alt={props.alt || props.icon}
    ></IconStyled>
  );
};

export default Icon;
