import styled from 'styled-components'
import media from 'styled-media-query'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 70px 1fr 1fr 1.8fr 0.8fr 1.5fr 65px;
      grid-gap: 10px;
  `}
`
