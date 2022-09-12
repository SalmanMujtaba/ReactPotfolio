import React from 'react';
import styled from "styled-components";

const CardStyled = styled.div<{height?: string, width?: string}>`
  min-width: ${props => props.width? props.width: "300px"};
  min-height: ${props => props.height? props.height: "350px"};
  position: relative;
  border-radius: 1rem;
  background-color: white;
  padding: 2rem 1rem;
  .card__title {
    text-align: center;
  }
`;


const Card = (props: {height?: string, width?: string, className?: string, children?: React.ReactNode}) => {
  return (
    <CardStyled {...props}>
      {props.children}
    </CardStyled>
  );
}

const CardTitle: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => <div className={`card__title ${className}`}>{children}</div>
const CardBody: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => <div className={`card__content ${className}`}>{children}</div>
const CardFooter: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => <div className={`card__footer ${className}`}>{children}</div>

Card.Title = CardTitle;
Card.Body = CardBody;
Card.Footer = CardFooter;



export default Card;