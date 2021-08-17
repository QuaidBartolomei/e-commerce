import {
  CartItemData,
  Product,
  ShopItemCategory
} from 'interfaces/shopItem.interface';
import shortid from 'shortid';
import { DbCollections, getFirestore } from 'utils/firebase.utils';

const firestore = getFirestore();

export async function getShopItemById(
  id: string
): Promise<Product | undefined> {
  const itemDoc = await firestore.collection(DbCollections.Items).doc(id).get();
  const item = itemDoc.data() as Product | undefined;
  return item;
}

export async function getShopItems(): Promise<Product[]> {
  const itemsCollection = await firestore.collection(DbCollections.Items).get();
  const items = itemsCollection.docs.map(doc => {
    const data = doc.data() as Product;
    return { ...data, id: doc.id };
  });
  return items;
}

export async function getShopItemsByCategory(
  category: ShopItemCategory
): Promise<Product[]> {
  const itemsCollection = await firestore
    .collection(DbCollections.Items)
    .where('category', '==', category.toString())
    .get();
  const items = itemsCollection.docs.map(doc => {
    const data = doc.data() as Product;
    return { ...data, id: doc.id };
  });
  return items;
}

export async function addShopItem(itemData: Product) {
  let id = shortid.generate();
  await firestore
    .collection(DbCollections.Items)
    .doc(id)
    .set({ ...itemData, id });
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

export function formatItemPrice(item: Product) {
  return `$${item.price.toFixed(2)}`;
}
