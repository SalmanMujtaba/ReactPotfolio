import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
:root {
  --card-height: 350px;
  --card-width: 300px;
  --icon-size: 50px;
  --background-color: #1CD6CE;
  --max-content-width: 1280px;
  --white: white;
  --social-icon-size: 24px;
  --react-color: #61dafb;
}

h1 {
  font-weight: 600;
  font-size: 3.5rem;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 1.5rem;
}

h2, h3, h4, h5 {
  font-weight: 500;
}

p {
  font-size: clamp(1rem, 2vw, 1.2lpr5rem);
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

.social-icon--size {
  height: var(--social-icon-size);
  width: var(--social-icon-size);
}

.full-width {
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

.react-color {
  color: var(--react-color);
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
  font-family: Roboto, 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif, 'Segoe UI';
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

h1 {
  font-weight: 300;
  font-family: Roboto;
  font-size: 3.5rem;
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
`;