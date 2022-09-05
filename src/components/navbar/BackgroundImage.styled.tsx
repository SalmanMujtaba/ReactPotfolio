import styled from "styled-components";

const BackgroundImageStyled = styled.div<{imageURL: string}>`
	background-image: url(${props => props.imageURL});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	min-height: 60vh;
/* clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%) */
`;





const BackgroundImage: React.FC<{imageURL: string}> = (props)=> {
  return (
    <BackgroundImageStyled imageURL={props.imageURL}>
    </BackgroundImageStyled>
  );
}


export default BackgroundImage;