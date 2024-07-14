import { theme } from "@primer/react";
import deepmerge from "deepmerge";

const myTheme = deepmerge(theme, {
  colorSchemes: {
    light: {
      colors: {
        header: {
          bg: "#032761",
        },
        text: {
          primary: "#4A4A4A",
          secondary: "#4A4A4A",
          default: "#4A4A4A",
        },
        bg: {
          primary: "#f8f8ff",
          secondary: "#4A4A4A",
          default: "#f5faff",
        },
        border: {
          default: "#4A4A4A",
        },
      },
    },
    dark: {
      colors: {
        header: {
          bg: "#032761",
        },
        text: {
          primary: "#f8f8ff",
          secondary: "#708090",
          default: "#f8f8ff",
        },
        bg: {
          primary: "#415370",
          secondary: "#434c56",
          default: "#262a30",
        },
        border: {
          default: "#f8f8ff",
        },
      },
    },
  },
});

export default myTheme;
