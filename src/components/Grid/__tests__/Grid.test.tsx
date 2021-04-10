import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Grid from '../Grid'

describe('<Grid />', () => {
  it('should render the <Grid />', () => {
    const { container } = renderWithTheme(<Grid />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
