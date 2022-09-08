import Icon from "./Icon.styled";
import angularIcon from "../../assets/icons/angular-logo.svg";
import styled from "styled-components";
const ChipsStyled = styled.div`
`;

const Chips = () => {
  return (
    <ChipsStyled>
      <Icon src={angularIcon} alt="angular icon"></Icon>
    </ChipsStyled>
  );
}

export default Chips;