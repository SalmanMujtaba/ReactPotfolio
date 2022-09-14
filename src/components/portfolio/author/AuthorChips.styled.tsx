import Chips from "src/components/ui/Chip.styled";
import styled from "styled-components";

const AuthorChipsStyled = styled.div`
  &.author__chips {
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
  }
`;

const AuthorBoxChips = () => {
  return (
    <AuthorChipsStyled className="author__chips">
      <Chips icon="react" text="React" textClassName="react-color"></Chips>
      <Chips icon="angular" text="Angular"></Chips>
      <Chips icon="javascript" text="Javascript"></Chips>
      <Chips icon="nextjs" text="Next JS"></Chips>
      <Chips icon="angular" text="Angular"></Chips>
      <Chips icon="angular" text="Angular"></Chips>
      <Chips icon="angular" text="Angular"></Chips>
      <Chips icon="angular" text="Angular"></Chips>
      <Chips icon="angular" text="Angular"></Chips>
      <Chips icon="angular" text="Angular"></Chips>
      <Chips icon="angular" text="Angular"></Chips>
      <Chips icon="angular" text="Angular"></Chips>
      <Chips icon="angular" text="Angular"></Chips>
    </AuthorChipsStyled>
  );
};

export default AuthorBoxChips;
