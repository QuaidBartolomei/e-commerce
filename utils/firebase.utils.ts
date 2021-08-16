import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const provider = new firebase.auth.GoogleAuthProvider();

export enum DbCollections {
  Users = 'users',
  Items = 'items',
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_databaseURL,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
};

export function initFirebase() {
  if (firebase.apps.length > 0) return;

  firebase.initializeApp(firebaseConfig);
  provider.setCustomParameters({ prompt: 'select_account' });
}

export function getFirestore() {
  if (!firebase.firestore()) initFirebase();
  return firebase.firestore();
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
