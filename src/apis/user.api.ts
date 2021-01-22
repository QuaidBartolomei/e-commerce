import { CartItemData } from 'interfaces/shopItem.interface';
import firebase, { DbCollections } from 'utils/firebase.utils';

const firestore = () => firebase.firestore();
const auth = () => firebase.auth();

interface UserModel {
  cart: CartItemData[];
}

export async function getUserCart(userId: string): Promise<CartItemData[]> {
  const ref = firebase.firestore().collection(DbCollections.Users).doc(userId);
  const doc = await ref.get();
  if (!doc.exists) {
    return [];
  }
  const user = doc.data() as UserModel;
  const { cart } = user; // await getCartData(user.cart);
  return cart;
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

export async function signout() {
  await auth().signOut();
}

export async function registerNewUser(email: string, password: string) {
  auth().createUserWithEmailAndPassword(email, password);
}

export async function signInWithEmail(email: string, password: string) {
  return auth().signInWithEmailAndPassword(email, password);
}
