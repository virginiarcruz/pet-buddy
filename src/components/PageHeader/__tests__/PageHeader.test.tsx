import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PageHeader from '../PageHeader'

describe('<PageHeader />', () => {
  it('should render the <PageHeader />', () => {
    const { container } = renderWithTheme(<PageHeader />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
