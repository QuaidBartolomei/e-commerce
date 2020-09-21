import { ShopItemData } from 'interfaces/ShopItemData.interface';
import { firestore } from 'utils/firebase.utils';

enum Collections {
  Items = 'items',
}

type ItemData = {
  imageUrl: string;
  name: string;
  price: number;
};

export async function getShopItems(): Promise<ShopItemData[]> {
  let itemsCollection = await firestore.collection(Collections.Items).get();
  let items = itemsCollection.docs.map((doc) => {
    let item = doc.data() as ItemData;
    return { ...item, id: doc.id };
  });
  console.log('items', items);
  return items;
}
