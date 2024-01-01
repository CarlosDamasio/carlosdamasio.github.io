import { NavList } from '@primer/react'
import NavItem from '../../components/NavItem'

function SideBar() {
    return (
        <NavList sx={{ ml: 80 }}>
            <NavList.Group title="About">
                <NavItem to="Myself">
                    Myself
                </NavItem>
                <NavItem to="MyFavourites">
                    My favourites
                </NavItem>
            </NavList.Group>
            <NavList.Group title="Career">
                <NavItem to="PlayStation">
                    PlayStation
                    <NavList.TrailingVisual>2016</NavList.TrailingVisual>
                </NavItem>
                <NavItem to="Celfocus">
                    Celfocus
                    <NavList.TrailingVisual>2015</NavList.TrailingVisual>
                </NavItem>
                <NavItem to="Novabase">
                    Novabase
                    <NavList.TrailingVisual>2013</NavList.TrailingVisual>
                </NavItem>
                <NavItem to="Maksen">
                    Maksen
                    <NavList.TrailingVisual>2011</NavList.TrailingVisual>
                </NavItem>
                <NavItem to="University">
                    University
                    <NavList.TrailingVisual>2006</NavList.TrailingVisual>
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