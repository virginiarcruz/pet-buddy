import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'

import Grid from '../Grid'

describe('<Grid />', () => {
  it('should render the <Grid />', () => {
    const { container } = renderWithTheme(<Grid />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
