import Areas from "./Areas/Areas.styled";
import AuthorBox from "./author/AuthorBox.styled";
import CardsContainer from "./CardsContainer.styled";
import Header from "./header/Header.styled";
import styled from "styled-components";
const PortfolioStyled = styled.main``;

const Container = styled.div`
  &.app-container {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

const Portfolio = () => {
  return (
    <PortfolioStyled>
      <Header></Header>
      <main>
        <Container className="app-container">
          <div className="layout-section">
            <AuthorBox></AuthorBox>
          </div>
          <div className="layout-section position-sticky">
            <Areas></Areas>
          </div>
          <CardsContainer></CardsContainer>
        </Container>
      </main>
    </PortfolioStyled>
  );
};

export default Portfolio;
