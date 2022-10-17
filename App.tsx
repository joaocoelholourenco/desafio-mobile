import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import Employees from "@screens/Employees";
import theme from "./src/theme";
import { UsersProvider } from "@contexts/UsersContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" />
      <UsersProvider>
        <Employees />
      </UsersProvider>
    </ThemeProvider>
  );
}
