import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle `
:root {
  --card-height: 350px;
  --card-width: 300px;
  --icon-size: 50px;
  --background-color: rgb(244, 244, 250);
  --max-content-width: 1110px;
  --white: white;
  --social-icon-size: 24px;
  --react-color: #61dafb;
  --navbar-height: 2.5rem;
  --background-color-light: #f4f4fa;
  --background-color-dark: #0C0B31;
  --black: #000;
  --subheading-color: #9e9e9e;
  --subheading-font-weight: 300;
  --subheading-size: 1.25rem;
  --heading-line-height: 48px;
  --heading-letter-spacing: 5px;
  --heading-font-weight: 500;
  --link-color: #007bff;
  --link-hover-color: #0056b3;
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
  font-size: clamp(14px, 1.25vw, 1.25rem);
  line-height: 24px;
  font-weight: 400;
}

.flex {
  display: flex;
}

.gray-color {
  color: var(--subheading-color);
}

.fw-400 {
  font-weight: var(--subheading-font-weight);
}

.column-heading {
  font-size: 28px;
}

.link-icon-animate {
  img {
    transition: transform 0.2s linear;
    fill: red;
  }
  &:hover {
    img {
      transform: translateX(10px);
    }
  }
}

figcaption {
  text-align: center;
  font-weight: 300;
  font-size: 14px;
  padding-top: 10px;
}
.heading {
  line-height: var(--heading-line-height);
  letter-spacing:var(--heading-letter-spacing);
  font-weight: var(--heading-font-weight);
  margin-block-end: 1.25rem;
  text-align: center;
}

.feature-list {
  display: block;
  margin-left: -0.625rem;
}

.feature-list li {
  display: block;
  position: relative;
}

.feature-list li:not(:last-child) {
  margin-bottom: 1rem;
}

.feature-list li:before {
  content: "";
  position: absolute;
  top: 1.2em;
  left: -1.875rem;
  margin-top: -.9em;
  background: #f12711;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
}

hr.styled {
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
}

.fancy-text {
    /* add a background that is clipped to the text */
  background-clip: text;
  -webkit-background-clip: text; /* chrome still needs the -webkit- prefix*/
  
  /* make the text transparent so that the background can be seen underneath*/
  color: transparent;
  
  /* set the background-scale, and scroll it along! */
  background-size: auto 100%;
  background-repeat: repeat-x;
  animation: scroll 30s infinite linear;
}

.mt-20 {
  margin-top: 1.25rem;
}

.ml-20 {
margin-left: 20px;
}

.mb-20 {
  margin-block-end: 20px;
}

.mb-10 {
  margin-block-end: 10px;
}

/* define the background-scrolling animation */
@keyframes scroll {
  from { background-position-x: 0;    }
  to   { background-position-x: -100% }
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

.position-sticky {
  position: sticky;
  top: var(--navbar-height);
}

section {
  padding-left: 20px;
  padding-right: 20px;
}

.layout-section {
  padding-inline: 20px;
  margin-block: 30px;
}

.text-align-center {
  text-align: center;
}

.hide-md {
  @media (max-width: 769px) {
    display: none;
  }
}

.full-width__inner-container {
  margin: 0 auto;
  max-width: var(--max-content-width);
}

/* [1] The container */
.img-hover-zoom {
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}

/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img {
  transition: transform .5s ease;
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img {
  transform: scale(1.5);
}

/* Point-zoom Container */
.img-hover-zoom--point-zoom img {
  transform-origin: 65% 75%;
  transition: transform 1s, filter .5s ease-out;
}

/* The Transformation */
.img-hover-zoom--point-zoom:hover img {
  transform: scale(5);
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