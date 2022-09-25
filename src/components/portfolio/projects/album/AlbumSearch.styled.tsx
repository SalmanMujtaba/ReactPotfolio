import AlbumChips from "./AlbumChips.styled";
import AppConstants from "src/constants/app-constants";
import Image from "src/components/ui/Image.styled";
import Link from "src/components/ui/Link.styled";
import styled from "styled-components";
const AlbumStyled = styled.div`
  .album__chips {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(110px, 100%), 1fr));
    row-gap: 15px;
  }
  .album__img {
    & img {
      height: 500px;
    }
  }
  .album__container {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      /* gap: 2rem; */
    }
    place-items: center;
    gap: 3rem;
  }
  .album__content {
    width: min(500px, 100%);
    font-weight: 300;
  }
`;
const AlbumSearch = () => {
  return (
    <AlbumStyled className="layout-section">
      <h2 className="heading">Album Search</h2>
      <p className="heading-text">Search and Filter albums</p>
      <div className="album__container">
        <div className="album__img img-hover-zoom">
          <Image
            figCaption="Album Search Desktop"
            type={AppConstants.get("ALBUM_SEARCH_IMG")!}
            alt="Album desktop"
          ></Image>
        </div>
        <div className="album__content text-align-center">
          <p>
            A search-based application where a user can view photo albums. The
            search feature facilitates the filtering of the photos in the
            selected album. A different album could be selected from the
            drop-down.
          </p>
          <p className="mt-20">
            Words are shown highlihgted in the suggested options, if any three
            continuous characters of a photo's title are matched with the user
            input.
          </p>
          <h3 className="mt-20 mb-10 text-align-center">Uses:</h3>
          <AlbumChips></AlbumChips>
        </div>
        <div className="album__content">
          <h3 className="text-align-center mb-10">Other Features:</h3>
          <ul className="feature-list">
            <li>
              <p>
                The app can be accessed from{" "}
                <Link href="https://album-search.vercel.app/user/2/albums">
                  here
                </Link>
                .
              </p>
            </li>
            <li>
              <p>The design is reponsive and is inspired by Neomorphic CSS.</p>
            </li>
            <li>
              <p>Clicking on a photo opens a full-scren preview.</p>
            </li>
            <li>
              <p>
                The data is being pulled from{" "}
                <Link href="https://jsonplaceholder.typicode.com/">here.</Link>
              </p>
            </li>
            <li>
              <p>
                Some CSS transitions are included to enhance the user
                experience.
              </p>
            </li>

            <li>
              <p>Images are lazy loaded.</p>
            </li>
          </ul>
        </div>
        <div className="album__img img-hover-zoom">
          <Image
            figCaption="Mobile View"
            type={AppConstants.get("ALBUM_SEARCH_IMG_MOBILE")!}
            alt="Album desktop"
          ></Image>
        </div>
      </div>
    </AlbumStyled>
  );
};

export default AlbumSearch;
