import styled, { css } from 'styled-components'
import { Grid } from 'components/Grid'

export const ListContainer = styled.div`
  .card-container {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`

export const Row = styled(Grid)`
  ${({ theme }) => css`
    background-color: ${theme.color.lighterGray};
    padding: 12px 16px;
    margin-bottom: 12px;
    height: 72px;
    text-align: left;
    align-items: center;

    p {
      font-size: ${theme.font.size.medium};
      color: ${theme.color.black};
      font-weight: ${theme.font.medium};
      line-height: 19px;
    }
  `}
`

export const PaginationContainer = styled.div`
  display: flex;
  margin-top: 32px;
`
