import React, { SyntheticEvent, AnchorHTMLAttributes } from 'react'

import { Page } from './styles'

type LinkTypes = AnchorHTMLAttributes<HTMLAnchorElement>

export type PaginationProps = {
  isActive?: boolean
  pageLink?: string | undefined
  pageLabel?: string | number
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
