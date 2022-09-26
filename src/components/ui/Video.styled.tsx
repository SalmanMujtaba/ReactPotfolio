import AppConstants from "src/constants/app-constants";
import styled from "styled-components";
import videoGithub from "../../assets/videos/movie.mp4";

const getVideo = (type: string) => {
  switch (type) {
    case AppConstants.get("GIHUB_VIDEO"):
      return videoGithub;
  }
};
const VideoStyled = styled.div`
  video {
    width: min(100%, var(--max-content-width));
    max-height: 650px;
    height: auto;
  }
`;

const Video: React.FC<{ type: string }> = (props) => {
  const src = getVideo(props.type);
  return (
    <VideoStyled>
      <video controls autoPlay loop muted className="video-fluid">
        <source src={src} type="video/mp4" />
      </video>
    </VideoStyled>
  );
};

export default Video;
