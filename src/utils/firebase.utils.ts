import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: 'AIzaSyAzr57JspGRdqqpOTsBSxPHYZVraSGzrvA',
  authDomain: 'e-commerce-a8505.firebaseapp.com',
  databaseURL: 'https://e-commerce-a8505.firebaseio.com',
  projectId: 'e-commerce-a8505',
  storageBucket: 'e-commerce-a8505.appspot.com',
  messagingSenderId: '444897950136',
  appId: '1:444897950136:web:a8d4ac57e3c0c7dfbdb74d',
};

export enum DbCollections {
  Users = 'users',
  Items = 'items',
}

export function init() {
  console.log('initializing firebase app');
  firebase.initializeApp(firebaseConfig);
  provider.setCustomParameters({ prompt: 'select_account' });
}

export async function initTest() {
  init();
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
}

export async function signInWithGoogle() {
  firebase.auth().signInWithPopup(provider);
}

export function signOut() {
  firebase.auth().signOut();
}

export async function getDocData<T>(
  collection: string,
  id: string
): Promise<undefined | T> {
  let ref = firebase.firestore().collection(collection).doc(id);
  let doc = await ref.get();
  if (!doc.exists) {
    return undefined;
  }
  return doc.data() as T;
}

export default firebase;
