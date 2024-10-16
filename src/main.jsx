import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Details } from "./components/Details"
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";


import { ThemeProvider } from "styled-components";

import { Router } from "./routes";
import { AuthProvider } from "./hooks/auth";

createRoot(document.getElementById("root")).render( 
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Details /> */}
      <AuthProvider>
        <Router />
      </AuthProvider>
      
    </ThemeProvider>
  </StrictMode>,
);
