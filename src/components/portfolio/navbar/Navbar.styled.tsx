import styled from 'styled-components';

const NavbarStyled = styled.nav`
  height: 2rem;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: var(--background-color);
  width: 100vw;
  transition: background-color .5s ease-in-out,padding .5s ease-in-out;
  & ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 40px;
    }
  }
`;

const Navbar: React.FC<{className?: string}> = (props) => {

  return (
      <NavbarStyled className={props.className}>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Else</li>
        </ul>
      </NavbarStyled>
  );
}

export default  Navbar;