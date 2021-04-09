import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '../Button'

describe('<Button />', () => {
  it('should render the <Button />', () => {
    const { container } = renderWithTheme(<Button> my button</Button>)

    expect(container).toMatchSnapshot()

    expect(screen.getByRole('button', { name: /my button/i })).toHaveStyle({
      'max-width': '263px',
      padding: '16px 99px',
      'font-size': '16px'
    })
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        my button
      </Button>
    )

    expect(screen.getByRole('link', { name: /my button/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
