import BackgroundImage from "../navbar/BackgroundImage.styled";
import CardsContainer from "../projects/cards-container/CardsContainer.styled";
import Navbar from "../navbar/Navbar.styled";
import styled from "styled-components";
import wallpaper from "../../assets/images/about_me.jpg";
const PortfolioStyled = styled.main`
  & .header-image {
    display: grid;
    grid-template-columns: 1fr 1fr;;
  }
  & .header-text {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    place-content: center;
  }
`;

const Container = styled.div`
  &.app-container {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

const Portfolio = ()=>{
  return(
    <PortfolioStyled>
      <Navbar></Navbar>
      <main>
      <section className="header-image">
      <div className="header-text">        
          <h1>Salman Mujtaba</h1>
          <h2>Full Stack Developer</h2>
      </div>
        <BackgroundImage imageURL={wallpaper}></BackgroundImage>
      </section>
      <Container className="app-container">
        <CardsContainer></CardsContainer>
      </Container>
      </main>
    </PortfolioStyled>
  );
}

export default Portfolio;