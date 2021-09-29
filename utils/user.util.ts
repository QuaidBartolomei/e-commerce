import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { CartItemData } from 'features/shop-item/shopItem.interface';
import { DbCollections, getDataById, getDocById } from 'utils/firebase.utils';

const db = getFirestore();

interface UserModel {
  cart: CartItemData[];
}

export async function getUserById(id: string): Promise<UserModel | undefined> {
  return (await getDataById(DbCollections.Users, id)) as UserModel;
}

export async function getUserCart(userId: string): Promise<CartItemData[]> {
  const user = await getUserById(userId);
  if (!user) return [];
  const { cart } = user; // await getCartData(user.cart);
  return cart;
}

export async function updateCart(cart: CartItemData[]) {
  const user = getAuth().currentUser;
  if (!user) return;
  const id = user.uid;
  const userRef = doc(db, DbCollections.Items, id);
  const newData = {
    _id: id,
    cart,
  };
  await updateDoc(userRef, newData);
  console.log('cart successfully updated');
}

export async function signout() {
  await getAuth().signOut();
}

export async function registerNewUser(email: string, password: string) {
  createUserWithEmailAndPassword(getAuth(), email, password);
}

export async function signInWithEmail(email: string, password: string) {
  signInWithEmailAndPassword(getAuth(), email, password);
}
