import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const InputContainer = styled.input`
  ${({ theme }) => css`
    padding: 12px;
    background-color: ${theme.color.lightGray};
    border-radius: ${theme.border.radius.medium};
    border: 0;
    font-size: ${theme.font.size.medium};
    font-family: ${theme.font.family};
    color: ${theme.color.middleGray};
    line-height: 19px;
    ${media.greaterThan('medium')`
      width: 310px;
    `}

    & ::placeholder {
      color: ${theme.color.middleGray};
    }
  `}
`
