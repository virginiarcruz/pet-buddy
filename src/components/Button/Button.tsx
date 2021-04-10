import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { ButtonContainer, Icon } from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<ButtonProps> = (
  { children, ...props },
  ref
) => (
  <ButtonContainer ref={ref} {...props}>
    <span>{children}</span>
    <Icon />
  </ButtonContainer>
)

export default forwardRef(Button)
