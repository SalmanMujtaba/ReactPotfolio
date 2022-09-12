import AuthContext from "src/store/auth-context";
import AuthorBoxChips from "./AuthorChips.styled";
import Card from "../../ui/Card.styled";
import Icon from "../../ui/Icon.styled";
import Link from "../../ui/Link.styled";
import authorImage from '../../../assets/images/author.webp';
import styled from "styled-components";
import { useContext } from "react";
const AuthorBoxStyled = styled.div`
  &.author {
    /* width: 80%; */
    /* position: relative; */
    width: 800px;
    margin: 0 auto;
  }
  .author__image {
    /* position: absolute; */
    /* width: 55%; */
    /* height: 400px; */
    /* top: 0; */
    /* left: 0; */
    display: inline-block;
    object-fit: cover;
    border-radius: 100%;
    max-width: 150px;
    box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  }

  /* .author__container {
    display: flex;
    justify-content: flex-end;
    width: inherit;
  } */
  .author__card {
    /* clip-path: polygon(0% 80%,80% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%); */
    min-height: 400px;
    /* width: ; */
    box-shadow: 4px 4px 14px 0 rgb(8 15 52 / 4%);
  }
  .card__content--author {
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-auto-rows: max-content;
    /* padding: 3rem; */
  }
  .author__content {
    grid-column: 2/7;
    margin-inline-start: 20px;
  }
  .author__heading {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .author__link {
    transition: transform 300ms ease, -webkit-transform 300ms ease;
  }
  .author__link:hover {
    transform: translateY(-4px);
  }
  .author__icons {
    place-content: end;
    display: flex;
    a {
      &:not(:first-child) {
        margin-left: 20px;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      min-height: 36px;
      min-width: 36px;
      border-radius: 100px;
      background-color: #f3f1ff;
      transition: transform 300ms ease, -webkit-transform 300ms ease;
      &:hover {
        transform: translate(0px, -4px);
      }
    }
  }
  .author__title {
    /* justify-self: center; */
  }
`;

const AuthorBox = () => {
  const {facebookLink, linkeinLink, twitterLink} = useContext(AuthContext);
  return (
    <AuthorBoxStyled className="author">  
      {/* <div className="author__container"> */}
      <Card className="author__card">
        <Card.Title>About Me</Card.Title>
        <Card.Body className="card__content--author">
          <img className="author__image" src={authorImage} alt="Author's"></img>
          <div className="author__content">
            <div className="author__heading">
              <h3 className="author__title">Salman Mujtaba</h3>
              <div className="author__icons">
                <Link href={facebookLink!}><Icon className="social-icon--size" icon="angular"></Icon></Link>
                <Link href={twitterLink!}><Icon className="social-icon--size" icon="twitter"></Icon></Link>
                <Link href=""><Icon className="social-icon--size" icon="instagram"></Icon></Link>
                <Link href={linkeinLink!}><Icon className="social-icon--size" icon="linkedin"></Icon></Link>
              </div>
            </div>
            <p>Lpr</p>
            <AuthorBoxChips></AuthorBoxChips>
          </div>
        </Card.Body>
      </Card>
      {/* </div> */}
    </AuthorBoxStyled>
  );
}


export default AuthorBox;