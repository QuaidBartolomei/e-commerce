import { getApps, initializeApp } from 'firebase/app';
import 'firebase/auth';
import {
  getAuth,
  GoogleAuthProvider,
  inMemoryPersistence,
  signInWithPopup,
} from 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const provider = new GoogleAuthProvider();

export enum DbCollections {
  Users = 'users',
  Items = 'items',
}

const projectId = process.env.NEXT_PUBLIC_projectId;

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  storageBucket: `${projectId}.appspot.com`,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
};

if (getApps().length <= 0) {
  initializeApp(firebaseConfig);
  provider.setCustomParameters({ prompt: 'select_account' });
}

export const db = getFirestore();

export async function initTest() {
  await getAuth().setPersistence(inMemoryPersistence);
}

export async function signInWithGoogle() {
  const auth = getAuth();
  signInWithPopup(auth, provider);
}

export async function signOut() {
  return getAuth().signOut();
}

export async function getDocById(collectionName: string, id: string) {
  const docRef = doc(db, collectionName, id);
  return await getDoc(docRef);
}

export async function getDataById(collectionName: string, id: string) {
  const d = await getDocById(collectionName, id);
  return d.data();
}
