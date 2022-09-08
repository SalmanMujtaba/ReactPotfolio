import styled from 'styled-components';

const SectionStyled = styled.section<{position?: string, color?: string, transform?: string}>`
  position: ${props => props.position || "sticky"};
  /* background-color: ${props => props.color}; */
  top: 2rem;
`;

const Section: React.FC<{color?: string, className?: string, position?:string, children?: React.ReactNode, transform?: string}> = (props) => {
  return (
      <SectionStyled {...props}>
        {props.children}
      </SectionStyled>
  );
}

export default  Section;