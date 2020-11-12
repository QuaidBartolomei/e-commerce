import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const provider = new firebase.auth.GoogleAuthProvider();

export const firebaseConfig = {
  apiKey: 'AIzaSyAzr57JspGRdqqpOTsBSxPHYZVraSGzrvA',
  authDomain: 'e-commerce-a8505.firebaseapp.com',
  databaseURL: 'https://e-commerce-a8505.firebaseio.com',
  projectId: 'e-commerce-a8505',
  storageBucket: 'e-commerce-a8505.appspot.com',
  messagingSenderId: '444897950136',
  appId: '1:444897950136:web:a8d4ac57e3c0c7dfbdb74d',
};

export async function init() {
  console.log('initializing firebase app');
  firebase.initializeApp(firebaseConfig);
  await firebase
    .auth()
    .setPersistence(
      process.env.NODE_ENV === 'test'
        ? firebase.auth.Auth.Persistence.NONE
        : firebase.auth.Auth.Persistence.LOCAL
    );
  provider.setCustomParameters({ prompt: 'select_account' });
}

export async function signInWithGoogle() {
  firebase.auth().signInWithPopup(provider);
}

export function signOut() {
  firebase.auth().signOut();
}

export default firebase;
