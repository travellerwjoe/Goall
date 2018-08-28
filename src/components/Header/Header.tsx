import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

export interface IHeader {
}

export default class Header extends React.Component<IHeader, any> {
    public render() {
        return (
            <AppBar position="sticky" >
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Goall
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}
