import styled, { css, DefaultTheme } from 'styled-components'
import { PaginationProps } from './Pagination'

export type PaginationStyleProps = {
  isActive: boolean
} & PaginationProps

export const Container = styled.div``
export const Pages = styled.ul`
  list-style: none;
  display: flex;
`
export const Page = styled.span<PaginationStyleProps>`
  ${({ theme, isActive }) => css`
    &:not(:first-child) {
      margin-left: 8px;
    }
    a {
      border-radius: ${theme.border.radius.pill};
      color: ${theme.color.blue};
      background-color: ${theme.color.softBlue};
      width: 40px;
      height: 40px;
      line-height: 19px;
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.bold};
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      ${!!isActive &&
      `background-color: ${theme?.color?.blue};
       color: ${theme?.color?.white};
       `};

      &:hover {
        background-color: ${theme.color.blue};
        color: ${theme.color.white};
      }
    }
  `};
`
