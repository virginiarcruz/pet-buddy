import styled, { css } from 'styled-components'
import { generateMedia, DefaultBreakpoints } from 'styled-media-query'

export const customMedia = generateMedia({
  desktop: '1170px',
  tablet: '992px',
  mobile: '768px'
})

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${customMedia.lessThan(size)` display: block `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${customMedia.greaterThan(size)` display: block `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
