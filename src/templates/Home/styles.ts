import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Grid } from 'components/Grid'

export const Container = styled.main`
  ${({ theme: { color } }) => css`
    background-color: ${color.mainBg};
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 72px 16px 42px 16px;
    ${media.greaterThan('medium')`
      padding: 96px 156px 90px 156px;
    `}
  `}
`
export const Content = styled.section`
  ${({ theme: { color, border } }) => css`
    background-color: ${color.white};
    width: 100%;
    min-height: 200px;
    border-radius: ${border.radius.medium};
    margin-top: 56px;
    padding: 32px 24px;
    ${media.greaterThan('medium')`
      padding: 40px 40px 32px 40px;
      margin-top: 96px;
    `}
  `}
`

export const ContentGrid = styled(Grid)`
  padding: 0 16px;
  ${media.greaterThan('medium')`
    margin-top: 56px;
  `}
`

export const Column = styled.div``
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
