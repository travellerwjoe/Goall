import * as React from 'react';
import Drawer from '@material-ui/core/Drawer'
import StarsIcon from '@material-ui/icons/Stars'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import { withStyles, WithStyles, Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import Header from '../Header'
import NavList, { TNavs } from '../NavList'

const navs: TNavs[] = [
	{
		href: '/recommends',
		icon: <StarsIcon />,
		title: 'Recommends',
	},
	{
		href: '/quizzes',
		icon: <MonetizationOnIcon />,
		title: 'Quizzes'
	}
]

const drawerWidth = 240

const styles = (theme: Theme) => createStyles({
	root: {
		flexGrow: 1,
		// height: 440,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
	},
	header: {
		zIndex: theme.zIndex.drawer + 1
	},
	drawer: {
		width: drawerWidth,
	},
	drawerPaper: {
		width: drawerWidth,
		// [theme.breakpoints.up('md')]: {
		// 	position: 'relative',
		// },
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		minWidth: 0,
	}
})

export interface IMainProps extends WithStyles<typeof styles, true> {
}


class Main extends React.Component<IMainProps, any> {
	public render() {
		const { classes, children } = this.props
		return (
			<div className={classes.root}>
				<Header className={classes.header} />
				<Drawer
					className={classes.drawer}
					variant="permanent"
					open={true}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.toolbar} />
					<NavList navList={navs} />
				</Drawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{children}
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Main)