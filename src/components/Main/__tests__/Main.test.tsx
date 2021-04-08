import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Main from '../Main'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Main />)

    expect(
      screen.getByRole('img', { name: /Shelter Buddy logo/i })
    ).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    renderWithTheme(<Main />)
    expect(screen.getByTestId('main-container')).toHaveStyle({
      'background-color': '#F6F7FA'
    })
  })
})
