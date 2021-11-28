import { cleanup, render, waitFor } from '@testing-library/react'
import Layout from 'components/Layout'
import { addItem } from 'features/user/userSlice'
import CartPage from 'pages/cart'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { dummyItem } from 'utils/test.utils'

jest.mock('next/dist/client/router', () => require('next-router-mock'))

const useComponent = () =>
  render(
    <Provider store={store}>
      <Layout>
        <CartPage />
      </Layout>
    </Provider>,
  )

afterEach(cleanup)

describe('Cart page', () => {
  test('empty cart displays message', () => {
    const { getByText } = useComponent()
    expect(getByText('empty', { exact: false }))
  })

  test('show cart item name', () => {
    const { getByText } = useComponent()
    addItem(dummyItem)
    waitFor(() => {
      expect(getByText(dummyItem.name, { exact: true }))
    })
  })
})
