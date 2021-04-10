import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Card from '../Card'

describe('<Card />', () => {
  it('should render the <Card />', () => {
    const { container } = renderWithTheme(<Card />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
