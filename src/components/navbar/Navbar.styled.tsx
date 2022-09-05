import styled from 'styled-components';

const NavbarStyled = styled.nav`
  margin-top: 20px;
  position: sticky;
  top: 0;
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