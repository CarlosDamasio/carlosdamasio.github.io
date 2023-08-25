import { theme } from "@primer/react";
import deepmerge from 'deepmerge'

const myTheme = deepmerge(theme, {
    colorSchemes: {
        light: {
            colors: {
                header: {
                    bg: '#032761',
                }
            },
        },
        dark_dimmed: {
            colors: {
                header: {
                    bg: '#032761',
                },
            },
        },
    },
})

export default myTheme
