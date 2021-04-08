import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.header``

export const LogoContent = styled.img`
  width: 206px;
  height: 32px;
  ${media.greaterThan('medium')`
    width: 283px;
    height: 44px;
  `}
`
