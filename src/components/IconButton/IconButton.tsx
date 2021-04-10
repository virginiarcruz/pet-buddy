import { IconButtonContainer, Icon } from './styles'

const IconButton = ({ ...props }) => (
  <IconButtonContainer className="icon-button" {...props}>
    <Icon />
  </IconButtonContainer>
)

export default IconButton
