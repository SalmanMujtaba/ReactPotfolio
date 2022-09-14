import { IButton } from "src/models/interfaces";
import React from "react";

const Button: React.FC<IButton> = (props) => {
  return (
    <>
      <button onClick={props.handleClick}></button>
    </>
  );
};

export default Button;
