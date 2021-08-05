import { NextApiHandler } from 'next';
import firebase, { DbCollections, initFirebase } from 'utils/firebase.utils';

initFirebase();

const handler: NextApiHandler = async (req, res) => {
  try {
    const { userId } = req.query as { userId: string };
    const userDoc = await firebase
      .firestore()
      .collection(DbCollections.Items)
      .doc(userId)
      .get();
    const user = userDoc.data();
    res.json({ user });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error.' });
  }
  return res.status(200).json({ success: true });
};

export default handler;
