import {
  CartItemData,
  ShopItemCategory,
  ShopItemData,
} from 'interfaces/shop-item.interface';
import shortid from 'shortid';
import { UserState } from 'user/user.interface';
import { auth, Collections, firestore, storage } from 'utils/firebase.utils';

// Generic, replaceable database functions that interface with the db framework (Firebase)

export async function getShopItems(): Promise<ShopItemData[]> {
  let itemsCollection = await firestore.collection(Collections.Items).get();
  let items = itemsCollection.docs.map((doc) => {
    let data = doc.data() as ShopItemData;
    return { ...data };
  });
  console.log('items', items);
  return items;
}

export async function getShopItemById(id: string): Promise<ShopItemData> {
  let item = await firestore.collection(Collections.Items).doc(id).get();
  return { ...item.data(), id } as ShopItemData;
}

export async function getShopItemsByCategory(
  category: ShopItemCategory
): Promise<ShopItemData[]> {
  let itemsCollection = await firestore
    .collection(Collections.Items)
    .where('category', '==', category.toString())
    .get();
  let items = itemsCollection.docs.map((doc) => {
    let data = doc.data() as ShopItemData;
    return { ...data, id: doc.id };
  });
  console.log('items', items);
  return items;
}

export async function searchForItems(query: string): Promise<ShopItemData[]> {
  let itemsCollection = await firestore.collection(Collections.Items).get();
  let items = itemsCollection.docs.map((doc) => {
    let data = doc.data() as ShopItemData;
    return { ...data, id: doc.id };
  });
  console.log('items', items);
  return items;
}

export async function getUrlFromStorage(id: string): Promise<string> {
  let ref = storage.refFromURL(id);
  let url = await ref.getDownloadURL();
  return url;
}

export async function addShopItem(itemData: ShopItemData) {
  let id = shortid.generate();
  await firestore
    .collection(Collections.Items)
    .doc(id)
    .set({ ...itemData, id });
}

export async function addImageToStorage(file: File): Promise<string> {
  let ref = storage.ref('images').child(shortid.generate());
  console.log(ref);
  let snapshot = await ref.put(file);
  let url = snapshot.ref.getDownloadURL();
  return url;
}

export async function getUserData(userId: string): Promise<UserState> {
  let ref = firestore.collection(Collections.Users).doc(userId);
  let doc = await ref.get();
  if (!doc.exists) {
    await ref.set({
      _id: userId,
      cart: [],
    });
    doc = await ref.get();
  }
  return doc.data() as UserState;
}

export async function updateCart(cart: CartItemData[]) {
  let user = auth.currentUser;
  if (!user) return;
  let id = user.uid;
  await firestore.collection(Collections.Users).doc(id).set({
    _id: id,
    cart,
  });
  console.log('cart successfully updated');
}

async function getDocData<T>(
  collection: string,
  id: string
): Promise<undefined | T> {
  let ref = firestore.collection(collection).doc(id);
  let doc = await ref.get();
  if (!doc.exists) {
    return undefined;
  }
  return doc.data() as T;
}

export async function getItemData(
  id: string
): Promise<ShopItemData | undefined> {
  return await getDocData<ShopItemData>(Collections.Items, id);
}
export async function getCartTotal(cart: CartItemData[]): Promise<number> {
  let total = 0;
  for (const { id, quantity } of cart) {
    let data = await getItemData(id);
    if (!data) continue;
    total += data.price * quantity;
  }
  return total;
}
