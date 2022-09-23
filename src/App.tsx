import "./App.css";

import { GlobalStyles } from "./Global.styled";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={main}> */}
      <GlobalStyles />
      <Portfolio></Portfolio>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
