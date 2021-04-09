import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Pagination } from '../Pagination'
import mockPages from '../mock'

describe('<Pagination />', () => {
  it('should render the all pages', () => {
    renderWithTheme(<Pagination pages={mockPages} />)

    expect(screen.getByRole('link', { name: /1/i })).toHaveAttribute(
      'href',
      'http://'
    )
    expect(screen.getByRole('link', { name: /2/i })).toHaveAttribute(
      'href',
      'http://'
    )
    expect(screen.getByRole('link', { name: /3/i })).toHaveAttribute(
      'href',
      'http://'
    )
  })
})
