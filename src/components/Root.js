import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import MainLayout from "./MainLayout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#68B984",
    },
  },
});

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default Root;
