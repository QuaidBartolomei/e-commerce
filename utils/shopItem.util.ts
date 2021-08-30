import { firestore } from 'firebase-admin';
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  getFirestore,
  query,
  QuerySnapshot,
  setDoc,
  where,
} from 'firebase/firestore';
import {
  CartItemData,
  Product,
  ShopItemCategory,
} from 'interfaces/shopItem.interface';
import shortid from 'shortid';
import { DbCollections, getDocById } from 'utils/firebase.utils';

const db = getFirestore();

export async function getShopItemById(
  id: string
): Promise<Product | undefined> {
  const itemDoc = await getDocById(DbCollections.Items, id);
  const item = itemDoc.data() as Product | undefined;
  return item;
}

function snapshotToItems(
  querySnapshot: QuerySnapshot<DocumentData>
): Product[] {
  try {
    const items: Product[] = [];
    querySnapshot.forEach(doc => {
      const data = doc.data() as Product;
      items.push({ ...data, id: doc.id });
    });
    return items;
  } catch {
    return [];
  }
}

export async function getShopItems(): Promise<Product[]> {
  const querySnapshot = await getDocs(collection(db, DbCollections.Items));
  return snapshotToItems(querySnapshot);
}

export async function getShopItemsByCategory(
  category: ShopItemCategory
): Promise<Product[]> {
  const q = query(
    collection(db, DbCollections.Items),
    where('category', '==', category.toString())
  );
  const querySnapshot = await getDocs(q);
  return snapshotToItems(querySnapshot);
}

export async function addShopItem(itemData: Product) {
  const id = shortid.generate();
  await setDoc(doc(db, DbCollections.Items, id), { ...itemData, id });
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
