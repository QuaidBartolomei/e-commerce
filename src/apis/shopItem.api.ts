import { CartItemData, Product, ShopItemCategory } from 'interfaces/shopItem.interface';
import shortid from 'shortid';
import firebase, { DbCollections, getDocData } from 'utils/firebase.utils';

const firestore = () => firebase.firestore();
const storage = () => firebase.storage();


export async function getProductById(id: string): Promise<Product | undefined> {
  let item = await firestore().collection(DbCollections.Items).doc(id).get();
  return { ...item.data(), id } as Product;
}

export async function getShopItems(): Promise<Product[]> {
  let itemsCollection = await firestore().collection(DbCollections.Items).get();
  let items = itemsCollection.docs.map((doc) => {
    let data = doc.data() as Product;
    return { ...data };
  });
  return items;
}

export async function getShopItemsByCategory(
  category: ShopItemCategory
): Promise<Product[]> {
  let itemsCollection = await firestore()
    .collection(DbCollections.Items)
    .where('category', '==', category.toString())
    .get();
  let items = itemsCollection.docs.map((doc) => {
    let data = doc.data() as Product;
    return { ...data, id: doc.id };
  });
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

export async function getItemData(
  id: string
): Promise<Product | undefined> {
  return await getDocData<Product>(DbCollections.Items, id);
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
