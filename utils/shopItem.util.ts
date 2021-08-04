import axios from 'axios';
import {
  CartItemData,
  Product,
  ShopItemCategory,
} from 'interfaces/shopItem.interface';
import shortid from 'shortid';
import firebase, { DbCollections } from 'utils/firebase.utils';
import routes from './routes';

const firestore = () => firebase.firestore();
const storage = () => firebase.storage();

export async function getShopItemById(
  id: string
): Promise<Product | undefined> {
  const route = routes.api.items(id);
  const res = await axios.get(route);
  const { item } = res.data;
  return item;
}

export async function getShopItems(): Promise<Product[]> {
  const route = routes.api.items();
  const res = await axios.get(route);
  const { items } = res.data;
  return items;
}

export async function getShopItemsByCategory(
  category: ShopItemCategory
): Promise<Product[]> {
  const route = routes.api.categories(category);
  const res = await axios.get(route);
  const { items } = res.data;
  return items;
}

export async function addShopItem(itemData: Product) {
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

export async function getCartTotal(cart: CartItemData[]): Promise<number> {
  let total = 0;
  for (const { id, quantity } of cart) {
    let data = await getShopItemById(id);
    if (!data) continue;
    total += data.price * quantity;
  }
  return total;
}
