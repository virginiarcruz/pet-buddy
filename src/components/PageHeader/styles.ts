import styled from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  > input {
    margin-top: 32px;
  }
  ${media.greaterThan('medium')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > input {
      margin-top: 0;
    }
  `}
`
