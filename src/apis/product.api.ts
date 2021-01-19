import {
  CartItemData,
  ItemData,
  ShopItemCategory,
} from 'interfaces/shopItem.interface';
import shortid from 'shortid';
import { getDocData } from 'utils/db.utils';
import { DbCollections } from 'utils/db.utils';
import firebase from 'utils/firebase.utils';
const firestore = () => firebase.firestore();
const storage = () => firebase.storage();

interface Product {
  id: string;
  imageUrls: string[];
  name: string;
  price: number;
  category: ShopItemCategory;
  inventory: ProductInventory[];
}

interface ProductInventory {
  baseProduct: Product;
  color: string;
  size: string;
  stock: number;
}

export async function getProductById(
  id: string
): Promise<ItemData | undefined> {
  let item = await firestore().collection(DbCollections.Items).doc(id).get();
  return { ...item.data(), id } as ItemData;
}

export async function addProduct({ inventory, ...product }: Partial<Product>) {
  let id = shortid.generate();
  await firestore()
    .collection(DbCollections.Items)
    .doc(id)
    .set({ ...product, id });
  await firestore().collection(
    DbCollections.Items + '/' + id + '/' + 'inventory'
  );
}
