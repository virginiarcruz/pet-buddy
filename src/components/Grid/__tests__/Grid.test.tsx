import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Grid } from '../Grid'

describe('<Grid />', () => {
  it('should render the <Grid />', () => {
    const { container } = renderWithTheme(<Grid> Children </Grid>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: 1fr;
      }

      @media (min-width:992px) {
        .c0 {
          display: grid;
          grid-template-columns: 70px 1fr 1fr 1.8fr 0.8fr 1.5fr 65px;
          grid-gap: 10px;
        }
      }

      <div
        class="c0"
      >
         Children 
      </div>
    `)
  })
})
