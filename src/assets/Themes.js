import { theme } from "@primer/react";
import deepmerge from 'deepmerge'

const myTheme = deepmerge(theme, {
    colorSchemes: {
        light: {
            colors: {
                header: {
                    bg: '#032761',
                },
                backgroundColor: {
                    primary: "#f5faff",
                    secondary: "#f5faff",
                    default: "#f5faff"
                },
            },
        },
        dark_dimmed: {
            colors: {
                header: {
                    bg: '#011330',
                },
                backgroundColor: {
                    primary: "#262a30",
                    secondary: "#262a30",
                    default: "#262a30"
                },
            },
        },
    },
})

export default myTheme
