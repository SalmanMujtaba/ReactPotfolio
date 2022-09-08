import AuthorBox from "./AuthorBox.styled";
import CardsContainer from "./CardsContainer.styled";
import Chips from "../ui/Chip.styled";
import Header from "./header/Header.styled";
import styled from "styled-components";
const PortfolioStyled = styled.main`

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
      <Header></Header>
      <main>
        <Container className="app-container">
          <Chips></Chips>
          <AuthorBox></AuthorBox>
          <CardsContainer></CardsContainer>
        </Container>
      </main>
    </PortfolioStyled>
  );
}

export default Portfolio;