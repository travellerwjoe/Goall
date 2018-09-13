import * as React from 'react'
import { Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { red, green, grey, blue, pink } from '@material-ui/core/colors'
import styled from 'styled-components'
import LetterAvatar from '../../../components/LetterAvatar'
import Link from '../../../components/Link'

const styles = createStyles({
	card: {
		maxWidth: 350
	},
	cardContent: {
		display: 'flex',
	},
	matchArea: {
		flex: 2,
	},
	statusArea: {
		flex: 1,
		textAlign: 'right',
		alignSelf: 'center'
	},
	scoreArea: {
		flex: 1,
		display: 'flex',
		justifyContent: 'space-between'
	},
	actionArea: {
		width: '100%'
	}
})


const Status = styled.div<IStatusProps>`
	color:${props => props.status === 0 ? red[400] : props.status === 1 ? green[400] : grey[400]}
`
interface IStatusProps {
	status: number
}

export interface IRecommendCardProps extends WithStyles<typeof styles> {
}

export interface IRecommendListState {
	anchorEl: HTMLElement | null
}

class RecommendCard extends React.Component<IRecommendCardProps, IRecommendListState> {
	constructor(props: IRecommendCardProps) {
		super(props);

		this.state = {
			anchorEl: null
		}
	}

	public render() {
		const { classes } = this.props
		const { anchorEl } = this.state
		const moreMenuOpen = Boolean(anchorEl)
		return (
			<Card className={classes.card}>
				<CardActionArea className={classes.actionArea}>
					<CardHeader
						title="西班牙甲级联赛"
						subheader="2018-09-20 20:00"
						avatar={
							<LetterAvatar color="orange">
								西
								</LetterAvatar>
						}
						action={
							<Fragment>
								<IconButton
									onClick={this.openMoreMenu}
								>
									<MoreVertIcon />
								</IconButton>
								<Menu
									anchorEl={anchorEl}
									open={moreMenuOpen}
									onClose={this.closeMoreMenu}
								>
									<MenuItem onClick={this.closeMoreMenu}>Ingore The League</MenuItem>
									<MenuItem onClick={this.closeMoreMenu}>Ingore The Match</MenuItem>
									<MenuItem onClick={this.closeMoreMenu}>Just This League</MenuItem>
									<MenuItem onClick={this.closeMoreMenu}>Top</MenuItem>
								</Menu>
							</Fragment>
						}
					/>
					<Link to="/recommend/123">
						<CardContent className={classes.cardContent}>
							<div className={classes.matchArea}>
								<Typography variant="headline">巴塞罗那</Typography>
								<Typography variant="caption">
									VS
          		</Typography>
								<Typography variant="headline">皇家马德里</Typography>
							</div>
							<div className={classes.scoreArea}>
								<Typography variant="display3">2</Typography>
								<Typography variant="display3">
									:
								</Typography>
								<Typography variant="display3">0</Typography>
							</div>
							<div className={classes.statusArea}>
								<Typography variant="title">
									<Status status={0}>未</Status>
								</Typography>
							</div>
						</CardContent>
						<CardActions>
							<List dense={true}>
								<ListItem>
									<ListItemAvatar>
										<LetterAvatar color={pink[400]}>
											让
										</LetterAvatar>
									</ListItemAvatar>
									<ListItemText
										primary="让球(-0.5)"
										secondary="主(10)/客(5)"
									/>
									<ListItemText
										primary="让球(-0.75)"
										secondary="主(10)/客(5)"
									/>
								</ListItem>
								<ListItem>
									<ListItemAvatar>
										<LetterAvatar color={red[400]}>
											胜
										</LetterAvatar>
									</ListItemAvatar>
									<ListItemText
										primary="胜平负"
										secondary="胜(10)/平(3)/负(5)"
									/>
								</ListItem>
								<ListItem>
									<ListItemAvatar>
										<LetterAvatar color={blue[400]}>
											大
										</LetterAvatar>
									</ListItemAvatar>
									<ListItemText
										primary="大小球(2.5)"
										secondary="大(10)/小(5)"
									/>
								</ListItem>
								<ListItem>
									<ListItemAvatar>
										<LetterAvatar color={green[400]}>
											角
										</LetterAvatar>
									</ListItemAvatar>
									<ListItemText
										primary="角(9.5)"
										secondary="高(10)/低(5)"
									/>
								</ListItem>
							</List>
						</CardActions>
					</Link>
				</CardActionArea>
			</Card>
		);
	}

	private openMoreMenu = (e: React.MouseEvent<HTMLElement>) => {
		this.setState({
			anchorEl: e.currentTarget
		})
	}

	private closeMoreMenu = () => {
		this.setState({
			anchorEl: null
		})
	}
}

export default withStyles(styles)(RecommendCard)