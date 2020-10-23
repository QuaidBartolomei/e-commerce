import { CartItemData } from 'interfaces/shop-item.interface';

export interface UserState {
  isAuth: boolean;
  cart: CartItemData[];
}
