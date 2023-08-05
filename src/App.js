import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import { theme } from "./components/theme/theme";


const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
