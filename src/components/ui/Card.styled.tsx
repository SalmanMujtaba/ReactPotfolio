import { ICard } from "src/models/interfaces";
import styled from "styled-components";

const CardStyled = styled.div<{height?: string, width?: string}>`
  min-width: ${props => props.width? props.width: "300px"};
  min-height: ${props => props.height? props.height: "350px"};
  position: relative;
  border-radius: 1rem;
  background-color: white;
  padding: 2rem 1rem;
`;


const Card: React.FC<ICard> = (props) => {
  return (
    <CardStyled height={props.height} width={props.width} className={props.className}>
      <h3 className="card__title">{props.title}</h3>
      <div className="card__content">
        {props.children}
      </div>
      <div className="card__footer"></div>
    </CardStyled>
  );
}


export default Card;