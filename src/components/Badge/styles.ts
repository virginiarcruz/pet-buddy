import styled, { css } from 'styled-components'

export const BadgeContainer = styled.span`
  ${({ theme: { border, color, font } }) => css`
    border-radius: ${border.radius.pill};
    background-color: ${color.orange};
    color: ${color.white};
    font-weight: ${font.bold};
    font-size: ${font.size.small};
    padding: 4px 8px;
    width: max-content;
    height: 25px;
    line-height: 17px;
  `}
`
