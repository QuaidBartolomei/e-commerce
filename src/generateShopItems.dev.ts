import { DbCollections } from 'utils/db.utils';
import firebase from 'utils/firebase.utils';
import { generateItemAndAddToDb } from 'utils/shopItems.utils';

// get number of docs

export async function main() {
  console.log('checking shop data');

  const N = 50;
  const collection = await firebase
    .firestore()
    .collection(DbCollections.Items)
    .get();
  const docsN = collection.docs.length;
  console.log('docsN', docsN);
  if (docsN >= N) return;
  console.log('generating new docs');
  for (let i = N - docsN; i > 0; i--) {
    generateItemAndAddToDb();
  }
}
