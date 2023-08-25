import { NavList } from '@primer/react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function NavItem({ to, children }) {
    const resolved = useResolvedPath(to)
    const isCurrent = useMatch({ path: resolved.pathname, end: true })
    return (
        <NavList.Item as={Link} to={to} aria-current={isCurrent ? 'page' : undefined}>
            {children}
        </NavList.Item>
    )
}

export default NavItem