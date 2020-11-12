import { getItemData } from 'models/shop-item/shop-item.db';
import { CartItem } from 'UserContext';
import { DbCollections } from 'utils/db.utils';
import firebase from 'utils/firebase.utils';

const firestore = () => firebase.firestore();
const auth = () => firebase.auth();

export interface CartItemModel {
  id: string;
  quantity: number;
}
interface UserModel {
  cart: CartItemModel[];
}

export async function getUserCart(userId: string): Promise<CartItem[]> {
  let ref = firebase.firestore().collection(DbCollections.Users).doc(userId);
  let doc = await ref.get();
  if (!doc.exists) {
    return [];
  }
  let user = doc.data() as UserModel;
  let cart = await getCartData(user.cart);
  return cart;
}

async function getCartData(cart: CartItemModel[]): Promise<CartItem[]> {
  let shoppingCart: CartItem[] = [];
  cart.forEach(async (item) => {
    let data = await getItemData(item.id);
    if (data)
      shoppingCart.push({
        ...data,
        quantity: item.quantity,
      });
  });
  return shoppingCart;
}
export async function updateCart(cart: CartItemModel[]) {
  let user = auth().currentUser;
  if (!user) return;
  let id = user.uid;
  await firestore().collection(DbCollections.Users).doc(id).set({
    _id: id,
    cart,
  });
  console.log('cart successfully updated');
}
