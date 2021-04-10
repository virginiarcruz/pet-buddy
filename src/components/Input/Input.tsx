import React from 'react'
import { InputContainer } from './styles'

export type InputProps = {
  placeholder: string
  id?: string
  inputValue?: any
}

const Input = ({ placeholder, id, inputValue, ...props }: InputProps) => (
  <InputContainer
    id={id}
    value={inputValue}
    type="text"
    placeholder={placeholder}
    {...props}
  />
)

export default Input
