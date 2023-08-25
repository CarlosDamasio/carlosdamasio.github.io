import { NavList } from '@primer/react'
import NavItem from '../../components/NavItem'

function SideBar() {
    return (
        <NavList>
            <NavList.Group title="About">
                <NavItem to="Myself">
                    Myself
                </NavItem>
                <NavItem to="MyFavourites">
                    My favourites
                </NavItem>
            </NavList.Group>
            <NavList.Group title="Career">
                <NavItem to="University">
                    University
                </NavItem>
                <NavItem to="Maksen">
                    Maksen
                </NavItem>
                <NavItem to="Novabase">
                    Novabase
                </NavItem>
                <NavItem to="Celfocus">
                    Celfocus
                </NavItem>
                <NavItem to="PlayStation">
                    PlayStation
                </NavItem>
            </NavList.Group>
            <NavList.Group title="Projects">
                <NavItem to="CarlosDamasio">
                    CarlosDamasio
                </NavItem>
                <NavItem to="Solvent">
                    Solvent.Life
                </NavItem>
                <NavItem to="Miscellaneous">
                    Misc
                </NavItem>
            </NavList.Group>
        </NavList >
    )
}
export default SideBar