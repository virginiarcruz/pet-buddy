import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

export type CustoMediaProps = {
  desktop?: string
  tablet?: string
  mobile?: string
}
type breakpoint = keyof CustoMediaProps

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

export const customMedia = generateMedia({
  desktop: '1170px',
  tablet: '992px',
  mobile: '768px'
})

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
