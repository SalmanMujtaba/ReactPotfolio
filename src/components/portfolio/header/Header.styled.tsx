import BackgroundImage from "../navbar/BackgroundImage.styled";
import Navbar from "../navbar/Navbar.styled";
import styled from "styled-components";
import wallpaper from "../../../assets/images/about_me.jpg";

const HeaderStyled = styled.header`
    & .header-image {
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    height: 100vh;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }
  & .header-text {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    place-content: center;
    grid-row: 2/3;
  }
  .background-image {
    min-height: 100vh;
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: -1;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Navbar></Navbar>
      <section className="header-image">
        <div className="header-text">        
          <h1>Salman Mujtaba</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <BackgroundImage className="background-image" imageURL={wallpaper}></BackgroundImage>
      </section>
    </HeaderStyled>
  );
}

export default Header;