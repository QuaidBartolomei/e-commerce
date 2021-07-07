import { Product } from 'interfaces/shopItem.interface';
import { NextApiHandler } from 'next';

import firebase, { DbCollections, initFirebase } from 'utils/firebase.utils';

initFirebase();
const firestore = firebase.firestore();

const handler: NextApiHandler = async (req, res) => {
  try {
    const { categoryId } = req.query;

    const itemsCollection = await firestore
      .collection(DbCollections.Items)
      .where('category', '==', categoryId.toString())
      .get();

    const items = itemsCollection.docs.map(doc => {
      const data = doc.data() as Product;
      return { ...data, id: doc.id };
    });

    res.json({ items });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error.' });
  }
  return res.status(200).json({ success: true });
};

export default handler;
