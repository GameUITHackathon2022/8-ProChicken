import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { useUserContext } from "../context/UserContext";
import MainLayout from "./MainLayout";
import SigninPage from "../pages/SigninPage";
import { Navigate } from "react-router-dom";

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
