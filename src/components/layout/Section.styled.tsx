import React from 'react';
import styled from 'styled-components';

const SectionStyled = styled.section<{position: string, color?: string}>`
  position: ${props => props.position};
  /* background-color: ${props => props.color}; */
  top: 2rem;
`;

const Section: React.FC<{color?: string, className?: string, position?:string, children?: React.ReactNode}> = (props) => {

  return (
      <SectionStyled className={props.className}  position={props.position || "sticky"}>
        {props.children}
      </SectionStyled>
  );
}

export default  Section;