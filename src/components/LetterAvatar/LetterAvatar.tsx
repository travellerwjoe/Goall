import Avatar from '@material-ui/core/Avatar'
import styled from 'styled-components'


interface ILetterAvatarProps {
	color?: string,
}

const LetterAvatar = styled(Avatar).attrs<ILetterAvatarProps, any>({
	color: (props: ILetterAvatarProps) => props.color
})`
  background-color:${props => props.color}!important
`
export default LetterAvatar
