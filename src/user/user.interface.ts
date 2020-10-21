import CartItemData from "interfaces/ShopItemData.interface";

export interface UserState {
  isAuth: boolean;
  cart: CartItemData[];
}
