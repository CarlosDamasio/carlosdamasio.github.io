import { theme } from "@primer/react";
import deepmerge from "deepmerge";

/**
 * Theme Colors - Black, Grey, and Blue (Enhanced Readability)
 * 
 * Color Palette (WCAG AA Contrast Ratios):
 * - Black Background (#0d1117): Dark primary background
 * - Dark Grey (#21262d): Secondary background containers
 * - Light Grey (#8b949e): Text and borders
 * - Bright Blue (#58a6ff): Primary accent color for actions
 *   - Dark Blue (#1f6feb): Darker blue variation
 *   - Light Blue (#79c0ff): Lighter blue variation
 * 
 * Text on Dark Background:
 * - Light Grey (#c9d1d9) on Black (#0d1117): 11.9:1 contrast ratio (WCAG AAA ✓)
 * - Grey (#8b949e) on Black (#0d1117): 6.8:1 contrast ratio (WCAG AA ✓)
 * - Blue (#58a6ff) on Black (#0d1117): 8.1:1 contrast ratio (WCAG AA ✓)
 */
const colorPalette = {
  // Primary Colors
  black: "#0d1117",
  grey: "#8b949e",
  blue: "#58a6ff",
  
  // Color Variations
  greyDark: "#21262d",
  greyLight: "#c9d1d9",
  blueDark: "#1f6feb",
  blueLight: "#79c0ff",
  
  // Status Colors
  success: "#238636",
  danger: "#f85149",
};

const myTheme = deepmerge(theme, {
  colorSchemes: {
    light: {
      colors: {
        header: {
          bg: colorPalette.black,
        },
        text: {
          primary: colorPalette.greyLight,
          secondary: colorPalette.grey,
          default: colorPalette.greyLight,
        },
        bg: {
          primary: colorPalette.black,
          secondary: "#0d1117",
          default: colorPalette.greyDark,
        },
        border: {
          default: colorPalette.greyDark,
        },
        canvas: {
          default: "#0d1117",
          overlay: colorPalette.black,
          inset: "#0d1117",
          subtle: colorPalette.greyDark,
        },
        accent: {
          fg: colorPalette.blue,
          emphasis: colorPalette.blueDark,
          muted: colorPalette.blueLight,
          subtle: colorPalette.blueDark,
        },
      },
    },
    dark: {
      colors: {
        header: {
          bg: colorPalette.black,
        },
        text: {
          primary: colorPalette.greyLight,
          secondary: colorPalette.grey,
          default: colorPalette.greyLight,
        },
        bg: {
          primary: colorPalette.black,
          secondary: "#0d1117",
          default: colorPalette.greyDark,
        },
        border: {
          default: colorPalette.greyDark,
        },
        canvas: {
          default: "#0d1117",
          overlay: colorPalette.black,
          inset: "#0d1117",
          subtle: colorPalette.greyDark,
        },
        accent: {
          fg: colorPalette.blue,
          emphasis: colorPalette.blueDark,
          muted: colorPalette.blueLight,
          subtle: colorPalette.blueDark,
        },
      },
    },
  },
});

export default myTheme;
export { colorPalette };
