import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { ButtonContainer, Icon } from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
  children?: React.ReactNode
} & ButtonTypes

const Button = ({ children, ...props }: ButtonProps) => (
  <ButtonContainer {...props}>
    <span>{children}</span>
    <Icon />
  </ButtonContainer>
)

export default Button
