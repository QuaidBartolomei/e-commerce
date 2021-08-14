import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const provider = new firebase.auth.GoogleAuthProvider();

export enum DbCollections {
  Users = 'users',
  Items = 'items',
}

export function initFirebase() {
  if (firebase.apps.length > 0) return;
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const authDomain = process.env.NEXT_PUBLIC_authDomain;
  const databaseURL = process.env.NEXT_PUBLIC_databaseURL;
  const projectId = process.env.NEXT_PUBLIC_projectId;
  const storageBucket = process.env.NEXT_PUBLIC_storageBucket;
  const messagingSenderId = process.env.NEXT_PUBLIC_messagingSenderId;
  const appId = process.env.NEXT_PUBLIC_appId;
  firebase.initializeApp({
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
  });
  provider.setCustomParameters({ prompt: 'select_account' });
}

export async function initTest() {
  initFirebase();
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
}

export async function signInWithGoogle() {
  return firebase.auth().signInWithPopup(provider);
}

export async function signOut() {
  return firebase.auth().signOut();
}

export default firebase;
