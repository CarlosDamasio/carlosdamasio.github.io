import { Text } from '@primer/react'

function Home() {
    return (
        <>
            <Text as="p" sx={{ fontWeight: 'bold', ml: 40 }}>
                Welcome to CarlosDamasio.com
            </Text>
            <Text as="p" sx={{ ml: 40 }}>
                This space is meant to be a static website coalescing some information about myself and created to serve not really for work but mostly for experimentation.
            </Text>
            <Text as="p" sx={{ ml: 40 }}>
                As you probably realised web development and web design are not my main strenghts although as with most areas in Tech,
                it's something I'm curious about.
            </Text>
            <Text as="p" sx={{ ml: 40 }}>
                My linkedin and github accounts together with my cv are the main foundation for the content on this site with some extras to come.
            </Text>
        </>
    )
}
export default Home