import AppConstants from "src/constants/app-constants";
import Chips from "src/components/ui/Chip.styled";
import styled from "styled-components";

const AlbumChipsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(110px, 100%), 1fr));
  row-gap: 15px;
`;

const AlbumChips: React.FC<{ className?: string }> = (props) => {
  return (
    <AlbumChipsStyled {...props}>
      <Chips
        className="album__chips--item"
        icon={AppConstants.get("ANGULAR_LABEL")!}
        text={AppConstants.get("ANGULAR_LABEL")!}
      ></Chips>
      <Chips
        className="album__chips--item"
        icon={AppConstants.get("MATERIAL_LABEL")!}
        text={AppConstants.get("MATERIAL_LABEL")!}
      ></Chips>
      <Chips
        className="album__chips--item"
        icon={AppConstants.get("VERCEL_LABEL")!}
        text={AppConstants.get("VERCEL_LABEL")!}
      ></Chips>
      <Chips
        className="album__chips--item"
        icon={AppConstants.get("SCSS_LABEL")!}
        text={AppConstants.get("SCSS_LABEL")!}
      ></Chips>
      <Chips
        className="album__chips--item"
        icon={AppConstants.get("KARMA_LABEL")!}
        text={AppConstants.get("KARMA_LABEL")!}
      ></Chips>
      <Chips
        className="album__chips--item"
        icon={AppConstants.get("GITHUB_LABEL")!}
        text={AppConstants.get("GITHUB_LABEL")!}
      ></Chips>
      <Chips
        className="album__chips--item"
        icon={AppConstants.get("API_LABEL")!}
        text={AppConstants.get("API_LABEL")!}
      ></Chips>
      <Chips
        className="album__chips--item"
        icon={AppConstants.get("TS_LABEL")!}
        text={AppConstants.get("TS_LABEL")!}
      ></Chips>
    </AlbumChipsStyled>
  );
};

export default AlbumChips;
