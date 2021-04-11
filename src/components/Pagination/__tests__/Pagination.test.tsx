import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Pagination } from '../Pagination'

describe('<Pagination />', () => {
  it('should render the page number', () => {
    renderWithTheme(<Pagination pageLabel="1" href="http://" />)

    expect(screen.getByRole('link', { name: /1/i })).toHaveAttribute(
      'href',
      'http://'
    )
  })
})
