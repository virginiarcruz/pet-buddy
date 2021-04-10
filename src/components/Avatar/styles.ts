import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div``

export const Image = styled.img`
  ${({ theme: { border } }) => css`
    border-radius: ${border.radius.pill};
    width: 40px;
    height: 40px;
    cursor: pointer;
    ${media.greaterThan('medium')`
      width: 48px;
      height: 48px;
    `}
  `}
`
