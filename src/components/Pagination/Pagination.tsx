import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  SyntheticEvent
} from 'react'

import Link from 'next/link'
import { Container, Pages, Page } from './styles'
import Button from 'components/Button'

type LinkTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type PaginationProps = {
  isActive?: boolean
  pageLink?: string | undefined
  pageLabel?: string
} & LinkTypes

type PagesProps = {
  pages?: PaginationProps[]
}

export const Pagination = ({ pages }: PagesProps) => {
  console.log('pages', pages)
  return (
    <Container>
      <Pages>
        {pages?.map(({ isActive = false, pageLabel, pageLink, ...props }) => (
          <Page key={pageLabel}>
            <Link href={pageLink} passHref {...props}>
              <a isActive={isActive}>{pageLabel}</a>
            </Link>
          </Page>
        ))}
      </Pages>
    </Container>
  )
}
