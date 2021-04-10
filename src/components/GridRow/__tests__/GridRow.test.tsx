import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'

import GridRow from '../GridRow'

describe('<GridRow />', () => {
  it('should render the <GridRow />', () => {
    const { container } = renderWithTheme(<GridRow />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
