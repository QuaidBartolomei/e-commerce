import { firestore } from 'utils/firebase.utils';

// Generic, replaceable database functions that interface with the db framework (Firebase)


export async function getDocData<T>(
  collection: string,
  id: string
): Promise<undefined | T> {
  let ref = firestore.collection(collection).doc(id);
  let doc = await ref.get();
  if (!doc.exists) {
    return undefined;
  }
  return doc.data() as T;
}
