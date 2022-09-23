
interface ITheme {
  fg: string;
  bg: string;
}
// Define our `fg` and `bg` on the theme
export const theme = {
  fg: "palevioletred",
  bg: "white"
};

// This theme swaps `fg` and `bg`
export const invertTheme = ({ fg, bg }: ITheme) => ({
  fg: bg,
  bg: fg
});

export const light = {
  text: 'var(--black)',
  nav: 'var(--background-color-light)',
  background: 'var(--background-color-light)'
}

export const dark = {
  text: 'var(--white)',
  nav: 'var(--background-color-dark)',
  background: 'var(--background-color-dark)'
}