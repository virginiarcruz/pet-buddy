import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Title = styled.h1`
  ${({ theme: { font, color } }) => css`
    color: ${color.black};
    font-family: ${font.family};
    font-size: ${font.size.large};
    font-weight: ${font.bold};
    margin-right: 8px;
    line-height: 27px;
  `}
`
