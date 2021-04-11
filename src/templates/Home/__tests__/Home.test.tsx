import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import '@testing-library/jest-dom/extend-expect'

import Home from '../Home'

jest.mock('../Home', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="home-container"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home />)

    expect(screen.getByTestId('home-container')).toBeInTheDocument()
  })
})
