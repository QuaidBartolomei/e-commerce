import {
  collection,
  doc,
  DocumentData,
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
import { DbCollections, getDataById } from 'utils/firebase.utils';

const db = getFirestore();

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

export function getCartTotal(cart: CartItemData[]) {
  return cart.reduce((total, x) => total + x.price * x.quantity, 0).toFixed(2);
}

export function formatItemPrice(item: Product) {
  return `$${item.price.toFixed(2)}`;
}

export function priceToString(price: number) {
  return `$${price.toFixed(2)}`;
}
