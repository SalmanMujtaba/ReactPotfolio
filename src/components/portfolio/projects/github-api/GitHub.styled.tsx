import AppConstants from "src/constants/app-constants";
import Icon from "src/components/ui/Icon.styled";
import { LinkButton } from "src/components/ui/Link.styled";
import Video from "src/components/ui/Video.styled";
import styled from "styled-components";
const GithubStyled = styled.div`
  .github__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    row-gap: 20px;
    justify-content: center;
  }
  .github__column {
    p {
      line-height: 28px;
    }
  }
  .github__link {
    display: flex;
    place-items: center;
    flex-direction: column;
  }
`;
const GitHubSearch = () => {
  return (
    <GithubStyled className="layout-section">
      <h2 className="heading">GitHub API search</h2>
      <p className="heading-text">
        Search Javasctipt repositories and view their recent commits.
      </p>
      <div className="text-align-center">
        <Video type={AppConstants.get("GIHUB_VIDEO")!}></Video>
      </div>
      <div className="github__content mt-20 text-align-center">
        <div className="github__column">
          <Icon
            icon={AppConstants.get("BOLT_ICON_LABEL")!}
            alt={AppConstants.get("BOLT_ICON_LABEL")!}
          ></Icon>
          <h3 className="column-heading">Features</h3>
          <p className="mt-20">
            The user can search for JS repositories present in the GitHub. The
            application also shows commits of the last 30 days of corresponding
            repository. A simple form vaildation is in place. It can be viewed
            from here. The error dialog shows an intuitive error in case of any
            API failure.
          </p>
        </div>
        <div className="github__column">
          <Icon
            icon={AppConstants.get("CODE_ICON_LABEL")!}
            alt={AppConstants.get("CODE_ICON_LABEL")!}
          ></Icon>
          <h3 className="column-heading">Features</h3>
          <div>lorun asdas asd ads dad asd ad ads </div>
        </div>
        <div className="github__column">
          <Icon
            icon={AppConstants.get("LINK_ICON_LABEL")!}
            alt={AppConstants.get("LINK_ICON_LABEL")!}
          ></Icon>
          <h3 className="column-heading">Links</h3>
          <div className="github__link">
            <LinkButton href="" icon={AppConstants.get("RIGHT_ICON_LABEL")!}>
              Souce code on Github
            </LinkButton>
            <LinkButton href="" icon={AppConstants.get("RIGHT_ICON_LABEL")!}>
              Souce code on Github
            </LinkButton>
          </div>
        </div>
      </div>
    </GithubStyled>
  );
};

export default GitHubSearch;
