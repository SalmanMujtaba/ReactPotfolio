import Icon from "./Icon.styled";
import styled from "styled-components";
const ChipsStyled = styled.div`
  height: 35px;
  /* width: 150px; */
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  /* background-color: lightgray; */
  display: flex;
  align-items: center;

  & img {
    height: 30px;
    width: 30px;
    /* border-radius: 50%; */
  }

  .chips__text {
    font-weight: 400;
    margin-left: 10px;
  }
`;

const Chips: React.FC<{
  text: string;
  textClassName?: string;
  icon: string;
  className?: string;
}> = (props) => {
  return (
    <ChipsStyled {...props}>
      <Icon icon={props.icon} alt="angular icon"></Icon>
      <p
        className={`chips__text ${
          !!props.textClassName && props.textClassName
        }`}
      >
        {props.text}
      </p>
    </ChipsStyled>
  );
};

export default Chips;
