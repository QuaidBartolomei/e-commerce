import { DbCollections } from 'utils/firebase.utils';
import { generateInventory } from 'utils/shopItems.utils';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export async function main() {
  const db = getFirestore();

  const querySnapshot = await getDocs(collection(db, DbCollections.Items));

  const docsN = querySnapshot.size;

  if (docsN > 0) return;

  console.log('No shop items found.');
  console.log('generating new docs');
  generateInventory();
}
