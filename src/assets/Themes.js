import { theme } from "@primer/react";
import deepmerge from "deepmerge";

const myTheme = deepmerge(theme, {
  colorSchemes: {
    light: {
      colors: {
        header: {
          bg: "#0d1117",
        },
        text: {
          primary: "#e6edf3",
          secondary: "#8b949e",
          default: "#e6edf3",
        },
        bg: {
          primary: "#0d1117",
          secondary: "#161b22",
          default: "#21262d",
        },
        border: {
          default: "#30363d",
        },
        canvas: {
          default: "#0d1117",
          overlay: "#161b22",
          inset: "#010409",
          subtle: "#161b22",
        },
        accent: {
          fg: "#58a6ff",
          emphasis: "#1f6feb",
          muted: "#388bfd",
          subtle: "#0d1117",
        },
      },
    },
    dark: {
      colors: {
        header: {
          bg: "#0d1117",
        },
        text: {
          primary: "#e6edf3",
          secondary: "#8b949e",
          default: "#e6edf3",
        },
        bg: {
          primary: "#0d1117",
          secondary: "#161b22",
          default: "#21262d",
        },
        border: {
          default: "#30363d",
        },
        canvas: {
          default: "#0d1117",
          overlay: "#161b22",
          inset: "#010409",
          subtle: "#161b22",
        },
        accent: {
          fg: "#58a6ff",
          emphasis: "#1f6feb",
          muted: "#388bfd",
          subtle: "#0d1117",
        },
      },
    },
  },
});

export default myTheme;
