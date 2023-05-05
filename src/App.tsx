import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { useCustomTheme } from "./theme/useTheme";
import { THEME_TYPE } from "./theme/model";
import { GlobalStyles } from "./theme/GlobalStyles";
import { LoadingScreen } from "./containers/LoadingScreen";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  const theme = useCustomTheme(THEME_TYPE.DEFAULT);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={<LoadingScreen />}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
