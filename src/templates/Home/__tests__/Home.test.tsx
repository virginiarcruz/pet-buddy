import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '../Home'

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Home />)

    expect(
      screen.getByRole('img', { name: /Shelter Buddy logo/i })
    ).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    renderWithTheme(<Home />)
    expect(screen.getByTestId('home-container')).toHaveStyle({
      'background-color': '#F6F7FA'
    })
  })
})
