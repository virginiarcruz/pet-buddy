import styled, { css } from 'styled-components'
import ArrowIcon from '../Button/assets/arrow.svg'

export const IconButtonContainer = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.pill};
    background-color: ${theme.color.blue};
    color: ${theme.color.white};
    width: 24px;
    height: 24px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Icon = styled(ArrowIcon)`
  ${({ theme }) => css`
    width: 7px;
    height: 12px;
    transform: rotate(90deg);

    path {
      fill: ${theme.color.white};
    }
  `}
`
