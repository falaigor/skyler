import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: {
    gray: {
      "900": "#4A4C50",
      "500": "#40476C",
      "10": "#F0F5FF",
    },
    blue: {
      "900": "#282D46",
      "700": "#40476C",
      "500": "#6A8FDA",
      "200": "#81ABFF",
      "100": "#9DBEFF",
    },
    pink: {
      "500": "#DE5F8E",
      "200": "#FF71A5",
      "100": "#F89FC4",
    },
    orange: {
      "500": "#E19845",
      "200": "#FFB35C",
      "100": "#FFC480",
    },
  },
  fonts: {
    heading: "Sora",
    body: "Sora",
  },
  styles: {
    global: {
      body: {
        fontSize: "0.9rem",
      },
    },
  },
});
