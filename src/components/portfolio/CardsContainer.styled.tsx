import { useState } from "react";
import useWindowDimensions from "src/utlis/get-dimensions.util.";
import styled from "styled-components";
import prevSVG from "../../assets/images/left-arrow-svgrepo-com.svg";
import nextSVG from "../../assets/images/right-arrow-svgrepo-com.svg";
import Section from "../layout/Section.styled";
import Card from "../ui/Card.styled";

let offset = 288;
let maxShift = 1800;
let minShift = 0;

const CardStyled = styled.div<{ transform: number }>`
  &.card-secondary-container {
    /* gap: 10px; */
    position: relative;
    will-change: transform;
    display: flex;
    transition-property: transform;
    transition-duration: 350ms;
    transition-timing-function: cubic-bezier(0.45, 0, 0.15, 1);
    transform: ${(props) =>
      props.transform ? `translateX(${props.transform}px)` : "translateX(0px)"};
  }
  .card__hover {
    transition: 0.2s;
    @media screen and (min-width: 769px) {
      &:hover {
        transform: translateY(-1rem) rotate(3deg);
      }
      &:hover ~ .card__hover {
        transform: translateX(130px);
      }
    }
  }
  .card {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    transition-duration: 200ms;
    box-shadow: -2rem 0 3rem -4rem #000;
    &:first-child {
      box-shadow: -1rem 0 3rem -4rem #000;
    }
    &:not(:first-child) {
      margin-left: -130px;
      @media screen and (max-width: 769px) {
        margin-left: 10px;
        gap: 10px;
        box-shadow: unset;
      }
    }
  }
`;

// Will revisit later. WIP if I want to not let the cards overflow out of the container.
const CardStyledContainer = styled.div`
  &.card-primary-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 20px;
    padding-left: 20px;
    background-color: var(--background-color);
  }
`;

const ButtonContainer = styled.div`
  &.button-container {
    display: flex;
    place-content: center;
  }
`;

const CardsContainer = () => {
  const { width } = useWindowDimensions();
  const [currentShift, setCurrentShift] = useState(0);

  if (width && width < 769) {
    maxShift = 2400;
  } else {
    maxShift = 600;
  }

  const next = () => {
    if (Math.abs(currentShift) < Math.abs(maxShift)) {
      setCurrentShift((currentShift) => currentShift - offset);
    }
  };
  const prev = () => {
    if (Math.abs(currentShift) > Math.abs(minShift)) {
      setCurrentShift((currentShift) => currentShift + offset);
    }
  };
  return (
    <>
      <ButtonContainer className="button-container">
        <button className="icon-button" onClick={prev} id="button__next">
          <img loading="lazy" src={prevSVG} alt="arrow" aria-hidden="true" />
        </button>
        <button onClick={next} className="icon-button" id="button__previous">
          <img loading="lazy" src={nextSVG} alt="arrow" aria-hidden="true" />
        </button>
      </ButtonContainer>
      <Section className="full-width">
        <CardStyledContainer className="card-primary-container full-width__inner-container">
          <CardStyled
            transform={currentShift}
            className="card-secondary-container"
          >
            <Card className="card__hover card">
              <Card.Title>Project blah blah</Card.Title>
              <Card.Body>Hello I am a card</Card.Body>
            </Card>
            <Card className="card__hover card">
              <Card.Title>Project blah blah</Card.Title>
              <Card.Body>Hello I am a card</Card.Body>
            </Card>
            <Card className="card__hover card">
              <Card.Title>Project blah blah</Card.Title>
              <Card.Body>Hello I am a card</Card.Body>
            </Card>
            <Card className="card__hover card">
              <Card.Title>Project blah blah</Card.Title>
              <Card.Body>Hello I am a card</Card.Body>
            </Card>
            <Card className="card__hover card">
              <Card.Title>Project blah blah</Card.Title>
              <Card.Body>Hello I am a card</Card.Body>
            </Card>
            <Card className="card__hover card">
              <Card.Title>Project blah blah</Card.Title>
              <Card.Body>Hello I am a card</Card.Body>
            </Card>
            <Card className="card__hover card">
              <Card.Title>Project blah blah</Card.Title>
              <Card.Body>Hello I am a card</Card.Body>
            </Card>
            <Card className="card__hover card">
              <Card.Title>Project blah blah</Card.Title>
              <Card.Body>Hello I am a card</Card.Body>
            </Card>
            <Card className="card__hover card">
              <Card.Title>Project blah blah</Card.Title>
              <Card.Body>Hello I am a card</Card.Body>
            </Card>
          </CardStyled>
        </CardStyledContainer>
      </Section>
    </>
  );
};

export default CardsContainer;
