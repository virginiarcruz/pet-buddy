import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '../Logo'

describe('<Logo />', () => {
  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)

    expect(
      screen.getByRole('img', { name: /Shelter Buddy logo/i })
    ).toHaveAttribute('src', '/img/logo.svg')
  })
})
