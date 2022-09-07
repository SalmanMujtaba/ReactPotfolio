import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
:root {
  --card-height: 350px;
  --card-width: 300px;
  --icon-size: 50px;
  --background-color: rgb(244, 244, 250);
  --max-content-width: 1280px;
}

.flex {
  display: flex;
}

.icon-button {
  background-color: transparent;
  height: var(--icon-size);
  width: var(--icon-size);
  border: none;
}
.full-width {
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

section {
  padding-left: 20px;
  padding-right: 20px;
}

.full-width__inner-container {
  margin: 0 auto;
  max-width: var(--max-content-width);
}


body {
  margin: 0;
  font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif, 'Segoe UI';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  background-color: var(--background-color);
}


/* Box sizing rules */

*,
*::before,
*::after {
  box-sizing: border-box;
  scroll-behavior: smooth;
}



/* Remove default margin */

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
ul,
dd {
  margin: 0;
}


/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */

ul[role='list'],
ol[role='list'] {
  list-style: none;
}


/* Set core root defaults */

html:focus-within {
  scroll-behavior: smooth;
}


/* Set core body defaults */

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}


/* A elements that don't have a class get default styles */

a:not([class]) {
  text-decoration-skip-ink: auto;
}


/* Make images easier to work with */

img,
picture {
  max-width: 100%;
  display: block;
}


/* Inherit fonts for inputs and buttons */

input,
button,
textarea,
select {
  font: inherit;
}


/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`