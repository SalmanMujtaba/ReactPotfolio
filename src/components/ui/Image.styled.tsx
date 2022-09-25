import AppConstants from "src/constants/app-constants";
import { IImage } from "src/models/interfaces";
import albumSearch from "../../assets/images/albumSearch.png";
import albumSearchMobile from "../../assets/images/albumSearchMobile.png";
import styled from "styled-components";

const imageType = (type: string) => {
  switch (type) {
    case AppConstants.get("ALBUM_SEARCH_IMG"):
      return albumSearch;
    case AppConstants.get("ALBUM_SEARCH_IMG_MOBILE"):
      return albumSearchMobile;
  }
};
const ImageStyled = styled.figure`
  figCaption {
    text-align: center;
  }
  img {
    object-fit: cover;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.9);
  }
`;

const Image: React.FC<IImage> = (props) => {
  const src = imageType(props.type);
  return (
    <ImageStyled className={props.className}>
      <img src={src} alt={props.alt ? props.alt : ""}></img>
      {props.figCaption && <figcaption>{props.figCaption}</figcaption>}
    </ImageStyled>
  );
};

export default Image;
