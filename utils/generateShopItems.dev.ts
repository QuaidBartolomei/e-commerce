import firebase, { DbCollections } from 'utils/firebase.utils';
import { generateInventory } from 'utils/shopItems.utils';

export async function main() {
  const collection = await firebase
    .firestore()
    .collection(DbCollections.Items)
    .get();

  const docsN = collection.docs.length;

  if (docsN > 0) return;

  console.log('No shop items found.');
  console.log('generating new docs');
  generateInventory();
}
