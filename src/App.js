import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";

import Header from "components/Header";
import Home from "pages/Home";
import { GlobalStyles } from "styles/Global";
import { theme } from "styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme
        baseColor={theme.colors.secondaryBlack}
        highlightColor={theme.colors.lightWhite}
      >
        <GlobalStyles />
        <Header />
        <Home />
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
