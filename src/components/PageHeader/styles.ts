import styled from 'styled-components'
import { customMedia } from 'components/MediaMatch'

export const Header = styled.header`
  margin-bottom: 32px;
  > input {
    margin-top: 32px;
  }
  ${customMedia.greaterThan('tablet')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    > input {
      margin-top: 0;
    }
  `}
`
