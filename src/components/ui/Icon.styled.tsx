import styled from "styled-components";

const IconStyled = styled.img`
  height: 48px;
  width: 48px;
  object-fit: cover;
`;

const Icon: React.FC<{height?: string, width?: string, src: string, alt: string}> = (props) => {
  return (
    <IconStyled src={props.src} alt={props.alt}></IconStyled>
  );
}
export default Icon;