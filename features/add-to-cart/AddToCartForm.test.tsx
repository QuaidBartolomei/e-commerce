import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddToCartForm from 'features/add-to-cart/AddToCartForm'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { dummyItem } from 'utils/test.utils'

const item = dummyItem

describe('CartItem component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <AddToCartForm item={item} />
      </Provider>,
    )
  })
  afterAll(cleanup)

  test('submit button should add item to cart', async () => {
    const submitButton = screen.getByRole('button', {
      name: /add/i,
    })

    expect(submitButton)
    expect(localStorage.setItem).toHaveBeenCalledTimes(0)

    userEvent.click(submitButton)

    await waitFor(() => {
      const alertText = 'Item added to cart!'
      expect(screen.getByText(alertText))
    })
  })
})
