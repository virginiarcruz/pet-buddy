import React, {
  SyntheticEvent,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes
} from 'react'

import { Page } from './styles'

type LinkTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type PaginationProps = {
  isActive?: boolean
  pageLink?: string | undefined
  pageLabel?: string
  href?: string
  onClick?: (e: SyntheticEvent) => void
} & LinkTypes

export const Pagination = ({
  isActive = false,
  onClick,
  href,
  pageLabel,
  ...props
}: PaginationProps) => {
  return (
    <Page isActive={isActive}>
      <a href={href} onClick={onClick} {...props}>
        {pageLabel}
      </a>
    </Page>
  )
}
