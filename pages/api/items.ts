import { Product } from 'interfaces/shopItem.interface';
import { NextApiHandler } from 'next';
import firebase, { DbCollections, initFirebase } from 'utils/firebase.utils';

initFirebase();

const firestore = firebase.firestore();

const handler: NextApiHandler = async (req, res) => {
  console.log('req received');

  try {
    const itemsCollection = await firestore
      .collection(DbCollections.Items)
      .get();

    const items = itemsCollection.docs.map(doc => {
      const data = doc.data() as Product;
      return { ...data, id: doc.id };
    });

    return res.status(200).json({ items });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error.' });
  }
};

export default handler;

export async function getAllShopItems() {
  const itemsCollection = await firestore.collection(DbCollections.Items).get();

  const items = itemsCollection.docs.map(doc => {
    const data = doc.data() as Product;
    return { ...data, id: doc.id };
  });

  return items;
}
