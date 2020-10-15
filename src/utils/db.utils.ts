import CartItemData, {
  ClothingSize,
  ShopItemCategory,
  ShopItemData,
} from 'interfaces/ShopItemData.interface';
import shortid from 'shortid';
import { UserState } from 'user/user.interface';
import { auth, Collections, firestore, storage } from 'utils/firebase.utils';

// Generic, replaceable database functions that interface with the db framework (Firebase) 

type ItemData = {
  imageUrl: string;
  name: string;
  price: number;
  category: ShopItemCategory;
  size: ClothingSize;
};

export async function getShopItems(): Promise<ShopItemData[]> {
  let itemsCollection = await firestore.collection(Collections.Items).get();
  let items = itemsCollection.docs.map((doc) => {
    let data = doc.data() as ItemData;
    return { ...data, id: doc.id };
  });
  console.log('items', items);
  return items;
}

export async function getShopItemById(id: string): Promise<ShopItemData> {
  let item = await firestore.collection(Collections.Items).doc(id).get();
  return item.data() as ShopItemData;
}

export async function getUrlFromStorage(id: string): Promise<string> {
  let ref = storage.refFromURL(id);
  let url = await ref.getDownloadURL();
  return url;
}

export function addShopItem(itemData: ItemData) {
  firestore.collection(Collections.Items).doc(shortid.generate()).set(itemData);
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
  firestore.collection(Collections.Users).doc(id).set({
    _id: id,
    cart,
  });
}
