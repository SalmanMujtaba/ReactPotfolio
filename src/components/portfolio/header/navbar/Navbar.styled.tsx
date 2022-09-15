import styled from "styled-components";

const NavbarStyled = styled.nav`
  box-sizing: border-box;
  min-height: var(--navbar-height);
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: var(--background-color);
  width: 100vw;
  transition: background-color 0.25s ease-in-out, padding 0.25s ease-in-out;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  & ul {
    display: flex;
    list-style: none;
    align-items: center;
    min-height: inherit;
    li {
      margin-left: 40px;
    }
  }
`;

const Navbar: React.FC<{ className?: string }> = (props) => {
  return (
    <NavbarStyled className={props.className}>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Else</li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
