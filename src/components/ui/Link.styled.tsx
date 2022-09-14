import React from "react";
import styled from "styled-components";

const LinkStyled = styled.a``;

const Link: React.FC<{ children?: React.ReactNode; href: string }> = (
  props
) => {
  return (
    <LinkStyled href={props.href} rel="noreferrer" target="_blank">
      {props.children}
    </LinkStyled>
  );
};

export default Link;
