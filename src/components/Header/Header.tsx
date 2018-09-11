import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

export interface IHeader {
	className?: string
}


const Header: React.SFC<IHeader> = ({ className }) => (
	<AppBar position="absolute" className={className} >
		<Toolbar>
			<Typography variant="title" color="inherit">
				Goall
      </Typography>
		</Toolbar>
	</AppBar>
)

export default Header