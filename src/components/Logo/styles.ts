import styled from 'styled-components'
import { customMedia } from 'components/MediaMatch'

export const Container = styled.header``

export const LogoContent = styled.img`
  width: 206px;
  height: 32px;
  ${customMedia.greaterThan('tablet')`
    width: 283px;
    height: 44px;
  `}
`
