import styled, { css } from 'styled-components'
import { Grid } from 'components/Grid'
import { customMedia } from 'components/MediaMatch'

export const ListContainer = styled.div`
  .card-container {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`
export const TitleColumn = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.size.medium};
    font-weight: ${theme.font.medium};
    color: ${theme.color.darkGray};
    line-height: 19px;
    padding-bottom: 24px;
    text-align: left;
  `}
`

export const ContentGrid = styled(Grid)`
  padding: 0 16px;
  ${customMedia.greaterThan('tablet')`
    margin-top: 56px;
  `}
`

export const Column = styled.div``

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
  overflow-x: scroll;
  ${customMedia.greaterThan('tablet')`
    overflow: hidden;
  `}
`
