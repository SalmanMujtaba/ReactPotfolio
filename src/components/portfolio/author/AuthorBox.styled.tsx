import { useContext } from "react";
import AppConstants from "src/constants/app-constants";
import AuthContext from "src/store/auth-context";
import styled from "styled-components";
import authorImage from "../../../assets/images/author.webp";
import Card from "../../ui/Card.styled";
import Icon from "../../ui/Icon.styled";
import Link from "../../ui/Link.styled";
const AuthorBoxStyled = styled.div`
  &.author {
    width: min(100%, 900px);
    margin: 0 auto;
    padding: 1rem;
  }
  .author__image {
    display: inline-block;
    object-fit: cover;
    border-radius: 100%;
    max-width: 150px;
    box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  }

  .author__card {
    min-height: 400px;
    box-shadow: 4px 4px 14px 0 rgb(8 15 52 / 4%);
  }
  .card__content--author {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: max-content;
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

  p {
    text-align: left;
  }

  .author__title {
    justify-self: start;
  }
`;

const AuthorBox = () => {
  const { facebookLink, linkeinLink, twitterLink } = useContext(AuthContext);
  return (
    <AuthorBoxStyled className="author">
      {/* <div className="author__container"> */}
      <Card className="author__card">
        <Card.Title>About Me</Card.Title>
        <Card.Body className="card__content--author">
          <img
            loading="lazy"
            className="author__image"
            src={authorImage}
            alt="Author's"
          ></img>
          <div className="author__content">
            <div className="author__heading">
              <h3 className="author__title">Salman Mujtaba</h3>
              <div className="author__icons">
                <Link href={facebookLink!}>
                  <Icon
                    className="social-icon--size"
                    icon={AppConstants.get("ANGULAR_LOWERCASE_LABEL")!}
                  ></Icon>
                </Link>
                <Link href={twitterLink!}>
                  <Icon
                    className="social-icon--size"
                    icon={AppConstants.get("TWITTER_LOWERCASE_LABEL")!}
                  ></Icon>
                </Link>
                <Link href="">
                  <Icon
                    className="social-icon--size"
                    icon={AppConstants.get("INSTAGRAM_LOWERCASE_LABEL")!}
                  ></Icon>
                </Link>
                <Link href={linkeinLink!}>
                  <Icon className="social-icon--size" icon="linkedin"></Icon>
                </Link>
              </div>
            </div>
            <p>
              I am a Full Stack developer passionate about Javascript and its
              related libraries and frameworks. I like to experiment with new
              technologies and develop solutions with them. I have more than 5
              years of industry experience and a Master's degree from UNCC. I
              spend my weekends playing Cricket or rooting for Manchester
              United! I also like to invest my time in reading technical blogs
              and reviewing novel open-source projects. I am married to my
              adorable wife, Yasha, who is currently in India waiting for her
              visa approval. 😔
            </p>
            {/* <AuthorBoxChips></AuthorBoxChips> */}
          </div>
        </Card.Body>
      </Card>
      {/* </div> */}
    </AuthorBoxStyled>
  );
};

export default AuthorBox;
