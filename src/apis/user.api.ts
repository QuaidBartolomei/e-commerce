import { CartItemData } from 'interfaces/shopItem.interface';
import { getItemData } from 'apis/shopItem.api';
import { CartItem } from 'UserContext';
import { DbCollections } from 'utils/db.utils';
import firebase from 'utils/firebase.utils';

const firestore = () => firebase.firestore();
const auth = () => firebase.auth();

interface UserModel {
  cart: CartItemData[];
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

async function getCartData(cart: CartItemData[]): Promise<CartItem[]> {
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
export async function updateCart(cart: CartItemData[]) {
  let user = auth().currentUser;
  if (!user) return;
  let id = user.uid;
  await firestore().collection(DbCollections.Users).doc(id).set({
    _id: id,
    cart,
  });
  console.log('cart successfully updated');
}
