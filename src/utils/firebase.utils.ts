import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAzr57JspGRdqqpOTsBSxPHYZVraSGzrvA',
  authDomain: 'e-commerce-a8505.firebaseapp.com',
  databaseURL: 'https://e-commerce-a8505.firebaseio.com',
  projectId: 'e-commerce-a8505',
  storageBucket: 'e-commerce-a8505.appspot.com',
  messagingSenderId: '444897950136',
  appId: '1:444897950136:web:a8d4ac57e3c0c7dfbdb74d',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;