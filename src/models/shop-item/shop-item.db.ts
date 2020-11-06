import { CartItemModel } from 'models/user/user.db';
import shortid from 'shortid';
import { getDocData } from 'utils/db.utils';
import { Collections, firestore, storage } from 'utils/firebase.utils';


export type ClothingSize = 'S' | 'M' | 'L';
export type ShopItemCategory = 'Hats' | 'Shirts' | 'Hoodies';

export interface ShopItemModel {
  id: string;
  imageUrls: string[];
  name: string;
  price: number;
  category: ShopItemCategory;
  sizes: ClothingSize[];
}

export const Categories: ShopItemCategory[] = ['Hats', 'Shirts', 'Hoodies'];

export async function getShopItemById(id: string): Promise<ShopItemModel> {
  let item = await firestore.collection(Collections.Items).doc(id).get();
  return { ...item.data(), id } as ShopItemModel;
}

export async function getShopItems(): Promise<ShopItemModel[]> {
  let itemsCollection = await firestore.collection(Collections.Items).get();
  let items = itemsCollection.docs.map((doc) => {
    let data = doc.data() as ShopItemModel;
    return { ...data };
  });
  return items;
}

export async function getShopItemsByCategory(
  category: ShopItemCategory
): Promise<ShopItemModel[]> {
  let itemsCollection = await firestore
    .collection(Collections.Items)
    .where('category', '==', category.toString())
    .get();
  let items = itemsCollection.docs.map((doc) => {
    let data = doc.data() as ShopItemModel;
    return { ...data, id: doc.id };
  });
  return items;
}

export async function getUrlFromStorage(id: string): Promise<string> {
  let ref = storage.refFromURL(id);
  let url = await ref.getDownloadURL();
  return url;
}

export async function addShopItem(itemData: ShopItemModel) {
  let id = shortid.generate();
  await firestore
    .collection(Collections.Items)
    .doc(id)
    .set({ ...itemData, id });
}

export async function addImageToStorage(file: File): Promise<string> {
  let ref = storage.ref('images').child(shortid.generate());
  let snapshot = await ref.put(file);
  let url = snapshot.ref.getDownloadURL();
  return url;
}

export async function getItemData(
  id: string
): Promise<ShopItemModel | undefined> {
  return await getDocData<ShopItemModel>(Collections.Items, id);
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
