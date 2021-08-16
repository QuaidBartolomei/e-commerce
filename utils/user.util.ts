import { CartItemData } from 'interfaces/shopItem.interface';
import firebase, { DbCollections } from 'utils/firebase.utils';

const firestore = () => firebase.firestore();
const auth = () => firebase.auth();

interface UserModel {
  cart: CartItemData[];
}

export async function getUserById(id: string): Promise<UserModel | undefined> {
  const userDoc = await firebase
    .firestore()
    .collection(DbCollections.Items)
    .doc(id)
    .get();
  const user = userDoc.data() as UserModel;
  return user;
}

export async function getUserCart(userId: string): Promise<CartItemData[]> {
  const user = await getUserById(userId);
  if (!user) return [];
  const { cart } = user; // await getCartData(user.cart);
  return cart;
}

export async function updateCart(cart: CartItemData[]) {
  const user = auth().currentUser;
  if (!user) return;
  const id = user.uid;
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
