import { cleanup, render } from '@testing-library/react'
import Homepage from 'pages'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

describe('Index page', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Homepage sortedItems={[]} />
      </Provider>,
    )
  })
  afterAll(cleanup)

  it('renders index page', () => {
    expect(true)
  })
})
