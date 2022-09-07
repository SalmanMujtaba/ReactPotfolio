import AppConstants from "src/constants/app-constants";
import BackgroundImage from "../navbar/BackgroundImage.styled";
import Navbar from "../navbar/Navbar.styled";
import styled from "styled-components";
import { useScrollDirection } from "src/utlis/scroll-detection.util";
import wallpaper from "../../../assets/images/about_me.jpg";

const scroll = (direction: string) => {
  if(direction === AppConstants.get("SCROLL_UP")) {
    return "background-color: var(--background-color); padding-top: unset; padding-bottom: unset";
  } else {
    return "background-color: transparent; padding-top: 2rem; padding-bottom: 2rem";
  }
}
const HeaderStyled = styled.header<{scrollDirection?: string}>`
    .header__image {
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    height: 100vh;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }
  .header__text {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    place-content: center;
    grid-row: 2/3;
  }
  .header__background-image {
    min-height: 100vh;
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: -1;
  }
  .navbar {
    background-color: ${props => props.scrollDirection && scroll(props.scrollDirection)};
  }
`;

const Header = () => {
  const scrollDirection = useScrollDirection();


  return (
    <HeaderStyled scrollDirection={scrollDirection}>
      <Navbar className="navbar"></Navbar>
      <section className="header__image">
        <div className="header__text">        
          <h1>Salman Mujtaba</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <BackgroundImage className="header__background-image" imageURL={wallpaper}></BackgroundImage>
      </section>
    </HeaderStyled>
  );
}

export default Header;