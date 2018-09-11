import * as React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
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
            <ListItem button key={nav.title}>
                <ListItemIcon>
                    {nav.icon}
                </ListItemIcon>
                <ListItemText primary={nav.title} />
            </ListItem>
        ), navList)}
    </List>
)

export default NavList