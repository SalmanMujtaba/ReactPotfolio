import { IButton } from "src/models/interfaces";
import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 23px 92px;
  gap: 10px;

  position: absolute;
  width: 295px;
  height: 89px;
  left: 1269px;
  top: 748px;

  background: radial-gradient(
        63.11% 63.11% at 31.97% 19.67%,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(255, 255, 255, 0) 69.79%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #2f6eff;
  box-shadow: 4px 38px 62px rgba(0, 0, 0, 0.5);
  border-radius: 25px;
`;

const Button: React.FC<IButton> = (props) => {
  return (
    <ButtonStyled>
      <button onClick={props.handleClick}></button>
    </ButtonStyled>
  );
};

export default Button;
