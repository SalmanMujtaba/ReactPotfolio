import AppConstants from "src/constants/app-constants";
import Chips from "src/components/ui/Chip.styled";
import Image from "src/components/ui/Image.styled";
import styled from "styled-components";
const AlbumStyled = styled.div`
  .album__chips {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(130px, 100%), 1fr));
    /* place- */
  }
  .album__img {
    /* height: 500px; */
    & img {
      height: 500px;
    }
  }
  .album__container {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 3rem;
  }
  .album__content {
    place-self: center;
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
            type={AppConstants.get("ALBUM_SEARCH_IMG")!}
            alt="Album desktop"
          ></Image>
        </div>
        <div className="album__content">
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
          <h3 className="mt-20">Uses:</h3>
          <div className="album__chips">
            <Chips
              className="album__chips--item"
              icon="angular"
              text="Angular"
            ></Chips>
            <Chips
              className="album__chips--item"
              icon={AppConstants.get("MATERIAL_LOWERCASE_LABEL")!}
              text="Material"
            ></Chips>
            <Chips
              className="album__chips--item"
              icon={AppConstants.get("VERCEL_LOWERCASE_LABEL")!}
              text="Vercel"
            ></Chips>
            <Chips
              className="album__chips--item"
              icon={AppConstants.get("SCSS_LOWERCASE_LABEL")!}
              text="SCSS"
            ></Chips>
          </div>
        </div>
        <div>
          asdadds
          <ul>
            <li>dasd</li>
            <li>ads</li>
            <li>asd</li>
            <li>asda</li>
            <li>ads</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="album__img img-hover-zoom hide-md">
          <Image
            type={AppConstants.get("ALBUM_SEARCH_IMG_MOBILE")!}
            alt="Album desktop"
          ></Image>
        </div>
      </div>
    </AlbumStyled>
  );
};

export default AlbumSearch;
