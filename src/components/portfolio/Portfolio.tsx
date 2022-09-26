import Areas from "./Areas/Areas.styled";
import AuthorBox from "./author/AuthorBox.styled";
import CardsContainer from "./CardsContainer.styled";
import Header from "./header/Header.styled";
import Projects from "./projects/Projects.styled";
import linearGradientImage from "../../assets/images/linear-gradient-background-dark-blue.jpg";
import styled from "styled-components";

const PortfolioStyled = styled.main``;

const Container = styled.div`
  &.app-container {
    width: min(100%, var(--max-content-width));
    margin: 0 auto;
    /* padding-inline: 20px;
    margin-block: 30px;
    text-align: center; */
  }
  .heading-text {
    color: var(--subheading-color);
    font-weight: var(--subheading-font-weight);
    margin-block-end: 50px;
    font-size: var(--subheading-size);
    text-align: center;
  }
  .fancy-text {
    background-image: url(${linearGradientImage});
  }
`;

const Portfolio = () => {
  return (
    <PortfolioStyled>
      <Header></Header>
      <main>
        <Container className="app-container">
          <AuthorBox></AuthorBox>
          <Areas></Areas>
          {/* <div>
          </div> */}
          <CardsContainer></CardsContainer>
          <Projects></Projects>
        </Container>
      </main>
    </PortfolioStyled>
  );
};

export default Portfolio;
