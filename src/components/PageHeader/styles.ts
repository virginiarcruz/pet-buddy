import styled from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  margin-bottom: 32px;
  > input {
    margin-top: 32px;
  }
  ${media.greaterThan('medium')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    > input {
      margin-top: 0;
    }
  `}
`
