import Icon from "./Icon.styled";
import styled from "styled-components";
const ChipsStyled = styled.div`
  height: 30px;
  width: 150px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;

  & img {
    margin-left: -10px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  .chips__text {
    font-weight: bold;
  }
`;

const Chips: React.FC<{
  text: string;
  textClassName?: string;
  icon: string;
}> = (props) => {
  return (
    <ChipsStyled>
      <Icon icon={props.icon} alt="angular icon"></Icon>
      <p className={`chips__text ${props.textClassName}`}>{props.text}</p>
    </ChipsStyled>
  );
};

export default Chips;
