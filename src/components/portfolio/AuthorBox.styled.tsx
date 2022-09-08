import Card from "../ui/Card.styled";
import Section from "../layout/Section.styled";
import authorImage from '../../assets/images/author.webp';
import styled from "styled-components";

const AuthorBoxStyled = styled.div`
  &.author {
    width: 80%;
    position: relative;
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
  }
  .author__image {
    position: absolute;
    width: 55%;
    height: 400px;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    border-radius: 30px;
  }

  .author__container {
    display: flex;
    justify-content: flex-end;
    width: inherit;
  }
  .author__card {
    z-index: 1;
    position: relative;
    margin-top: 40px;
    margin-bottom: 65px;
    box-shadow: 4px 4px 14px 0 rgb(8 15 52 / 4%);
  }
`;

const AuthorBox = () => {
  return (
    <Section position="relative">
      <AuthorBoxStyled className="author">  
        <div className="author__container">
          <img className="author__image" src={authorImage} alt="Author's"></img>
          <Card height="300px" width="530px" className="author__card"></Card>
        </div>
      </AuthorBoxStyled>
    </Section>
  );
}


export default AuthorBox;