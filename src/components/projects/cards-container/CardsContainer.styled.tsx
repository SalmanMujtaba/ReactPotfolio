import Card from "../../ui/Card.styled";
import Section from "../../layout/Section.styled";
import nextSVG from '../../../assets/images/right-arrow-svgrepo-com.svg';
import prevSVG from '../../../assets/images/left-arrow-svgrepo-com.svg';
import styled from "styled-components";
import { useState } from "react";

let offset = 288;
let maxShift = 1625;
let minShift = 0;

const CardStyled = styled.div<{transform: number}>`
  &.card-container {
    /* gap: 10px; */
    position: relative;
    will-change: transform;
    display: flex;
    transition-property: transform;
    transition-duration: 350ms;
    transition-timing-function: cubic-bezier(0.45, 0, 0.15, 1);
    transform: ${props => props.transform? `translateX(${props.transform}px)`: 'translateX(0px)'};
  }
  .card__hover {
    transition: 0.2s;
    &:hover {
      transform: translateY(-1rem) rotate(3deg);
    }
    &:hover~.card__hover {
      transform: translateX(130px);
    }
  }
`;

const CardsContainer = () => {
  const [currentShift, setCurrentShift] = useState(0);
  const next = () => {
    if (Math.abs(currentShift) < Math.abs(maxShift)) {
      setCurrentShift(currentShift => currentShift - offset);
    }
  }
  const prev = () => {
    if (Math.abs(currentShift) > Math.abs(minShift)) {
      setCurrentShift(currentShift => currentShift + offset);
    }
  }
  return (
      <>
        <button onClick={next} id="button__previous"><img
            src={nextSVG} alt="arrow" aria-hidden="true"/></button>
        <button onClick={prev} id="button__next"><img
            src={prevSVG} alt="arrow" aria-hidden="true"/></button>
        <Section>
          <CardStyled transform={currentShift} className="card-container">
            <Card className="card__hover" title="Project 1">
              <p>Hello I am a card</p>
            </Card>
            <Card className="card__hover" title="Project 1">
              <p>Hello I am a card</p>
            </Card>
            <Card className="card__hover" title="Project 1">
            <p>Hello I am a card</p>
            </Card>
            <Card className="card__hover" title="Project 1">
              <p>Hello I am a card</p>
            </Card>
            <Card className="card__hover" title="Project 1">
              <p>Hello I am a card</p>
            </Card>
            <Card className="card__hover" title="Project 1">
              <p>Hello I am a card</p>
            </Card>
            <Card className="card__hover" title="Project 1">
              <p>Hello I am a card</p>
            </Card>
            <Card className="card__hover" title="Project 1">
              <p>Hello I am a card</p>
            </Card>
            <Card className="card__hover" title="Project 1">
              <p>Hello I am a card</p>
            </Card>
          </CardStyled>
        </Section>
      </>
  );
}

export default CardsContainer;