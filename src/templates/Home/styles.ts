import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  ${({ theme: { color } }) => css`
    background-color: ${color.mainBg};
    width: 100%;
    height: 100%;
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

export const ContentGrid = styled.div`
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-top: 56px;
  `}
`
