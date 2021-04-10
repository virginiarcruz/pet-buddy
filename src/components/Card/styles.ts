import styled, { css } from 'styled-components'

export const CardContainer = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.color.lighterGray};
    border-radius: ${theme.border.radius.medium};
    padding: 16px;
  `}
`
export const Header = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Input = styled.input`
  display: none;

  &:checked {
    & + label {
      .icon-button {
        transform: rotate(180deg);
      }
    }
    & + label + .card-content {
      max-height: 100vh;
    }
    & + label::before {
      transform: rotate(90deg) translateX(-3px);
    }
  }
`
export const CardContent = styled.div`
  ${({ theme }) => css`
  max-height: 0;
  overflow: hidden;
  transition: max-height .25s ease-in-out;
    p,
    span {
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.medium};
      line-height: 19px;
    }
    p {
      color: ${theme.color.darkGray};
      margin-right: 9px;
      &:not(:last-child){
        margin-bottom: 16px;
      }
      &:first-child {
        margin-top: 24px;
      }
      &:last-child {
        margin-bottom: 24px;
      }
      span {
        color: ${theme.color.black};
        }
      }
    }
    .card-inner {
      button {
        margin: 0 auto;
      }
    }
  `}
`

export const Name = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.size.medium};
    font-weight: ${theme.font.medium};
    color: ${theme.color.black};
    line-height: 19px;
    margin-left: 20px;
    text-align: left;
    flex-grow: 1;
  `}
`
