import { NextApiHandler } from 'next';
import firebase, { DbCollections, initFirebase } from 'utils/firebase.utils';

initFirebase();
const firestore = firebase.firestore();

const handler: NextApiHandler = async (req, res) => {
  try {
    const { itemId } = req.query as { itemId: string };
    const itemDoc = await firestore
      .collection(DbCollections.Items)
      .doc(itemId)
      .get();
    const item = itemDoc.data();
    return res.status(200).json({ item });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error.' });
  }
};

export default handler;
