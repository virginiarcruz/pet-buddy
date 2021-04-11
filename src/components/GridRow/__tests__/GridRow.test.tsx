import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GridRow from '../GridRow'

describe('<GridRow />', () => {
  it('should render the content', () => {
    const { container } = renderWithTheme(<GridRow />)
    expect(container).toMatchSnapshot()

    expect(
      screen.getByRole('heading', {
        name: /your animals/i
      })
    ).toBeInTheDocument
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByTestId('header-desktop')).toBeInTheDocument()
    expect(screen.getByTestId('pagination')).toBeInTheDocument()
  })
})
