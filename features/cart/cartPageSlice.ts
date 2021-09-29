import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export interface CartPageState {
  itemToRemove: string;
}
const initialState: CartPageState = {
  itemToRemove: '',
};

export const selectItemToRemove = (state: RootState) =>
  state.cartPage.itemToRemove;

export const cartPageSlice = createSlice({
  name: 'cartPage',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setItemToRemove: (state, action: PayloadAction<string>) => {
      state.itemToRemove = action.payload;
    },
  },
});

export const { setItemToRemove } = cartPageSlice.actions;

export default cartPageSlice.reducer;
