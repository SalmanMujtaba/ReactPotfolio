import BackgroundImage from "./navbar/BackgroundImage.styled";
import Navbar from "./navbar/Navbar.styled";
import styled from "styled-components";
import { useScrollDirection } from "src/utlis/scroll-detection.util";
import wallpaper from "../../../assets/images/about_me.jpg";

const scroll = (isTop: boolean) => {
  if(isTop) {
    return "background-color: transparent; padding-top: 1rem; padding-bottom: 1rem";
  } else {
    return "background-color: var(--background-color); padding-top: unset; padding-bottom: unset";
  }
}
const HeaderStyled = styled.header<{isTop?: boolean}>`
  .header__image {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    position: relative;
    height: 100vh;
    grid-template-rows: repeat(10, 1fr);
  }
  .header__text {
    background-color: rgba(0,0,0,0.5);
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    place-content: center;
    grid-row: 4/5;
    grid-column: 2/10;
    color: white;
    letter-spacing: 8px;
    text-transform: capitalize;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    hr {
      border-top: 3px solid var(--white);
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
      width: 50px;
    }
  }
  .header__background-image {
    min-height: 100vh;
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: -1;
  }
  .navbar {
    ${props => props.isTop && scroll(props.isTop)};
  }
`;

const Header = () => {
  const {isTop} = useScrollDirection();


  return (
    <HeaderStyled isTop={isTop}>
      <Navbar className="navbar"></Navbar>
      <section className="header__image">
        <div className="header__text">        
          <h1>Salman Mujtaba</h1>
          <hr></hr>
          <h2>Full Stack Developer</h2>
        </div>
        <BackgroundImage className="header__background-image" imageURL={wallpaper}></BackgroundImage>
      </section>
    </HeaderStyled>
  );
}

export default Header;