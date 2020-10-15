import CartItemData from "interfaces/ShopItemData.interface";

export interface UserState {
  _id: string;
  cart: CartItemData[];
}
