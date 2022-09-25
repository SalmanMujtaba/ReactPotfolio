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
    <AreasStyled className="area layout-section">
      {areasHeading && <h2 className="heading">{areasHeading}</h2>}
      {areasSubHeading && <p className="heading-text">{areasSubHeading}</p>}
      <div className="area__container">
        <AreaItem
          type={AppConstants.get("JAVASCRIPT_LOWERCASE_LABEL")!}
        ></AreaItem>
        <AreaItem
          type={AppConstants.get("ANGULAR_LOWERCASE_LABEL")!}
        ></AreaItem>
        <AreaItem type={AppConstants.get("REACT_LOWERCASE_LABEL")!}></AreaItem>
        <AreaItem type={AppConstants.get("NEST_LOWERCASE_LABEL")!}></AreaItem>
        <AreaItem
          type={AppConstants.get("DATABASE_LOWERCASE_LABEL")!}
        ></AreaItem>
        <AreaItem type={AppConstants.get("CSS_LOWERCASE_LABEL")!}></AreaItem>
        <AreaItem type={AppConstants.get("HTML_LOWERCASE_LABEL")!}></AreaItem>
        <AreaItem type={AppConstants.get("NODE_LOWERCASE_LABEL")!}></AreaItem>
      </div>
    </AreasStyled>
  );
};

export default Areas;
