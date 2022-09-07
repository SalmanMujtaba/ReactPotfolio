import styled from 'styled-components';

const NavbarStyled = styled.nav`
  padding-top: 10px;
  position: fixed;
  top: 0;
  z-index: 10;
  & ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 40px;
    }
  }
`;

const Navbar = () => {

  return (
      <NavbarStyled>
        <nav>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Else</li>
          </ul>
        </nav>
      </NavbarStyled>
  );
}

export default  Navbar;