import styled, { css, DefaultTheme } from 'styled-components'
import IconButton from './assets/arrow.svg'

import { ButtonProps } from './Button'

const buttonModifiers = {
  link: (theme: DefaultTheme) => css`
    background: none;
    padding: 0;
    color: ${theme.color.blue};
    text-decoration: none;
    svg {
      path {
        fill: ${theme.color.blue};
      }
    }
  `
}

export const ButtonContainer = styled.button<ButtonProps>`
  ${({ theme, as }) => css`
    border: 0;
    border-radius: ${theme.border.radius.small};
    background-color: ${theme.color.blue};
    color: ${theme.color.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.medium};
    font-weight: ${theme.font.bold};
    line-height: 19px;
    padding: 16px 99px;
    max-width: 263px;
    cursor: pointer;

    display: flex;
    align-items: center;

    ${!!as && buttonModifiers.link(theme)};
  `}
`

export const Icon = styled(IconButton)`
  ${({ theme }) => css`
    margin-left: 4px;
    width: 7px;
    height: 12px;
    path {
      fill: ${theme.color.white};
    }
  `}
`
