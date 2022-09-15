import AppConstants from "src/constants/app-constants";
import AreaItem from "./AreaItem.styled";
import styled from "styled-components";

const AreasStyled = styled.div`
  .area__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
    gap: 20px;
  }
`;

const Areas = () => {
  const areasHeading = AppConstants.get("AREAS_HEADING");
  const areasSubHeading = AppConstants.get("AREAS_SUB_HEADING");
  return (
    <AreasStyled className="area">
      {areasHeading && <h2>{areasHeading}</h2>}
      {areasSubHeading && <h4>{areasSubHeading}</h4>}
      <div className="area__container">
        <AreaItem type="javascript"></AreaItem>
        <AreaItem type="angular"></AreaItem>
        <AreaItem type="react"></AreaItem>
        <AreaItem type="javascript"></AreaItem>
        <AreaItem type="javascript"></AreaItem>
        <AreaItem type="javascript"></AreaItem>
      </div>
    </AreasStyled>
  );
};

export default Areas;
