import { renderWithTheme } from 'utils/tests/helpers'

import IconButton from '../IconButton'

describe('<IconButton />', () => {
  it('should render the <IconButton />', () => {
    const { container } = renderWithTheme(<IconButton />)

    expect(container).toMatchSnapshot()
  })
})
