import Icon from "./Icon.styled";
import React from "react";
import styled from "styled-components";

const LinkStyled = styled.a`
  &.link {
    color: var(--link-color);
    text-decoration: none;
    &:hover {
      color: var(--link-hover-color);
    }
  }
`;

const Link: React.FC<{
  children?: React.ReactNode;
  href: string;
  className?: string;
}> = (props) => {
  return (
    <LinkStyled
      className={`link ${props.className ? props.className : ""}`}
      href={props.href}
      rel="noreferrer"
      target="_blank"
    >
      {props.children}
    </LinkStyled>
  );
};

const LinkButtonStyled = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .icon {
    height: 20px;
    width: 20px;
    margin-left: 20px;
  }
`;
export const LinkButton: React.FC<{
  children?: React.ReactNode;
  href: string;
  className?: string;
  icon: string;
}> = (props) => {
  return (
    <LinkButtonStyled className="link-icon-animate">
      <Link
        className={`link ${props.className ? props.className : ""}`}
        href={props.href}
      >
        {props.children}
      </Link>
      <Icon className="icon" icon={props.icon}></Icon>
    </LinkButtonStyled>
  );
};

export default Link;
