import AppConstants from "src/constants/app-constants";
import Icon from "src/components/ui/Icon.styled";
import styled from "styled-components";

const AreaItemStyled = styled.div``;

const AreaItem: React.FC<{ className?: string; type: string }> = (props) => {
  return (
    <AreaItemStyled {...props}>
      {props.type === "javascript" && (
        <>
          <Icon icon="javascript"></Icon>
          <h4>Javascript</h4>
          <p>
            I can never say that I know Javascript because, now and then,
            something comes up which amazes me. I have worked on Angular and
            React-based projects at the industry and personal levels. I try to
            create simple widgets in JS now and keep coming back to the core
            concepts of JS.
          </p>
        </>
      )}
      {props.type === AppConstants.get("ANGULAR_LOWERCASE_LABEL") && (
        <>
          <Icon icon={AppConstants.get("ANGULAR_LOWERCASE_LABEL")!}></Icon>
          <h4>Angular</h4>
          <p>
            I started working on Angular JS in 2018 and worked on all the
            versions of Angular 2+. I have created libraries, front-end
            microservices, style-heavy UI, and complex forms. I would say
            Angular is my go-to JS framework.
          </p>
        </>
      )}
      {props.type === "react" && (
        <>
          <Icon icon="react"></Icon>
          <h4 className="react-color">React</h4>
          <p>
            The ease of use, lightweight, and open source community influenced
            me to learn React. Most of my projects on React are personal. Since
            I know both Angular and React, it gives me some interesting
            perspectives whenever I am trying to solve a problem. Given the
            opportunity, I am confident that I would be able to write production
            level code in React.
          </p>
        </>
      )}
    </AreaItemStyled>
  );
};

export default AreaItem;
