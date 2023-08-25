import avatar from "./../../assets/avatar.svg"
import github from "./../../assets/github.svg"
import linkedin from "./../../assets/linkedin.svg"
import curriculum from "./../../data/CV_Carlos_Damasio_2023.docx"
import { AiOutlineFileWord } from "react-icons/ai"
import { Avatar, Header, Octicon, Tooltip } from '@primer/react'




function GlobalBar() {
    return (
        <Header>
            <Header.Item sx={{ ml: 80, position: 'sticky' }}>
                <Header.Link
                    href="/Home"
                    sx={{
                        fontSize: 2,
                    }}
                >
                    <Avatar alt="avatar" src={avatar} size="50" sx={{ mr: 2, boxShadow: "0px 0px #888888" }} />
                    <span>CarlosDamasio.com</span>
                </Header.Link>
            </Header.Item>
            <Header.Item full></Header.Item>
            <Header.Item>
                <Header.Link href={curriculum} target="_blank" rel="noopener noreferrer" >
                    <Tooltip aria-label="CV" direction="se">
                        <Octicon
                            icon={AiOutlineFileWord}
                            color="#d5d9e6"
                            size={25}
                            sx={{ mr: 2, boxShadow: "0px 0px #888888" }}
                        />
                    </Tooltip>
                </Header.Link>
                <Header.Link href="https://github.com/CarlosDamasio" target="_blank" rel="noopener noreferrer">
                    <Avatar alt="linkedin" src={github} size="25" sx={{ mr: 2, boxShadow: "0px 0px #888888" }} />
                </Header.Link>
                <Header.Link href="https://www.linkedin.com/in/cdamasio19/" target="_blank" rel="noopener noreferrer">
                    <Avatar alt="linkedin" src={linkedin} size="25" sx={{ mr: 80, boxShadow: "0px 0px #888888" }} />
                </Header.Link>
            </Header.Item>
        </Header >
    );
}

export default GlobalBar
