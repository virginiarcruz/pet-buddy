import styled from 'styled-components'
import { customMedia } from 'components/MediaMatch'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${customMedia.greaterThan('tablet')`
      display: grid;
      grid-template-columns: 70px 1fr 1fr 1.8fr 0.8fr 1.5fr 65px;
      grid-gap: 10px;
  `}
`
