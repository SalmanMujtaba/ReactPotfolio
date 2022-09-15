import Icon from "src/components/ui/Icon.styled";
import AppConstants from "src/constants/app-constants";
import styled from "styled-components";

const AreaItemStyled = styled.div``;

const AreaItem: React.FC<{ className?: string; type: string }> = (props) => {
  return (
    <AreaItemStyled {...props}>
      {props.type === AppConstants.get("JAVASCRIPT_LOWERCASE_LABEL") && (
        <>
          <Icon icon={AppConstants.get("JAVASCRIPT_LOWERCASE_LABEL")!}></Icon>
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
      {props.type === AppConstants.get("REACT_LOWERCASE_LABEL") && (
        <>
          <Icon icon={AppConstants.get("REACT_LOWERCASE_LABEL")!}></Icon>
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
      {props.type === AppConstants.get("NODE_LOWERCASE_LABEL") && (
        <>
          <Icon icon={AppConstants.get("NODE_LOWERCASE_LABEL")!}></Icon>
          <h4>Node</h4>
          <p>
            I have worked on Node since 2017. It is also my preferred backend
            for projects. I am working on Nest JS and Next JS frameworks these
            days.
          </p>
        </>
      )}
      {props.type === AppConstants.get("NEST_LOWERCASE_LABEL") && (
        <>
          <Icon icon={AppConstants.get("NEST_LOWERCASE_LABEL")!}></Icon>
          <h4>Nest JS</h4>
          <p>
            I am currently working on a Nx based monorepo with the backend based
            on Nest JS. I have also completed the official Nest JS course. Nest
            JS allows seamless integration with Angular, GraphQL, Swagger API,
            etc.
          </p>
        </>
      )}
      {props.type === AppConstants.get("DATABASE_LOWERCASE_LABEL") && (
        <>
          <Icon icon={AppConstants.get("DATABASE_LOWERCASE_LABEL")!}></Icon>
          <h4>Database</h4>
          <p>
            I have extensively worked on relational and non-relational
            databases. Currently, I am actively working with Mongo DB. I am
            comfortable setting up different databases from scratch.
          </p>
        </>
      )}
      {props.type === AppConstants.get("CSS_LOWERCASE_LABEL") && (
        <>
          <Icon icon={AppConstants.get("CSS_LOWERCASE_LABEL")!}></Icon>
          <h4>CSS</h4>
          <p>
            I ❤️ working with CSS. I keep coming back to vanilla CSS for the
            shear joy of using it that way. I have worked on Angular Material,
            SCSS, Styled Components, and Tachyons. Meet my{" "}
            <a
              href="https://www.youtube.com/kepowob"
              target="_blank"
              rel="noreferrer"
            >
              favourite youtuber
            </a>
            for CSS.
          </p>
        </>
      )}
      {props.type === AppConstants.get("HTML_LOWERCASE_LABEL") && (
        <>
          <Icon icon={AppConstants.get("HTML_LOWERCASE_LABEL")!}></Icon>
          <h4>HTML</h4>
          <p>
            I'd say I have advanced knowledge of HTML. I try to maintain the
            correct structure for the HTML which is accessible at the end of the
            day.
          </p>
        </>
      )}
    </AreaItemStyled>
  );
};

export default AreaItem;
