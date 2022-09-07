import { ICard } from "../../models/interfaces";
import styled from "styled-components";

const CardStyled = styled.div<{enableHover?: string}>`
  &.card {
    min-width: var(--card-width);
    min-height: var(--card-height);
    position: relative;
    border-radius: 16px;
    background-color: white;
    transition-duration: 200ms;
    padding: 32px 16px;
  }
/* clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%) */
`;


const Card: React.FC<ICard> = (props) => {

  return (
    <CardStyled className={`${props.className} card`}>
      <h3 className="card__title">{props.title}</h3>
      <div className="card__content">
        {props.children}
      </div>
      <div className="card__footer"></div>
    </CardStyled>
  );
}


export default Card;