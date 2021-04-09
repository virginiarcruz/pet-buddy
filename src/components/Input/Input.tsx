import { InputContainer } from './styles'

export type InputProps = {
  placeholder: string
}

const Input = ({ placeholder, ...props }: InputProps) => (
  <InputContainer type="text" placeholder={placeholder} {...props} />
)

export default Input
