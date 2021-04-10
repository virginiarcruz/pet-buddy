import styled from 'styled-components'
import media from 'styled-media-query'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: repeat(7, 1fr);
  `}
`
