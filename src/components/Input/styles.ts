import styled, { css } from 'styled-components'
import { customMedia } from 'components/MediaMatch'

export const InputContainer = styled.input`
  ${({ theme }) => css`
    padding: 12px 12px 12px 32px;
    background-color: ${theme.color.lightGray};
    background-image: url('img/icon-search.svg');
    background-repeat: no-repeat;
    background-position: 12px 14px;
    border-radius: ${theme.border.radius.medium};
    border: 0;
    font-size: ${theme.font.size.medium};
    font-family: ${theme.font.family};
    color: ${theme.color.middleGray};
    line-height: 19px;
    width: 100%;
    ${customMedia.greaterThan('tablet')`
      width: 310px;
    `}

    & ::placeholder {
      color: ${theme.color.middleGray};
    }
  `}
`
