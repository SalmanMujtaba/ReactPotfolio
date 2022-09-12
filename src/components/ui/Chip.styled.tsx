import Icon from "./Icon.styled";
import angularIcon from "../../assets/icons/angular-logo.svg";
import styled from "styled-components";
const ChipsStyled = styled.div`
  height: 40px;
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
`;

const Chips: React.FC<{text: string}> = (props) => {
  return (
    <ChipsStyled>
      <Icon src={angularIcon} alt="angular icon"></Icon>
      <p>{props.text}</p>
    </ChipsStyled>
  );
}

export default Chips;