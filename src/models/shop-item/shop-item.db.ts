import { CartItemModel } from 'models/user/user.db';
import shortid from 'shortid';
import { getDocData } from 'utils/db.utils';
import { DbCollections } from 'utils/db.utils';
import firebase from 'utils/firebase.utils';

const firestore = () => firebase.firestore();
const storage = () => firebase.storage();

export type ClothingSize = 'S' | 'M' | 'L';
export type ShopItemCategory = 'Hats' | 'Shirts' | 'Hoodies';

export interface ItemData {
  id: string;
  imageUrls: string[];
  name: string;
  price: number;
  category: ShopItemCategory;
  sizes: ClothingSize[];
}

export const Categories: ShopItemCategory[] = ['Hats', 'Shirts', 'Hoodies'];

export async function getShopItemById(id: string): Promise<ItemData | undefined> {
  let item = await firestore().collection(DbCollections.Items).doc(id).get();
  return { ...item.data(), id } as ItemData;
}

export async function getShopItems(): Promise<ItemData[]> {
  let itemsCollection = await firestore().collection(DbCollections.Items).get();
  let items = itemsCollection.docs.map((doc) => {
    let data = doc.data() as ItemData;
    return { ...data };
  });
  return items;
}

export async function getShopItemsByCategory(
  category: ShopItemCategory
): Promise<ItemData[]> {
  let itemsCollection = await firestore()
    .collection(DbCollections.Items)
    .where('category', '==', category.toString())
    .get();
  let items = itemsCollection.docs.map((doc) => {
    let data = doc.data() as ItemData;
    return { ...data, id: doc.id };
  });
  return items;
}

export async function getUrlFromStorage(id: string): Promise<string> {
  let ref = storage().refFromURL(id);
  let url = await ref.getDownloadURL();
  return url;
}

export async function addShopItem(itemData: ItemData) {
  let id = shortid.generate();
  await firestore()
    .collection(DbCollections.Items)
    .doc(id)
    .set({ ...itemData, id });
}

export async function addImageToStorage(file: File): Promise<string> {
  let ref = storage().ref('images').child(shortid.generate());
  let snapshot = await ref.put(file);
  let url = snapshot.ref.getDownloadURL();
  return url;
}

export async function getItemData(
  id: string
): Promise<ItemData | undefined> {
  return await getDocData<ItemData>(DbCollections.Items, id);
}

export async function getCartTotal(cart: CartItemModel[]): Promise<number> {
  let total = 0;
  for (const { id, quantity } of cart) {
    let data = await getItemData(id);
    if (!data) continue;
    total += data.price * quantity;
  }
  return total;
}
