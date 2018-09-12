import * as React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Link from '../Link'
import { map } from 'lodash/fp'

export type TNavs = {
    href: string
    icon: React.ReactElement<any>,
    title: string,
}

export interface INavListProps {
    navList: TNavs[]
}

const NavList: React.SFC<INavListProps> = ({ navList }) => (
    <List component="nav">
        {map(nav => (
            <Link to={nav.href} key={nav.title}>
                <ListItem button>
                    <ListItemIcon>
                        {nav.icon}
                    </ListItemIcon>
                    <ListItemText primary={nav.title} />
                </ListItem>
            </Link>
        ), navList)}
    </List>
)

export default NavList