import cartReducer, {
  CartPageState,
  selectItemToRemove,
  setItemToRemove,
} from 'features/cart/cartPageSlice'
import { dummyItem, initialStore } from 'utils/test.utils'

const initialCartState: CartPageState = { itemToRemove: '' }

describe('user reducer', () => {
  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(
      initialCartState,
    )
  })

  it('setItemToRemove', () => {
    const actual = cartReducer(initialCartState, setItemToRemove(dummyItem.id))
    expect(actual.itemToRemove).toEqual(dummyItem.id)
  })

  it('selectItemToRemove', () => {
    const itemToRemove = selectItemToRemove({
      ...initialStore,
      cartPage: {
        itemToRemove: '1',
      },
    })
    expect(itemToRemove).toBe('1')
  })
})
