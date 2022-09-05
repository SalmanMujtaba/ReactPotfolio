import { ICard } from "../../models/interfaces";
import styled from "styled-components";

const CardStyled = styled.div`
  &.card {
    max-width: var(--mini-card-width);
    min-height: var(--mini-card-height);
    border: 1px solid limegreen;
  }
/* clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%) */
`;


const Card: React.FC<ICard> = (props) => {
  return (
    <CardStyled className="card">
      <h3 className="card__title">{props.title}</h3>
      <div className="card__content">
        {props.children}
      </div>
      <div className="card__footer"></div>
    </CardStyled>
  );
}


export default Card;